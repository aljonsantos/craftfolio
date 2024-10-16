const Title = ({ title }) => {
  return (
    <div className="title bg-background-700/10 md:bg-background/90 md:sticky top-0 md:top-[140px] pl-1 md:pl-5 md:py-4 md:mb-3 lg:py-5 lg:pl-8">
      <p className="relative text-accent-800 text-lg md:text-xl font-semibold pl-4 py-4 lg:pl-5">
        {title}
        <span className="block absolute top-1/2 left-1 h-3 w-[5px] -translate-y-1/2 bg-accent-800 rounded-full" />
      </p>
    </div>
  )
}

export default Title