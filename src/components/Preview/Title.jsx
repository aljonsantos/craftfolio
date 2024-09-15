const Title = ({ title }) => {
  return (
    <div className="title relative bg-white/90 md:sticky md:top-[140px] pl-1 md:pl-5 md:py-4 md:mb-3 lg:py-5">
      <p className="text-accent text-lg md:text-xl font-semibold pl-4 py-4 lg:pl-6">{title}</p>
      <div className="absolute top-1/2 left-[3px] md:left-5 lg:left-7 h-3 md:h-4 w-[5px] -translate-y-1/2 bg-accent rounded-full"></div>
    </div>
  )
}

export default Title