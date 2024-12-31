'use client'
import { useEffect, useState } from 'react';

const Snow = () => {
  const [snowflakes, setSnowflakes] = useState<{ id: number; left: number; animationDuration: number; delay: number }[]>([]);

  useEffect(() => {
    const flakes = Array.from({ length: 50 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      animationDuration: 5 + Math.random() * 10,
      delay: Math.random() * 5
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute bg-[#fdfcfb] rounded-full opacity-70 w-2 h-2"
          style={{
            left: `${flake.left}%`,
            animation: `fall ${flake.animationDuration}s linear ${flake.delay}s infinite`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  );
};

export default Snow;