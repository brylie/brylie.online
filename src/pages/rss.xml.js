import rss from "@astrojs/rss";
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: "Brylie | Blog",
    description: "Thoughts, tutorials, and insights about software development, music, data engineering, and technology from Brylie Christopher Oxley.",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.datePublished,
      description: post.data.description,
      link: `/posts/${post.data.slug}/`,
      ...(post.data.tags && {
        categories: post.data.tags
      }),
      ...(post.data.author && {
        author: post.data.author
      }),
    })),
    customData: `<language>en-us</language>`,
    stylesheet: '/rss/styles.xsl',
  });
}
