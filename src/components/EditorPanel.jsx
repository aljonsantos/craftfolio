import { useState } from 'react'

const EditorPanel = ({ content, onContentChange }) => {
  const [open, setOpen] = useState(false)

  if (open) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  return (
    <>
      {open && <div className='overlay bg-black opacity-50 fixed inset-0 z-10'></div>}
      <div className={`editor-panel ${ open ? 'open' : '' } border-solid border border-gray-300 rounded-t-2xl shadow-2xl shadow-black bg-white z-20`}>
        <div className="panel-header h-14 flex justify-between items-center px-3 sticky top-0 w-full overflow-hidden">
          <h2 className="font-bold">Craftfolio</h2>
          <button className='toggle' onClick={() => setOpen(!open)}>
            <svg className={`w-6 h-6 text-black ${ open ? 'flip' : '' }`} width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5 15 7-7 7 7" />
            </svg>
          </button>
        </div>
        <div className='panel-body overflow-y-scroll max-h-[40vh]'>
          <input type="text" value={content.value} onChange={onContentChange} />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates beatae ratione mollitia aliquam iure, ipsa commodi, rem molestiae consectetur ut quasi? Commodi, perspiciatis nisi mollitia eos distinctio asperiores veniam dolor.
          Nobis quia, perspiciatis fuga asperiores ea at sint dolorem cumque distinctio labore tempore dicta obcaecati, nesciunt totam dolor ipsum atque corporis. Sit rem commodi dolorem ut inventore plac Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vero impedit eaque atque! Incidunt, praesentium quisquam enim ducimus quae exercitationem. Temporibus omnis hic iusto facilis nisi cupiditate quo ipsa dolorem!
          Sapiente rem voluptate esse voluptatem quidem accusantium tenetur alias! Molestias nam, ipsa velit laboriosam architecto laudantium magnam aut minus in ipsum ad enim quas, animi ratione. Ex, laboriosam facere. Ullam.
          Eveniet sequi sapiente expedita dignissimos inventore eos! Ex dolorem id eaque nemo optio temporibus repudiandae veniam exercitationem autem molestias nulla enim quia, odio a porro fugit. Sapiente voluptatibus architecto libero?
          Corrupti impedit, ducimus natus vel praesentium dolorem expedita ratione minima deserunt iste, amet quo quam quod inventore labore quaerat. Laboriosam quam exercitationem doloribus nam quasi id expedita eos, perspiciatis ab.
          Sunt eaque, libero numquam sint vel rem commodi perferendis quisquam maiores magni recusandae praesentium, temporibus quos voluptas officia ab accusamus, totam aperiam sit magnam. Ut cumque perferendis possimus animi voluptatem.
          Accusamus nam quo dolores maiores modi numquam laborum mollitia vitae eos deleniti tenetur, reiciendis, voluptatum, architecto dolore magni explicabo natus minus id eum esse quasi! Tempore tempora animi numquam dolor.
          Laborum dignissimos, tempora suscipit quaerat consectetur laboriosam omnis minus! Totam animi error est velit, minus perspiciatis sed iusto itaque voluptates cumque, laudantium sit eius tempore ex optio dolore quod? Commodi.
          Dolore necessitatibus voluptatum voluptatibus sed nihil optio atque esse nisi. Dolore facere eligendi pariatur possimus. Mollitia, nihil sed aliquam esse nesciunt eaque magnam neque quis dolorum perferendis dolorem dicta non.
          Praesentium incidunt maiores similique, quaerat est vitae quis optio dolore repellendus minima aperiam magni adipisci quos nulla cupiditate fugiat eligendi, soluta repudiandae a pariatur odit eum vero. Quasi, beatae quis?
          Aperiam, maiores, neque expedita doloribus debitis vitae dolore quae, ullam deserunt sit repellat. Doloremque repellendus temporibus dolore laborum velit sunt. Quidem, repellat. Explicabo temporibus perspiciatis voluptates similique saepe voluptate dolorum! .</p>
        </div>
      </div>
    </>
  )
}

export default EditorPanel

