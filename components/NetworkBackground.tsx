"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  z: number;
  radius: number;
}

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Spread nodes wide to the edges with an exclusion zone in the center
    const nodeCount = 42;
    const nodes: Node[] = [];
    const spreadX = Math.max(width * 0.72, 550);
    const spreadY = 360; // slightly expanded vertically
    const spreadZ = 300;

    for (let i = 0; i < nodeCount; i++) {
      // Half on the left, half on the right flank
      const side = i % 2 === 0 ? -1 : 1;
      // Keep nodes between 220px and spreadX out from the center
      const x = side * (220 + Math.random() * (spreadX - 220));
      const y = (Math.random() - 0.5) * spreadY * 2;
      const z = (Math.random() - 0.5) * spreadZ * 2;

      nodes.push({
        x,
        y,
        z,
        radius: Math.random() * 1.5 + 1.8,
      });
    }

    const rotationSpeed = 0.00045; // Very slow and ambient drift

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cos = Math.cos(rotationSpeed);
      const sin = Math.sin(rotationSpeed);

      // Rotate nodes around the Y axis
      for (const node of nodes) {
        const x = node.x * cos - node.z * sin;
        const z = node.z * cos + node.x * sin;
        node.x = x;
        node.z = z;
      }

      const centerX = width / 2;
      // Pulled up to 0.28 to drift smoothly through and behind the header
      const centerY = height * 0.28;
      const fov = 850;

      // Project 3D coordinates to 2D screen
      const projected = nodes.map((node) => {
        const scale = fov / (fov + node.z);
        return {
          x: node.x * scale + centerX,
          y: node.y * scale + centerY,
          scale,
          radius: node.radius * scale,
          origX: node.x,
        };
      });

      // Draw connection lines
      ctx.lineWidth = 0.85;
      const maxDistance = 340; // Reaches across wide spans

      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          // Prevent lines from bridging straight through the middle text area
          if (
            (projected[i].origX < 0 && projected[j].origX > 0) ||
            (projected[i].origX > 0 && projected[j].origX < 0)
          ) {
            continue;
          }

          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.14;
            ctx.strokeStyle = `rgba(15, 23, 42, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw node points
      for (const p of projected) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(15, 23, 42, 0.28)`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 h-screen w-screen"
    />
  );
}