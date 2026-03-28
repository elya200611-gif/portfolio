import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export function BentoCard({ children, className, title, subtitle, dark = false }: BentoCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={cn(
        "relative flex flex-col justify-between p-6 md:p-8 overflow-hidden border rounded-2xl md:rounded-3xl transition-colors duration-300",
        dark ? "bg-black text-white border-neutral-800" : "bg-white text-black border-neutral-200",
        className
      )}
    >
      <div className="relative z-10 flex flex-col h-full">
        {children}
        {(title || subtitle) && (
          <div className="mt-auto pt-8">
            {subtitle && (
              <p className={cn("text-xs font-medium uppercase tracking-wider mb-2", dark ? "text-neutral-400" : "text-neutral-500")}>
                {subtitle}
              </p>
            )}
            {title && (
              <h3 className={cn("text-2xl font-display font-medium", dark ? "text-white" : "text-black")}>
                {title}
              </h3>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
