"use client"

import { ReactNode } from "react"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, Variants } from "framer-motion"

const variants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit:    { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
}

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const path = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        // allow this div to grow in your flex layout:
        className="w-full flex-1 flex flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}