'use client'
import { useState, useEffect, useMemo } from 'react';
import { Snowflake } from 'lucide-react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const isWinter = () => {
  const currentMonth = new Date().getMonth();
  return currentMonth === 11 || currentMonth === 0; // December is 11 (0-based index)
};

const createFlakes = (count: number) => 
  Array.from({ length: count }, (_, index) => ({
    id: index,
    left: Math.random() * 100,
    animationDuration: 2 + Math.random() * 10,
    delay: Math.random() * 0.2
  }));

const Snow = () => {
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();
  const snowflakes = useMemo(() => createFlakes(50), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isMobile || !isWinter()) return null;

  return (
    <div className="fixed inset-0 pointer-events-none">
      {snowflakes.map((flake) => (
        <Snowflake
          key={flake.id}
          className="absolute opacity-50 text-[#fdfcfb]"
          size={16}
          style={{
            left: `${flake.left}%`,
            animation: `fall ${flake.animationDuration}s linear ${flake.delay}s infinite`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10px) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Snow;