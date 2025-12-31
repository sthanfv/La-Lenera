"use client";

import { useEffect, useRef, useState } from 'react';

const FireCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width;
    let height = canvas.height;
    let particles: Particle[] = [];
    let mouseX = -1000;
    let mouseY = -1000;
    let animationFrameId: number;

    class Particle {
      x: number;
      y: number;
      type: 'spark' | 'flame' | 'glow';
      size: number;
      speedY: number;
      speedX: number;
      life: number;
      decay: number;
      color: { r: number, g: number, b: number };
      oscillation: number;
      oscSpeed: number;

      constructor() {
        this.x = 0;
        this.y = 0;
        this.type = 'flame';
        this.size = 0;
        this.speedY = 0;
        this.speedX = 0;
        this.life = 0;
        this.decay = 0;
        this.color = { r: 0, g: 0, b: 0 };
        this.oscillation = 0;
        this.oscSpeed = 0;
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + Math.random() * 100;

        const rand = Math.random();
        if (rand < 0.1) {
          this.type = 'spark';
          this.size = Math.random() * 2 + 1;
          this.speedY = Math.random() * 5 + 3;
          this.speedX = (Math.random() - 0.5) * 4;
          this.life = 1;
          this.decay = Math.random() * 0.03 + 0.02;
          this.color = { r: 255, g: 200, b: 50 };
        } else if (rand < 0.4) {
          this.type = 'flame';
          this.size = Math.random() * 5 + 3;
          this.speedY = Math.random() * 2 + 1;
          this.speedX = (Math.random() - 0.5) * 1.5;
          this.life = 1;
          this.decay = Math.random() * 0.015 + 0.005;
          this.color = { r: 234, g: 88, b: 12 };
        } else {
          this.type = 'glow';
          this.size = Math.random() * 20 + 15;
          this.speedY = Math.random() * 0.8 + 0.3;
          this.speedX = (Math.random() - 0.5) * 0.5;
          this.life = 1;
          this.decay = Math.random() * 0.01 + 0.002;
          this.color = { r: 120, g: 30, b: 0 };
        }

        this.oscillation = Math.random() * Math.PI * 2;
        this.oscSpeed = Math.random() * 0.05 + 0.02;
      }

      update() {
        this.y -= this.speedY;
        this.oscillation += this.oscSpeed;
        this.x += Math.sin(this.oscillation) * 0.8 + this.speedX;

        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          this.x -= (dx / dist) * force * 2;
        }

        this.life -= this.decay;
        if (this.type !== 'spark') this.size *= 0.985;
        if (this.life <= 0 || this.y < -50) this.reset();
      }

      draw() {
        if (ctx) {
            const { r, g, b } = this.color;
            const alpha = this.life * (this.type === 'glow' ? 0.2 : 0.7);

            ctx.beginPath();
            const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
            grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`);
            grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

            ctx.fillStyle = grad;
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
      }
    }

    const initCanvas = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        particles = [];
        const count = width < 768 ? 40 : 80;
        for (let i = 0; i < count; i++) {
          particles.push(new Particle());
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
        if (isAnimating && ctx) {
            ctx.clearRect(0, 0, width, height);
            ctx.globalCompositeOperation = 'lighter';
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            ctx.globalCompositeOperation = 'source-over';
            animationFrameId = requestAnimationFrame(animate);
        }
    };

    initCanvas();
    if(isAnimating) animate();

    window.addEventListener('resize', initCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    const observer = new IntersectionObserver(entries => {
      setIsAnimating(entries[0].isIntersecting);
    });
    observer.observe(canvas);

    return () => {
      window.removeEventListener('resize', initCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [isAnimating]);

  return (
    <canvas
      ref={canvasRef}
      id="fire-canvas"
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default FireCanvas;
