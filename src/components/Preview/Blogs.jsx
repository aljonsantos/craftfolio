import AccentComponent from './AccentComponent'
import Section from './Section'

const blogs = [
  {
    title: 'My Journey with React and Beyond',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2023-10-28',
    markdown: '# My Journey with React and Beyond\nLorem ipsum dolor sit amet, consectetur adipiscing elit\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.\n\n## Discovering React\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n## Building My First Project\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.\n\n## Expanding My Skill Set\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\n## Looking Ahead\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitor accumsan tincidunt.'
  },
  {
    title: 'Exploring the World of Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    date: '2023-08-28',
    markdown: '# Exploring the Future of Web Development\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n## 1. Jamstack Architecture\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet est et sapien ullamcorper pharetra. Nulla facilisi.\n\n## 2. Serverless Computing\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi libero, fermentum ac nulla a, euismod blandit lorem. Proin scelerisque nunc id magna pretium, vel aliquam ex posuere.\n\n## 3. AI and Machine Learning\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a tincidunt metus. Curabitur ultricies turpis ac lectus tempus, vitae luctus est dictum.\n\n## Conclusion\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt, ligula eu tincidunt efficitur, risus nunc aliquet nisi, eu pellentesque velit metus nec dui.'
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
    <AccentComponent widthClass="md:min-w-[300px] lg:w-[48%]">
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
      <p>{blog.title}</p>
      <p className="text-sm text-content-700">{blog.description}</p>
    </>
  )
}

const Blogs = ({ content }) => {
  const { layout } = content.pages.blog

  return (
    <Section title="Blogs">
      <div className={`flex flex-col md:flex-row md:flex-wrap ${layout === 'cards' ? 'gap-4 lg:gap-6' : 'gap-2'}`}>
        {blogs.map((blog, index) => layout === 'cards'
          ? <BlogCard key={index} blog={blog} />
          : <BlogList key={index} blog={blog} />
        )}
      </div>
    </Section>
  )
}

export default Blogs