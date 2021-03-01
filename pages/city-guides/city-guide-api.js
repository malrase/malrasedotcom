import matter from 'gray-matter'
import marked from 'marked'

export async function getAllCityGuides() {
  const context = require.context('./cities', false, /\.md$/)
  const posts = []
  for(const key of context.keys()){
    console.log(key)
    const post = key.slice(2);
    const content = await import(`./cities/${post}`);
    const meta = matter(content.default)
    posts.push({
      slug: post.replace('.md',''),
      title: meta.data.title
    })
  }
  return posts.reverse();
}

export async function getCityGuideBySlug(slug) {
  const fileContent = await import(`./cities/${slug}.md`)
  const meta = matter(fileContent.default)
  const content = marked(meta.content)    
  return {
    title: meta.data.title,
    content: content
  }
}

