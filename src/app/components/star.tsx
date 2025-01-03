'use client'
import { useEffect, useRef, useCallback } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
}

const Star = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);

  const initializeStars = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const stars: Star[] = Array(200).fill(null).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.1
    }));

    starsRef.current = stars;
  }, []);

  const animateStars = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ffffff';

    starsRef.current.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();

      star.y += star.speed;
      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(animateStars);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initializeStars();
      }
    };

    resizeCanvas();
    const animationFrame = requestAnimationFrame(animateStars);

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, [initializeStars, animateStars]);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 bg-black"
      aria-hidden="true"
    />
  );
};

export default Star;