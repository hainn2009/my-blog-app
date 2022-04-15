import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postSDirectory = path.join(process.cwd(), "posts");
export const getPostsFiles = () => fs.readdirSync(postSDirectory);

export function getPostData(postIdentifier) {
  //remove file extension
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const fileContent = fs.readFileSync(path.join(postSDirectory, `${postSlug}.md`), "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPost() {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map((postFile) => getPostData(postFile));
  const sortedPosts = allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
  return sortedPosts;
}

export function getFeaturedPosts() {
  return getAllPost().filter((post) => post.isFeatured);
}
