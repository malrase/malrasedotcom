import PostLayout from "../components/post-layout";
import { getPostBySlug, getAllPosts } from "../../helpers/post-api";

export default function Post(props) {
  return (
    <PostLayout title={props.title} 
                date={props.date} 
                content={props.content} />
  )
}

export async function getStaticProps(context) {
  return {
    props: await getPostBySlug(context.params.slug)
  }
}

export async function getStaticPaths() {
  let paths = await getAllPosts()
  paths = paths.map(post => ({
    params: { slug:post.slug }
  }));
  return {
    paths: paths,
    fallback: false
  }
};