import hljs from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';
import bash from 'highlight.js/lib/languages/bash';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('typescript', typescript);

export default function Code({
  children,
  className,
}: {
  children?: React.ReactNode;
  className: string;
}) {
  const language = className.replace(/language-/, '');
  const html = hljs.highlight(children as string, { language }).value;

  return <code dangerouslySetInnerHTML={{ __html: html }} />;
}
