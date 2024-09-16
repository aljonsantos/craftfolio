const Bullet = ({ last }) => {
  return (
    <div className="relative flex h-full">
      <div className="w-[14px] h-[14px] bg-zinc-100 border border-zinc-300 rounded-full mt-1 shadow lg:mt-2 -z-10"></div>
      {!last && <div className="absolute top-3 left-1/2 w-px h-[calc(100%+24px)] bg-zinc-300 -z-20"></div>}
    </div>
  )
}

const Timeline = ({ children }) => {

  const lis = children.map((item, index) => {
    const last = index === children.length-1
    return (
      <li key={index} className={`flex gap-4 ${!last ? 'pb-5' : ''}`}>
        <div className="shrink-0 relative"><Bullet last={index === children.length-1}/></div>
        {item}
      </li>
    )
  })

  return (
    <ol className="flex flex-col child">
      {lis}
    </ol>
  )
}

export default Timeline