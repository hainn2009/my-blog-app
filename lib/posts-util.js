import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postSDirectory = path.join(process.cwd(), "posts");
function getPostData(fileName) {
  const fileContent = fs.readFileSync(path.join(postSDirectory, fileName), "utf-8");
  const { data, content } = matter(fileContent);

  //remove file extension
  const postSlug = fileName.replace(/\.md$/, "");
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPost() {
  const postFiles = fs.readdirSync(postSDirectory);
  const allPosts = postFiles.map((postFile) => getPostData(postFile));
  const sortedPosts = allPosts.sort((postA, postB) => (postA.date > postB ? -1 : 1));
  return sortedPosts;
}

export function getFeaturedPosts() {
  return getAllPost().filter((post) => post.isFeatured);
}
