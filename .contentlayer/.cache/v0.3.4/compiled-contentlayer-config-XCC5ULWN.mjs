// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      required: true
    },
    lastModified: {
      type: "date",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    repository: {
      type: "string",
      required: false
    },
    url: {
      type: "string",
      required: false
    }
  },
  computedFields: {
    slug: { type: "string", resolve: (project) => project._raw.flattenedPath }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content/projects",
  documentTypes: [Project],
  mdx: {}
});
export {
  Project,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-XCC5ULWN.mjs.map
