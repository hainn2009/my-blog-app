import AllPosts from "../../components/posts/all-posts";
import { getAllPost } from "../../lib/posts-util";

export default function AllPostsPage({ posts }) {
  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  return {
    props: {
      posts: getAllPost(),
    },
  };
}
