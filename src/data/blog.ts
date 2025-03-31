// Required imports for MDX and Markdown processing
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

// Metadata structure definition for blog posts
type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

// Gets all MDX files from a specified directory
function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

// Converts Markdown content to HTML with formatting and code highlighting
export async function markdownToHTML(markdown: string) {
  const processedContent = await unified()
    // Markdown parser
    .use(remarkParse)
    // GitHub Flavored Markdown support
    .use(remarkGfm)
    // Converts Markdown to HTML
    .use(remarkRehype)
    // Adds code highlighting
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    // Converts AST to string
    .use(rehypeStringify)
    .process(markdown);

  return processedContent.toString();
}

// Retrieves a specific post by its slug
export async function getPost(slug: string) {
  // Extracts content and metadata from MDX file
  const { content: rawContent, data: metadata } = matter(
    fs.readFileSync(path.join("content", `${slug}.mdx`), "utf-8")
  );
  // Converts Markdown content to HTML
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata,
    slug,
  };
}

// Gets all posts from the specified directory
async function getAllPosts(dir: string) {
  // Get list of MDX files
  let mdxFiles = getMDXFiles(dir);
  // Process each file in parallel
  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      let { metadata, source } = await getPost(slug);
      return {
        metadata,
        slug,
        source,
      };
    }),
  );
}

// Main function to retrieve all blog posts
export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), "content"));
}
