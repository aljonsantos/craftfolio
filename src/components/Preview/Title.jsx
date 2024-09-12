const Title = ({ title, textSize }) => {
  return (
    <div className="relative w-fit">
      <p className={`text-${textSize} font-semibold my-5 pl-3`}>{title}</p>
      <div className="absolute top-1/4 left-0 h-[50%] w-[5px] bg-zinc-700 rounded-full"></div>
    </div>
  )
}

export default Title