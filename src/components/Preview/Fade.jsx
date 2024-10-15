import { motion } from 'framer-motion'

const Fade = ({ children, props, up = false,  onceVisible = false }) => {
  const initialStyles = {
    opacity: 0,
    filter: 'blur(2px)',
    y: up ? 20 : 0,
  }

  const animateStyles = {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
  }

  const onceVisibleMotionProps = onceVisible 
  ? {
    whileInView: animateStyles,
    viewport: { once: true, amount: 0.7 },
    animate: undefined
  } : {}

  return (
    <motion.div
      {...props}
      initial={initialStyles}
      animate={animateStyles}
      transition={{ duration: 0.5 }}
      {...onceVisibleMotionProps}
    >
      {children}
    </motion.div>
  )
}

export default Fade