import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighLighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

import classes from "./post-content.module.css";
import PostHeader from "./post-header";

SyntaxHighLighter.registerLanguage("js", js);
SyntaxHighLighter.registerLanguage("css", css);

export default function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customRenders = {
    img({ node, ...image }) {
      return (
        <div className={classes.image}>
          <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300} />
        </div>
      );
    },
    code(code) {
      const { className, children } = code;
      const language = className.replace("language-", "");
      return (
        <SyntaxHighLighter style={atomDark} language={language}>
          {children}
        </SyntaxHighLighter>
      );
    },
    // not working
    // p({ node, ...props }) {
    //   console.log(node);
    //   if (node.children[0].type === "img")
    //     return (
    //       <div className={classes.image}>
    //         <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300} />
    //       </div>
    //     );
    //   return <p>{node.children}</p>;
    // },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenders}>{post.content}</ReactMarkdown>
    </article>
  );
}
