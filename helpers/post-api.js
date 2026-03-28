import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const postsDirectory = path.join(process.cwd(), 'pages/posts/_posts')

export async function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'))
  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const meta = matter(fileContent)
    return {
      slug: filename.replace('.md', ''),
      title: meta.data.title,
      date: meta.data.date
    }
  })
  return posts.reverse()
}

export async function getPostBySlug(slug) {
  const filePath = path.join(postsDirectory, `${slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const meta = matter(fileContent)
  const content = marked(meta.content)
  return {
    title: meta.data.title,
    date: meta.data.date,
    content: content
  }
}
