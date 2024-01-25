import fs from 'fs';
import path from 'path';

type Metadata = {
  title: string;
  description: string;
};

export type BlogMetadata = Metadata & {
  publishedAt: string;
  tag: string;
  readTime: number;
};

export type ProjectMetadata = Metadata & {
  lastModified: string;
  repository: string;
  url: string;
  stack: string;
};

export type BlogPost = {
  slug: string;
  metadata: BlogMetadata;
  content: string;
};

export type Project = {
  slug: string;
  metadata: ProjectMetadata;
  content: string;
};

function parseFile<T>(fileContent: string): T {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, '').trim();
  let frontMatterLines = frontMatterBlock.trim().split('\n');
  let metadata: Partial<BlogMetadata | ProjectMetadata> = {};

  frontMatterLines.forEach(line => {
    let [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata, content } as T;
}

function readMdxFile<T>(filePath: string): T {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const file: T = parseFile<T>(raw);
  const slug = path.basename(filePath, '.mdx');
  return {
    slug,
    ...file,
  } as T;
}

function readMdxFiles<T>(folder: string): T[] {
  const files = fs
    .readdirSync(folder)
    .filter(file => path.extname(file) === '.mdx');
  return files.map(file => readMdxFile<T>(path.join(folder, file)));
}

export function getProjects(): Project[] {
  return readMdxFiles<Project>('content/projects');
}

export function getBlogPosts(): BlogPost[] {
  return readMdxFiles<BlogPost>('content/posts');
}
