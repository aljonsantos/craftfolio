import Section from "./Section"
import Timeline from "./Timeline"

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
      <p className="font-semibold bg-accent/10 text-accent-700 border border-accent-100/70 inline-block px-2 rounded-xl mb-1 lg:px-3 lg:py-1">{title}</p>
      <div className="pl-2">
        <p>{company}</p>
        <p>{location}</p>
        <p className="mb-2">{date}</p>
        <p className="text-content-700 max-w-[50ch]">{description}</p>
      </div>
    </div>
  )
}

const Experience = () => {
  return (
    <Section title="Experience">
      <Timeline>
        {items.map((item, index) => <Item key={index} {...item} />)}
      </Timeline>
    </Section>
  )
}

export default Experience