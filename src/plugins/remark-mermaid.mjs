/**
 * Turn ```mermaid fences into <pre class="mermaid"> before Expressive Code
 * sees them. MermaidLoader renders them in the browser.
 */
export default function remarkMermaid() {
  const walk = (node) => {
    if (!node.children) return;
    node.children = node.children.map((child) => {
      if (child.type === 'code' && child.lang === 'mermaid') {
        return {
          type: 'mermaid',
          data: {
            hName: 'pre',
            hProperties: { className: ['mermaid'] },
            hChildren: [{ type: 'text', value: child.value }],
          },
        };
      }
      walk(child);
      return child;
    });
  };
  return walk;
}
