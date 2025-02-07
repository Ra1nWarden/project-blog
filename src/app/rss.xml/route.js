import { getBlogPostList } from "@/helpers/file-helpers";
import RSS from "rss";

export async function GET() {
  const feed = new RSS({
    title: "Joy of React exercise blog",
    description: "RSS feed for stretch goal",
  });
  const blogList = await getBlogPostList();
  blogList.forEach((blog) =>
    feed.item({
      title: blog.title,
      description: blog.description,
      abstract: blog.abstract,
    })
  );
  return new Response(feed.xml(), {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
