import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import rough from 'roughjs';
import styles from './DoodleCanvas.module.css';

interface Point {
  x: number;
  y: number;
}

interface Stroke {
  points: Point[];
  color: string;
  width: number;
}

const MAX_STROKES = 50;
const DEFAULT_COLOR = '#212121';
const DEFAULT_WIDTH = 2.5;

export const DoodleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const strokesRef = useRef<Stroke[]>([]);
  const currentStrokeRef = useRef<Point[]>([]);
  const [drawMode, setDrawMode] = useState(true);
  const [strokeCount, setStrokeCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const isDrawingRef = useRef(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 769 || !window.matchMedia('(hover: hover)').matches);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const getCanvasPoint = useCallback((e: React.PointerEvent | PointerEvent): Point => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) * (canvas.width / rect.width),
      y: (e.clientY - rect.top) * (canvas.height / rect.height),
    };
  }, []);

  const redrawAll = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw completed strokes with rough.js
    const offscreen = document.createElement('canvas');
    offscreen.width = canvas.width;
    offscreen.height = canvas.height;
    const rc = rough.canvas(offscreen);
    const offCtx = offscreen.getContext('2d')!;

    for (const stroke of strokesRef.current) {
      if (stroke.points.length < 2) continue;

      offCtx.clearRect(0, 0, offscreen.width, offscreen.height);

      // Draw the stroke path with rough.js
      const pathData = stroke.points.reduce((acc, pt, i) => {
        if (i === 0) return `M ${pt.x} ${pt.y}`;
        return `${acc} L ${pt.x} ${pt.y}`;
      }, '');

      rc.path(pathData, {
        roughness: 1.2,
        stroke: stroke.color,
        strokeWidth: stroke.width,
        bowing: 0.8,
      });

      // Copy rough.js output to main canvas
      ctx.drawImage(offscreen, 0, 0);
    }
  }, []);

  const drawCurrentStroke = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Redraw completed strokes first
    redrawAll();

    // Draw current stroke with raw Canvas2D for responsiveness
    const points = currentStrokeRef.current;
    if (points.length < 2) return;

    ctx.beginPath();
    ctx.strokeStyle = DEFAULT_COLOR;
    ctx.lineWidth = DEFAULT_WIDTH;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      const midX = (points[i - 1].x + points[i].x) / 2;
      const midY = (points[i - 1].y + points[i].y) / 2;
      ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, midX, midY);
    }
    ctx.stroke();
  }, [redrawAll]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (!drawMode || isMobile) return;
    e.preventDefault();
    isDrawingRef.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    currentStrokeRef.current = [getCanvasPoint(e)];
  }, [drawMode, isMobile, getCanvasPoint]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDrawingRef.current || !drawMode) return;
    e.preventDefault();
    currentStrokeRef.current.push(getCanvasPoint(e));
    drawCurrentStroke();
  }, [drawMode, getCanvasPoint, drawCurrentStroke]);

  const handlePointerUp = useCallback(() => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;

    if (currentStrokeRef.current.length > 1 && strokesRef.current.length < MAX_STROKES) {
      strokesRef.current.push({
        points: [...currentStrokeRef.current],
        color: DEFAULT_COLOR,
        width: DEFAULT_WIDTH,
      });
      setStrokeCount(strokesRef.current.length);
      redrawAll();
    }
    currentStrokeRef.current = [];
  }, [redrawAll]);

  const clearCanvas = useCallback(() => {
    strokesRef.current = [];
    setStrokeCount(0);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  // Handle canvas resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.scale(dpr, dpr);
      redrawAll();
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [redrawAll]);

  if (isMobile) return null;

  return (
    <div className={styles.canvasWrapper}>
      <canvas
        ref={canvasRef}
        className={`${styles.canvas} ${drawMode ? styles.canvasActive : ''}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      />

      <div className={styles.controls}>
        <button
          className={`${styles.drawToggle} ${drawMode ? styles.drawToggleActive : ''}`}
          onClick={() => setDrawMode(!drawMode)}
          aria-label={drawMode ? 'Exit draw mode' : 'Enter draw mode'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
        </button>

        <AnimatePresence>
          {drawMode && (
            <motion.div
              className={styles.drawActions}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
            >
              {strokeCount > 0 && (
                <button className={styles.clearBtn} onClick={clearCanvas}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  </svg>
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
