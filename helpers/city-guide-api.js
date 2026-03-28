import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const citiesDirectory = path.join(process.cwd(), 'pages/city-guides/cities')

export async function getAllCityGuides() {
  const filenames = fs.readdirSync(citiesDirectory).filter(f => f.endsWith('.md'))
  const posts = filenames.map(filename => {
    const filePath = path.join(citiesDirectory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const meta = matter(fileContent)
    return {
      slug: filename.replace('.md', ''),
      title: meta.data.title
    }
  })
  return posts.reverse()
}

export async function getCityGuideBySlug(slug) {
  const filePath = path.join(citiesDirectory, `${slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const meta = matter(fileContent)
  const content = marked(meta.content)
  return {
    title: meta.data.title,
    content: content
  }
}
