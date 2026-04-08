import { CSSProperties, PointerEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const INFLUENCE_RADIUS = 176;

const createZeroArray = (count: number) => Array.from({ length: count }, () => 0);

const getInitialDesktopState = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.matchMedia('(min-width: 769px)').matches;
};

export const useProximityNav = (itemCount: number) => {
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(getInitialDesktopState);
  const [influences, setInfluences] = useState<number[]>(() => createZeroArray(itemCount));

  const navRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const latestPointerRef = useRef<{ clientX: number; clientY: number } | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const isProximityEnabled = isDesktop && !shouldReduceMotion;

  useEffect(() => {
    setInfluences((previous) => (
      previous.length === itemCount ? previous : createZeroArray(itemCount)
    ));
  }, [itemCount]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(min-width: 769px)');
    const updateDesktopState = (event?: MediaQueryList | MediaQueryListEvent) => {
      setIsDesktop(event ? event.matches : mediaQuery.matches);
    };

    updateDesktopState();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateDesktopState);
      return () => mediaQuery.removeEventListener('change', updateDesktopState);
    }

    mediaQuery.addListener(updateDesktopState);
    return () => mediaQuery.removeListener(updateDesktopState);
  }, []);

  const resetInfluence = useCallback(() => {
    latestPointerRef.current = null;

    if (animationFrameRef.current !== null && typeof window !== 'undefined') {
      window.cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    setInfluences(createZeroArray(itemCount));
  }, [itemCount]);

  const calculateInfluence = useCallback(() => {
    if (!navRef.current || !latestPointerRef.current || !isProximityEnabled) {
      animationFrameRef.current = null;
      return;
    }

    const pointer = latestPointerRef.current;

    setInfluences(
      itemRefs.current.slice(0, itemCount).map((itemRef) => {
        if (!itemRef) {
          return 0;
        }

        const itemRect = itemRef.getBoundingClientRect();
        const centerX = itemRect.left + itemRect.width / 2;
        const centerY = itemRect.top + itemRect.height / 2;
        const distance = Math.hypot(
          (pointer.clientX - centerX) * 0.94,
          (pointer.clientY - centerY) * 1.08,
        );
        const normalized = Math.max(0, Math.min(1, 1 - distance / INFLUENCE_RADIUS));
        return normalized * normalized;
      }),
    );

    animationFrameRef.current = null;
  }, [isProximityEnabled, itemCount]);

  const schedulePointerUpdate = useCallback((clientX: number, clientY: number) => {
    if (!isProximityEnabled || typeof window === 'undefined') {
      return;
    }

    latestPointerRef.current = { clientX, clientY };

    if (animationFrameRef.current !== null) {
      return;
    }

    animationFrameRef.current = window.requestAnimationFrame(calculateInfluence);
  }, [calculateInfluence, isProximityEnabled]);

  const handleNavPointerEnter = useCallback((event: PointerEvent<HTMLElement>) => {
    schedulePointerUpdate(event.clientX, event.clientY);
  }, [schedulePointerUpdate]);

  const handleNavPointerMove = useCallback((event: PointerEvent<HTMLElement>) => {
    schedulePointerUpdate(event.clientX, event.clientY);
  }, [schedulePointerUpdate]);

  const handleNavPointerLeave = useCallback(() => {
    resetInfluence();
  }, [resetInfluence]);

  useEffect(() => {
    if (isProximityEnabled) {
      return undefined;
    }

    resetInfluence();
    return undefined;
  }, [isProximityEnabled, resetInfluence]);

  useEffect(() => () => {
    if (animationFrameRef.current !== null && typeof window !== 'undefined') {
      window.cancelAnimationFrame(animationFrameRef.current);
    }
  }, []);

  const setItemRef = useCallback(
    (index: number) => (node: HTMLAnchorElement | null) => {
      itemRefs.current[index] = node;
    },
    [],
  );

  const getItemMotion = useCallback((index: number) => {
    const influence = isProximityEnabled ? influences[index] ?? 0 : 0;

    return {
      influence,
      animate: isProximityEnabled
        ? {
            scale: 1 + influence * 0.16,
            y: influence * -4,
            opacity: 0.84 + influence * 0.16,
          }
        : {
            scale: 1,
            y: 0,
            opacity: 1,
          },
      style: {
        '--nav-proximity': `${influence}`,
        '--nav-letter-spacing': `${0.1 + influence * 0.03}em`,
        '--nav-opacity': `${0.9 + influence * 0.1}`,
        zIndex: `${Math.round(10 + influence * 10)}`,
      } as CSSProperties,
    };
  }, [influences, isProximityEnabled]);

  return {
    navRef,
    isProximityEnabled,
    setItemRef,
    getItemMotion,
    handleNavPointerEnter,
    handleNavPointerMove,
    handleNavPointerLeave,
  };
};
