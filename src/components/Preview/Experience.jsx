import Timeline from "./Timeline"
import Title from "./Title"

const items = [
  {
    title: "Software Developer",
    company: "Company, City",
    location: "City, State",
    date: "Month XXXX - Present",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dolores libero quod ullam deserunt voluptate."
  },
  {
    title: "Intern",
    company: "Company, City",
    location: "City, State",
    date: "Month XXXX - Month XXXX",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dolores libero quod ullam deserunt voluptate."
  },
  {
    title: "Intern",
    company: "Company, City",
    location: "City, State",
    date: "Month XXXX - Month XXXX",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dolores libero quod ullam deserunt voluptate."
  }
]

const Item = ({ title, company, location, date, description }) => {
  return (
    <div>
      <p className="font-semibold bg-zinc-100 border border-zinc-200 inline-block px-2 rounded-xl mb-1">{title}</p>
      <div className="pl-2">
        <p>{company}</p>
        <p>{location}</p>
        <p className="mb-2">{date}</p>
        <p className="text-zinc-700">{description}</p>
      </div>
    </div>
  )
}

const Experience = () => {
  return (
    <div className="experience">
      <Title title="Experience" />
      <Timeline>
        {items.map((item, index) => <Item key={index} {...item} />)}
      </Timeline>
    </div>
  )
}

export default Experience