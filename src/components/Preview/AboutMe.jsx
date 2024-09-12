const AboutMe = () => {
  return (
    <div className="aboutme">
      <div className="md:sticky md:top-[70px]">
        <p className="text-[18px] md:text-xl font-semibold my-5 bg-zinc-800 text-white w-max px-2 py-1 rounded-full border border-dashed border-white shadow relative">About Me</p>
        <div className="hidden md:block absolute bg-gradient-to-b from-white from-50% w-full h-[50px] top-0 left-0 -z-10"></div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quae, adipisci voluptate omnis aliquid dolore, quas ipsum ipsa tempore assumenda harum autem repella.</p>
    </div>
  )
}

export default AboutMe