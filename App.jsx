import React from 'react';
import { useState } from 'react';
import { marked } from 'marked';

function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to Markdown Previewer

**Bold**, *italic*, ~~strikethrough~~, and \`inline code\`.

> A blockquote.

\`\`\`js
// Code block
function greet(name) {
  return 'Hello ' + name;
}
\`\`\`

- List item 1
- List item 2

[GitHub](https://github.com)
`);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Markdown Previewer</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <textarea
          className="w-full p-4 rounded bg-gray-800 text-white resize-none h-[60vh]"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <div
          className="w-full p-4 rounded bg-gray-800 prose prose-invert max-w-none h-[60vh] overflow-auto"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
}

export default App;
