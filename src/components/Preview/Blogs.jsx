import AccentComponent from './AccentComponent'
import Section from './Section'
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
      <div className="flex flex-col gap-2 px-4 py-4 lg:px-5 lg:py-5">
        <BlogAttributes blog={blog} />
      </div>
    </AccentComponent>
  )
}

const BlogCard = ({ blog }) => {
  return (
    <AccentComponent widthClass="md:min-w-[300px] lg:w-[48%]" border={false}>
      <div className="flex flex-col gap-2 rounded-2xl border border-accent-100 px-3 py-2 lg:px-5 lg:py-4 overflow-hidden">
        <BlogAttributes blog={blog} />
      </div>
    </AccentComponent>
  )
}

const BlogAttributes = ({ blog }) => {
  return (
    <>
      <p className="text-sm text-content-700 max-w-[60ch]">{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
      {/* <p>{blog.title}</p> */}
      <BlogTitle title={blog.title} link={blog.link} />
      <p className="text-sm text-content-700">{blog.description}</p>
    </>
  )
}

const BlogTitle = ({ title, link }) => {
  return (
    <a href={link} className="flex gap-2 hover:gap-3 hover:text-accent-700 transition-all">
      {title}
      <IconArrowUpRight size={12} classes="mt-1"/>
    </a>
  )
}

const Blogs = ({ content }) => {
  const { layout } = content.pages.blog

  return (
    <Section title="Blogs">
      <div className={`flex flex-col justify-starts items-start md:flex-row md:flex-wrap ${layout === 'cards' ? 'gap-4 lg:gap-6' : 'gap-2'}`}>
        {blogs.map((blog, index) => layout === 'cards'
          ? <BlogCard key={index} blog={blog} />
          : <BlogList key={index} blog={blog} />
        )}
      </div>
    </Section>
  )
}

export default Blogs