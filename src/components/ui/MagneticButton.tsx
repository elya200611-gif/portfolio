import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  target?: string;
}

export function MagneticButton({ children, className, onClick, variant = "primary", href, target }: MagneticButtonProps) {
  const ref = useRef<any>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<any>) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variants = {
    primary: "bg-black text-white hover:bg-neutral-900",
    secondary: "bg-neutral-100 text-black hover:bg-neutral-200",
    outline: "border border-neutral-200 bg-transparent text-black hover:bg-neutral-50",
  };

  const commonProps = {
    ref,
    style: { x: springX, y: springY },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick,
    className: cn(
      "relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium transition-colors rounded-full cursor-pointer",
      variants[variant],
      className
    ),
  };

  if (href) {
    return (
      <motion.a href={href} target={target} {...commonProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button {...commonProps}>
      {children}
    </motion.button>
  );
}
