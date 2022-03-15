import PostItem from "./post-item";
import classes from "./post-grid.module.css";

export default function PostGrid({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </ul>
  );
}
