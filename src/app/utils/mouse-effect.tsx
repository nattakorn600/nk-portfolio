'use client'

import { useEffect } from 'react';
import { TweenMax, Power2, Expo, Power4 } from 'gsap';

export default function Page() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      createParticle(x, y);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;
      e.preventDefault();
      createParticle(x, y);
    };

    const handleClick = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      createParticleClick(x, y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <></>
  );
};


function createParticle(x: number, y: number) {
  const size: number = Math.random() * 5 + 5;

  x -= size / 2;
  y -= size / 2;

  const particle: HTMLDivElement = document.createElement('div');
  particle.className = 'mouseEffect';
  document.body.appendChild(particle);

  TweenMax.set(particle, {
    x: x,
    y: y,
    width: size,
    height: size,
    background: `hsl(${Math.random() * 90 + 200}, 50%, 50%)`,
  });

  TweenMax.to(particle, Math.random() * 2 + 1, {
    x: x + (Math.random() - 0.5) * 200,
    y: y + (Math.random() - 0.5) * 200,
    opacity: 0,
    scale: 0,
    ease: Power2.easeOut,
    onComplete: function () {
      document.body.removeChild(particle);
    },
  });
}

function createCircle(x: number, y: number, size: number) {
  const particle: HTMLDivElement = document.createElement('div');
  particle.className = 'mouseEffect';
  document.body.appendChild(particle);

  TweenMax.set(particle, {
    x: x,
    y: y,
    width: 0,
    height: 0,
    border: `2px solid white`,
    background: "transparent",
  });

  TweenMax.to(particle, Math.random() + 1, {
    x: x - size/2,
    y: y - size/2,
    width: size,
    height: size,
    opacity: 0,
    ease: Power4.easeOut,
    onComplete: function () {
      document.body.removeChild(particle);
    },
  });
}

function createFirework(x: number, y: number) {
  const size: number = Math.random() * 15 + 10;

  x -= size / 2;
  y -= size / 2;

  const particle: HTMLDivElement = document.createElement('div');
  particle.className = 'mouseEffect';
  document.body.appendChild(particle);

  TweenMax.set(particle, {
    x: x,
    y: y,
    width: size,
    height: size,
    background: `hsl(${Math.random() * 90 + 200}, 50%, 50%)`,
  });

  TweenMax.to(particle, Math.random() * 2 + 1, {
    x: x + (Math.random() - 0.5) * 200,
    y: y + (Math.random() - 0.5) * 200,
    opacity: 0,
    scale: 0,
    ease: Power4.easeOut,
    onComplete: function () {
      document.body.removeChild(particle);
    },
  });
}

function createParticleClick(x: number, y: number) {
  createCircle(x,y,Math.random() * (100 - 10) + 10);
  for (let i = 0; i < 24; i++) {
    createFirework(x, y);
  }
  createCircle(x,y,Math.random() * (100 - 10) + 10);
}