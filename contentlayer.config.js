import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: '**/*.mdx',
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
  },
  computedFields: {
    slug: { type: 'string', resolve: project => project._raw.flattenedPath },
  },
}));

export default makeSource({
  contentDirPath: 'content/projects',
  documentTypes: [Project],
  mdx: {},
});
