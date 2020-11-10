import Link from "next/link";
import { getAllPosts } from "./post-api";
import { dateFormatter } from "../../helpers/date-helpers";

export default function PostIndex({ posts }) {

  return (
    <main className="posts two-column-grid">
      <h1>Blog</h1>
      <ul>
        {posts.map( ({slug, title, date }) => {
          return (
            <li key={slug}>
              <Link href={`./posts/${slug}`}>{title}</Link>
              <div className="byline">{dateFormatter(date)}</div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()
  return {
    props: {
      posts: allPosts
    }
  }
}
