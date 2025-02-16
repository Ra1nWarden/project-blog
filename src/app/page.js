import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";
import { getBlogPostList } from "@/helpers/file-helpers";

async function Home() {
  const blogposts = await getBlogPostList();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {
        blogposts.map((blog) => (
          <BlogSummaryCard
            slug={blog.slug}
            title={blog.title}
            abstract={blog.abstract}
            publishedOn={blog.publishedOn}
            key={blog.slug}
          />
        ))
      }
    </div>
  );
}

export default Home;
