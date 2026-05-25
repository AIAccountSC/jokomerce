"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  children: ReactNode;
  /** Forwarded to the underlying element so callers can pass through native attrs (aria-*, role, etc.) */
  [key: string]: unknown;
};

/**
 * Inline reveal — adds `.in` to the element when it scrolls into view.
 * Mirrors the original Jokomerce.html IntersectionObserver in CSS rather than JS.
 */
export function Reveal({ as = "div", className, style, delay, children, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as React.ElementType;
  const mergedStyle: CSSProperties = {
    ...(delay ? { ["--rd" as never]: `${delay}ms` } : {}),
    ...style,
  };

  return (
    <Tag ref={ref as never} data-reveal className={className} style={mergedStyle} {...rest}>
      {children}
    </Tag>
  );
}

/** Same as Reveal, just exposes the underlying tag so semantics are explicit at the call-site. */
export const RevealOnView = Reveal;
