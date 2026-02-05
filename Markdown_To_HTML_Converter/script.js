const markdownInput = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');
const preview = document.getElementById('preview');

function convertMarkdown() {
    let text = markdownInput.value;

    // Headings (only at start of line)
    text = text.replace(/^#{3}\s+(.*)$/gm, (_, content) => `<h3>${content}</h3>`);
    text = text.replace(/^#{2}\s+(.*)$/gm, (_, content) => `<h2>${content}</h2>`);
    text = text.replace(/^#\s+(.*)$/gm, (_, content) => `<h1>${content}</h1>`);

    // Blockquotes (only at start of line)
    text = text.replace(/^>\s+(.*)$/gm, (_, content) => `<blockquote>${content}</blockquote>`);

    // Images
    text = text.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

    // Links
    text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

    // Bold text
    text = text.replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>');

    // Italic text
    text = text.replace(/(\*|_)(.*?)\1/g, '<em>$2</em>');

    return text;
}

// Listen to input events
markdownInput.addEventListener('input', () => {
    const html = convertMarkdown();
    htmlOutput.textContent = html; // show raw HTML
    preview.innerHTML = html;      // render HTML preview
});
