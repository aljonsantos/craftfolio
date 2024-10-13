import { motion } from 'framer-motion'

const Fade = ({ children, props, onceVisible }) => {
  const onceVisibleMotionProps = onceVisible 
  ? {
    whileInView: { opacity: 1, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.4 },
    animate: undefined
  } : {}

  return (
    <motion.div
      {...props}
      initial={{ opacity: 0, filter: 'blur(2px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
      {...onceVisibleMotionProps}
    >
      {children}
    </motion.div>
  )
}

export default Fade