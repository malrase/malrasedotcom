import matter from 'gray-matter'
import marked from 'marked'

export async function getAllPosts() {
  const context = require.context('../pages/posts/_posts', false, /\.md$/)
  const posts = []
  for(const key of context.keys()){
    console.log(key)
    const post = key.slice(2);
    const content = await import(`../pages/posts/_posts/${post}`);
    const meta = matter(content.default)
    posts.push({
      slug: post.replace('.md',''),
      title: meta.data.title,
      date: meta.data.date
    })
  }
  return posts.reverse();
}

export async function getPostBySlug(slug) {
  const fileContent = await import(`../pages/posts/_posts/${slug}.md`)
  const meta = matter(fileContent.default)
  const content = marked(meta.content)    
  return {
    title: meta.data.title, 
    date: meta.data.date,
    content: content
  }
}