import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: '**/projects/*.mdx',
  contentType: 'mdx',
  fields: {
    name: {
      type: 'string',
      required: true,
    },
    lastModified: {
      type: 'date',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    repository: {
      type: 'string',
      required: false,
    },
    url: {
      type: 'string',
      required: false,
    },
    stack: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: project => project._raw.sourceFileName.split('.')[0],
    },
  },
}));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/posts/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'date',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    tag: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: post => post._raw.sourceFileName.split('.')[0],
    },
  },
}));

export default makeSource({
  contentDirPath: 'content/',
  documentTypes: [Project, Post],
  mdx: {},
});
