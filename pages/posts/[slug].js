import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

export default function PostDetailPage({ post }) {
  return <PostContent post={post} />;
}

export function getStaticProps(context) {
  return {
    props: {
      post: getPostData(context.params.slug),
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  return {
    paths: getPostsFiles().map((postFile) => ({
      params: {
        slug: postFile.replace(/\.md$/, ""),
      },
    })),
    fallback: false,
  };
}
