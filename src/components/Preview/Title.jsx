const Title = ({ title }) => {
  return (
    <div className="relative pl-2 md:sticky md:top-[70px] z-20">
      <p className='text-baseline md:text-xl font-semibold my-5 pl-3'>{title}</p>
      <div className="absolute top-1/4 left-[5px] h-[50%] w-[5px] bg-zinc-700 rounded-full"></div>
      <div className="absolute bg-gradient-to-b from-white from-50% w-full h-[180%] top-0 left-0 -z-10"></div>
    </div>
  )
}

export default Title