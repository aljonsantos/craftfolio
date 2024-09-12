import Title from "./Title"

const SoftSkills = () => {
  return (
    <div>
      <Title title="Soft Skills" textSize="base" />
      <div className="flex flex-wrap gap-3 gap-y-0">
        <div className="softskill">Problem Solving</div>
        <div className="softskill">Teamwork</div>
        <div className="softskill">Communication</div>
        <div className="softskill">Time Management</div>
        <div className="softskill">Adaptability</div>
      </div>
    </div>
  )
}

export default SoftSkills