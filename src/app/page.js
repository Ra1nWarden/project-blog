import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";
import { getBlogPostList } from "@/helpers/file-helpers";
import { MotionConfig } from "framer-motion";

async function Home() {
  const blogposts = await getBlogPostList();
  return (
    <MotionConfig reducedMotion="user">
      <div className={styles.wrapper}>
        <h1 className={styles.mainHeading}>Latest Content:</h1>

        {
          /* TODO: Iterate over the data read from the file system! */
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
    </MotionConfig>
  );
}

export default Home;
