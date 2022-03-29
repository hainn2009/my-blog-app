import Head from "next/head";
import { Fragment } from "react";

import AllPosts from "../../components/posts/all-posts";
import { getAllPost } from "../../lib/posts-util";

export default function AllPostsPage({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>All Posts123</title>
        <meta name="description" content="A list of all programmig-related tutorials and posts" />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  return {
    props: {
      posts: getAllPost(),
    },
  };
}
