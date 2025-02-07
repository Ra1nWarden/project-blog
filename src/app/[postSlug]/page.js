import React from "react";

import BlogHero from "@/components/BlogHero";

import styles from "./postSlug.module.css";
import { MDXRemote } from "next-mdx-remote/rsc";
import dynamic from "next/dynamic";
import { loadBlogPost } from "@/helpers/file-helpers";
import CodeSnippet from "@/components/CodeSnippet";

const CircularColorsDemo = dynamic(() =>
  import("@/components/CircularColorsDemo")
);
const DivisionGroupsDemo = dynamic(() =>
  import("@/components/DivisionGroupsDemo")
);

const getBlogPost = React.cache(loadBlogPost);

const components = {
  pre: (props) => <CodeSnippet {...props} />,
  DivisionGroupsDemo,
  CircularColorsDemo,
};

async function BlogPost({ params }) {
  const { postSlug } = await params;
  const { content } = await getBlogPost(postSlug);
  return (
    <article className={styles.wrapper}>
      <BlogHero title="Example post!" publishedOn={new Date()} />
      <div className={styles.page}>
        <MDXRemote source={content} components={components} />
      </div>
    </article>
  );
}

export async function generateMetadata({ params }) {
  const { postSlug } = await params;
  const { frontmatter } = await getBlogPost(postSlug);
  return {
    title: postSlug,
    description: frontmatter.abstract,
  };
}

export default BlogPost;
