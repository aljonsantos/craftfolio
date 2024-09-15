const Overlay = ({ active, onClick }) => {
  return (
    <div className={`overlay bg-black/50 fixed inset-0 transition-opacity lg:hidden ${active ? 'translate-y-0' : '-translate-y-full opacity-0'}`} onClick={onClick} />
  )
}

export default Overlay