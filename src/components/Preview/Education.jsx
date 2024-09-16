import Section from "./Section"
import Timeline from "./Timeline"

const items = [
  {
    title: "Bachelor of Science in Computer Science",
    school: "University, City",
    location: "City, State",
    date: "Month XXXX - Month XXXX"
  },
  {
    title: "High School Diploma",
    school: "High School",
    location: "City, State",
    date: "Month XXXX - Month XXXX"
  }
]

const Item = ({ title, school, location, date }) => {
  return (
    <div>
      <p className="font-semibold text-accent-700 bg-accent/10 border border-accent-100/70 inline-block px-2 rounded-xl mb-1 lg:px-3 lg:py-1">{title}</p>
      <div className="pl-2">
        <p>{school}</p>
        <p>{location}</p>
        <p>{date}</p>
      </div>
    </div>
  )
}

const Education = () => {
  return (
    <Section title={"Education"}>
      <Timeline>
        {items.map((item, index) => <Item key={index} {...item} />)}
      </Timeline>
    </Section>
  )
}

export default Education