import React from "react";

import BlogHero from "@/components/BlogHero";

import styles from "./postSlug.module.css";
import { MDXRemote } from "next-mdx-remote/rsc";
import { loadBlogPost } from "@/helpers/file-helpers";

const getBlogPost = React.cache(loadBlogPost);

async function BlogPost({ params }) {
  const { postSlug } = await params;
  const { content } = await getBlogPost(postSlug);
  return (
    <article className={styles.wrapper}>
      <BlogHero title="Example post!" publishedOn={new Date()} />
      <div className={styles.page}>
        <MDXRemote source={content} />
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
