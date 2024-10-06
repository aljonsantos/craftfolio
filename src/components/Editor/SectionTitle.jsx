const SectionTitle = ({ title, titleRightEl }) => {
  return (
    <div className="flex items-center justify-between pb-5">
      <h3 className="text-content-700 font-semibold uppercase">{title}</h3>
      {titleRightEl}
    </div>
  )
}

export default SectionTitle