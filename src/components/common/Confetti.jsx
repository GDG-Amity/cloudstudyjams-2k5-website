import { useEffect, useRef } from 'react';

const COLORS = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#FFFFFF'];

export default function Confetti({ duration = 2500, particleCount = 180 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const rand = (min, max) => Math.random() * (max - min) + min;

    const particles = Array.from({ length: particleCount }, () => ({
      x: rand(0, width),
      y: rand(-height * 0.2, -10),
      vx: rand(-3, 3),
      vy: rand(2, 6),
      size: rand(4, 8),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rot: rand(0, Math.PI * 2),
      vr: rand(-0.2, 0.2),
      alpha: 1,
      shape: Math.random() < 0.5 ? 'rect' : 'circle',
    }));

    const gravity = 0.12;
    const drag = 0.995;
    const start = performance.now();

    const tick = (t) => {
      const elapsed = t - start;
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.vy += gravity;
        p.vx *= drag;
        p.vy *= drag;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        if (elapsed > duration * 0.6) p.alpha = Math.max(0, 1 - (elapsed - duration * 0.6) / (duration * 0.6));

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      if (elapsed < duration) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, [duration, particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className="confetti-canvas"
      aria-hidden
    />
  );
}

