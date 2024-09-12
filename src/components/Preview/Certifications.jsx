import Title from "./Title"

const items = [
  {
    title: "Certification in Web Development",
    year: "XXXX"
  },
  {
    title: "Certification in Data Science",
    year: "XXXX"
  },
]

const Item = ({ title, year }) => {
  return (
    <div className=" border border-zinc-200 text-center max-w-[18ch] rounded-xl">
      <p className="font-semibold bg-zinc-100 px-3 py-4 pb-2 border-b">{title}</p>
      <p className="text-zinc-500 px-3 py-2">{year}</p>
    </div>
  )
}

const Certifications = () => {
  return (
    <div>
      <Title title="Certifications" />
      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => <Item key={index} {...item} />)}
      </div>
    </div>
  )
}

export default Certifications