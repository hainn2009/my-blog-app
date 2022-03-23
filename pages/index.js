import { Fragment } from "react";
import Head from "next/head";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

export default function HomePage({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>Hai&apos;s blog</title>
        <meta name="description" content="I post about web development" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  return {
    props: {
      posts: getFeaturedPosts(),
    },
  };
}
