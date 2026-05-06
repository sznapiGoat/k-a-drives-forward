import { Car } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

type Size = "sm" | "md" | "lg";

const sizeMap: Record<Size, { wrapper: string; icon: string }> = {
  sm: { wrapper: "p-2", icon: "w-4 h-4" },
  md: { wrapper: "p-4", icon: "w-7 h-7" },
  lg: { wrapper: "p-5", icon: "w-10 h-10" },
};

export function AnimatedLogo({ size = "md" }: { size?: Size }) {
  const s = sizeMap[size];
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={`relative inline-flex items-center justify-center bg-primary/10 rounded-full ${s.wrapper}`}
      initial={reduced ? false : { scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 16, delay: 0.15 }}
      whileHover={reduced ? undefined : { rotate: 12, scale: 1.14, transition: { type: "spring", stiffness: 420, damping: 10 } }}
      whileTap={reduced ? undefined : { scale: 0.9 }}
    >
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-full bg-primary/20"
        animate={reduced ? {} : { scale: [1, 1.45, 1], opacity: [0.5, 0, 0.5] }}
        transition={reduced ? {} : { duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      <motion.div
        className="relative z-10"
        animate={reduced ? {} : { y: [0, -7, 0, -3, 0] }}
        transition={reduced ? {} : { duration: 0.85, ease: "easeOut", delay: 0.4, times: [0, 0.3, 0.6, 0.8, 1] }}
      >
        <Car className={`${s.icon} text-primary`} strokeWidth={2.5} />
      </motion.div>
    </motion.div>
  );
}
