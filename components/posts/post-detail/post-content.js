import ReactMarkdown from "react-markdown";

import classes from "./post-content.module.css";
import PostHeader from "./post-header";

const post = {
  title: "Getting started with Next.js",
  image: "getting-started-nextjs.png",
  date: "2022-03-16",
  slug: "getting-started-with-nextjs",
  content: "# This is the first post",
};

export default function PostContent() {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
