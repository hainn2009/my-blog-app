import Head from "next/head";
import { Fragment } from "react";

import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

export default function PostDetailPage({ post }) {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />;
    </Fragment>
  );
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
