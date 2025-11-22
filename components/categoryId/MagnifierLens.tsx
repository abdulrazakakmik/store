"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface MagnifierLensProps {
  src: string;
  zoom?: number;   // default 1
  lensSize?: number; // default 250
  className?: string;
  setZoom: (z: number) => void; // required
}

export default function MagnifierLens({
  src,
  zoom = 1,
  lensSize = 250,
  setZoom,
  className = "",
}: MagnifierLensProps) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [natural, setNatural] = useState({ w: 0, h: 0 });

  const half = lensSize / 2;

  const baseRef = useRef<HTMLDivElement>(null);
  const hiddenRef = useRef<HTMLImageElement>(null);

  // Load natural size
  useEffect(() => {
    const img = hiddenRef.current;
    if (!img) return;

    const handle = () =>
      setNatural({ w: img.naturalWidth, h: img.naturalHeight });

    img.complete ? handle() : (img.onload = handle);
  }, [src]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!baseRef.current) return;
    const rect = baseRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleLeave = () => setPos(null);

  // Ratio calculations
  let displayW = 0,
    displayH = 0;

  if (baseRef.current) {
    const rect = baseRef.current.getBoundingClientRect();
    displayW = rect.width;
    displayH = rect.height;
  }

  const ratioX = natural.w && displayW ? natural.w / displayW : 1;
  const ratioY = natural.h && displayH ? natural.h / displayH : 1;

  const natX = pos ? pos.x * ratioX : 0;
  const natY = pos ? pos.y * ratioY : 0;

  const bgW = natural.w * zoom;
  const bgH = natural.h * zoom;

  const bgPosX = -(natX * zoom - half);
  const bgPosY = -(natY * zoom - half);

  // -----------------------
  // ⭐ LIMIT ZOOM CONTROLS
  // -----------------------
  const increaseZoom = () => {
    if (zoom < 1) setZoom(Number((zoom + 0.1).toFixed(2)));
  };

  const decreaseZoom = () => {
    if (zoom > 0.4) setZoom(Number((zoom - 0.1).toFixed(2)));
  };

  return (
    <div
      ref={baseRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative aspect-square w-full overflow-hidden bg-black ${className}`}
    >
      {/* Zoom Controls */}
      <div className="absolute top-2 right-8 size-10 z-10 p-1">
        <h1 className="text-black font-bold flex text-sm gap-2"><span>Zoom</span> <span>{zoom * 10}</span></h1>
        <button
          onClick={increaseZoom}
          className="block bg-gray-300 size-8 cursor-pointer my-1 font-extrabold rounded-2xl text-lg"
        >
          +
        </button>
        <button
          onClick={decreaseZoom}
          className="block bg-gray-300 size-8 cursor-pointer my-1 font-extrabold rounded-2xl text-lg"
        >
          -
        </button>
      </div>

      {/* Base Image */}
      <Image src={src} alt="" fill className="object-cover" />

      {/* Hidden detector */}
      <img ref={hiddenRef} src={src} alt="" className="hidden" />

      {/* Lens */}
      {pos && natural.w > 0 && (
        <div
          className="absolute rounded-full border-2 border-white pointer-events-none overflow-hidden"
          style={{
            width: lensSize,
            height: lensSize,
            left: pos.x - half,
            top: pos.y - half,
            backgroundImage: `url(${src})`,
            backgroundSize: `${bgW}px ${bgH}px`,
            backgroundPosition: `${bgPosX}px ${bgPosY}px`,
            backgroundRepeat: "no-repeat",
          }}
        />
      )}
    </div>
  );
}
