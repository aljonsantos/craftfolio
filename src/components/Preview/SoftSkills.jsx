import Section from "./Section"

const SoftSkills = () => {
  return (
    <Section title={"Soft Skills"}>
      <div className="flex flex-wrap gap-3 gap-y-0 md:gap-3 lg:gap-5">
        <div>Problem Solving</div>
        <div>Teamwork</div>
        <div>Communication</div>
        <div>Time Management</div>
        <div>Adaptability</div>
      </div>
    </Section>
  )
}

export default SoftSkills