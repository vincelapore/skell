"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useSkellMotion } from "@/components/skell-motion-context";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const { animatePage } = useSkellMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(!animatePage);

  useEffect(() => {
    if (!animatePage) {
      setVisible(true);
      return;
    }

    setVisible(false);
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [animatePage]);

  return (
    <div
      ref={ref}
      className={`skell-reveal skell-section-rule ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: visible && animatePage ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

export function useReveal(delay = 0) {
  const { animatePage } = useSkellMotion();
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(!animatePage);

  useEffect(() => {
    if (!animatePage) {
      setVisible(true);
      return;
    }

    setVisible(false);
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [animatePage]);

  const className = `skell-reveal skell-section-rule ${visible ? "is-visible" : ""}`;
  const style: CSSProperties = {
    transitionDelay: visible && animatePage ? `${delay}ms` : "0ms",
  };

  return { ref, className, style };
}

export function AmbientBars() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="skell-ambient-bar absolute -left-1 top-[12%] h-[35%] w-2 bg-skell-blue"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="skell-ambient-bar absolute -right-1 top-[22%] h-[50%] w-1.5 bg-skell-red"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="skell-ambient-bar absolute right-[8%] bottom-[15%] h-[20%] w-1 bg-skell-blue"
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
}

export function useEntranceClass(entranceClass: string) {
  const { playShellEntrance } = useSkellMotion();
  return playShellEntrance ? entranceClass : "";
}

export function usePageEntranceClass(entranceClass: string) {
  const { animatePage } = useSkellMotion();
  return animatePage ? entranceClass : "";
}
