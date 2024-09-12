import Timeline from "./Timeline"
import Title from "./Title"

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
      <p className="font-semibold bg-zinc-100 border border-zinc-200 inline-block px-2 rounded-xl mb-1">{title}</p>
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
    <div className="education">
      <Title title="Education" />
      <Timeline>
        {items.map((item, index) => <Item key={index} {...item} />)}
      </Timeline>
    </div>
  )
}

export default Education