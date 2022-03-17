import AllPosts from "../../components/posts/all-posts";

const posts = [
  {
    title: "Getting started with Next.js",
    image: "getting-started-nextjs.png",
    exerpt: "Something about Nextjs with server-side rendering",
    date: "2022-03-16",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Getting started with Next.js1",
    image: "getting-started-nextjs1.png",
    exerpt: "Something about Nextjs with server-side rendering",
    date: "2022-03-16",
    slug: "getting-started-with-nextjs1",
  },
  {
    title: "Getting started with Next.js2",
    image: "getting-started-nextjs2.png",
    exerpt: "Something about Nextjs with server-side rendering",
    date: "2022-03-16",
    slug: "getting-started-with-nextjs2",
  },
];

export default function AllPostsPage() {
  return <AllPosts posts={posts} />;
}
