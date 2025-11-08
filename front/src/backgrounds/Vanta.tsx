import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA?: any;
    THREE?: any;
  }
}

type VantaBirdsOptions = {
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
  backgroundColor?: number | string;
  [key: string]: any;
};

interface Props {
  options?: VantaBirdsOptions;
  className?: string;
  style?: React.CSSProperties;
}

const VantaBirds: React.FC<Props> = ({ options = {}, className, style }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const defaultOptions: VantaBirdsOptions = {
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
    };

    const merged = { ...defaultOptions, ...options, el: containerRef.current };
    let initialOptions: VantaBirdsOptions = merged;

    // Normalize backgroundColor so both '#rrggbb', '0xrrggbb' and numeric literals work
    if (initialOptions.backgroundColor) {
      const bg = initialOptions.backgroundColor;
      if (typeof bg === "string") {
        if (bg.startsWith("#")) {
          // '#476d95' -> 0x476d95
          initialOptions.backgroundColor = parseInt(bg.replace("#", "0x"));
        } else if (bg.startsWith("0x")) {
          initialOptions.backgroundColor = parseInt(bg);
        }
      }
      // if it's already a number (e.g. 0x476d95) leave as-is
    }

    const initVanta = () => {
      try {
        if ((window as any).VANTA && !effectRef.current) {
          effectRef.current = (window as any).VANTA.BIRDS(initialOptions);
        }
      } catch (e) {}
    };

    if ((window as any).VANTA) {
      initVanta();
      return () => {
        if (effectRef.current) {
          effectRef.current.destroy();
          effectRef.current = null;
        }
      };
    }

    const threeSrc =
      "https://cdn.jsdelivr.net/gh/mrdoob/three.js@r134/build/three.min.js";
    const vantaSrc =
      "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js";

    const appendScriptOnce = (src: string, onload?: () => void) => {
      const existing = document.querySelector(
        `script[src="${src}"]`
      ) as HTMLScriptElement | null;
      if (existing) {
        if (existing.getAttribute("data-loaded") === "true") {
          onload && onload();
        } else {
          existing.addEventListener("load", onload || (() => {}));
        }
        return existing;
      }
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.addEventListener("load", () => {
        s.setAttribute("data-loaded", "true");
        onload && onload();
      });
      document.head.appendChild(s);
      return s;
    };

    // Ensure three is loaded, then ensure vanta is loaded, then init
    appendScriptOnce(threeSrc, () => {
      appendScriptOnce(vantaSrc, () => {
        initVanta();
      });
    });

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        ...(style || {}),
      }}
    />
  );
};

export default VantaBirds;
