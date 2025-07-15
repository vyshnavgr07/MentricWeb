"use client";

import { useEffect, useRef } from "react";

const GelEffectCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const blobs = [];

    for (let i = 0; i < 5; i++) {
      blobs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: 80 + Math.random() * 30,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const drawBlob = (blob) => {
      ctx.beginPath();
      const segments = 100;
      for (let i = 0; i <= segments; i++) {
        const angle = (Math.PI * 2 * i) / segments;
        const deform = Math.sin(angle * 3 + blob.phase) * 10;
        const x = blob.x + Math.cos(angle) * (blob.r + deform);
        const y = blob.y + Math.sin(angle) * (blob.r + deform);
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.fillStyle = "rgba(0, 255, 255, 0.5)";
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blobs.forEach((blob) => {
        blob.x += blob.dx;
        blob.y += blob.dy;
        blob.phase += 0.05;

        if (blob.x < blob.r || blob.x > canvas.width - blob.r) blob.dx *= -1;
        if (blob.y < blob.r || blob.y > canvas.height - blob.r) blob.dy *= -1;

        drawBlob(blob);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        background: "black",
      }}
    />
  );
};

export default GelEffectCanvas;
