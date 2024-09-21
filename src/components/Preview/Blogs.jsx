import AccentComponent from './AccentComponent'
import Section from './Section'
import Masonry from './Masonry'
import { IconArrowUpRight } from '../Common/Icons'

const blogs = [
  {
    title: 'My Journey with React and Beyond',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2023-10-28',
    link: ''
  },
  {
    title: 'Exploring the World of Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    date: '2023-08-28',
    link: '',
  }
]

const BlogList = ({ blog }) => {
  return (
    <AccentComponent>
      <div className="flex flex-col gap-2 py-2 lg:px-4 lg:py-3">
        <BlogAttributes blog={blog} />
      </div>
    </AccentComponent>
  )
}

const BlogCard = ({ blog }) => {
  return (
    <AccentComponent widthClass="w-full" border={false}>
      <div className="flex flex-col gap-1 md:gap-2 rounded-2xl border border-accent-300/30 p-3 md:px-4 md:py-3 lg:px-5 lg:py-4 overflow-hidden">
        <BlogAttributes blog={blog} />
      </div>
    </AccentComponent>
  )
}

const BlogAttributes = ({ blog }) => {
  return (
    <>
      <p className="text-xs text-content-700">{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
      <BlogTitle title={blog.title} link={blog.link} />
      <p className="text-sm text-content-700">{blog.description}</p>
    </>
  )
}

const BlogTitle = ({ title, link }) => {
  return (
    <a href={link} className="max-w-[95%] font-semibold text-content-700 hover:text-accent-700 transition-all group">
      {title}
      <IconArrowUpRight size={11} stroke={2} classes="inline ml-1 mb-[3px] transition-all group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
    </a>
  )
}

const Blogs = ({ content }) => {
  const { layout } = content.pages.blog

  const items = blogs.map((b, i) => layout === 'cards'
    ? <BlogCard key={i} blog={b} />
    : <BlogList key={i} blog={b} />
  )

  const view = {
    cards: (
      <Masonry minColWidth={218} numCols={2} >
        {items}
      </Masonry>
    ),
    list: (
      <div className="flex flex-col gap-2">
        {items}
      </div>
    )
  }

  return (
    <Section title="Blog" classes="nav-section">
      {view[layout]}
    </Section>
  )
}

export default Blogs