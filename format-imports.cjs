const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDir(fullPath);
        } else if (/\.(ts|tsx|css)$/.test(file)) {
            let content = fs.readFileSync(fullPath, 'utf8');

            // We want exactly TWO blank lines after the last import block.
            // First, find the end of the imports.
            // A simplistic approach: find the last occurrence of `import ` or `require`.
            // Also handles css variables or initial blocks maybe?

            // Let's just find the last line that starts with import (excluding spaces)
            const lines = content.split('\n');
            let lastImportIndex = -1;

            for (let i = 0; i < lines.length; i++) {
                if (lines[i].trim().startsWith('import ') || lines[i].trim().startsWith('@import ')) {
                    lastImportIndex = i;
                }
            }

            if (lastImportIndex !== -1) {
                // Collect everything before and including the last import (and handling multi-line imports if any, but Vite is usually 1 line per statement or matching brackets)
                // Wait, what if import spans multiple lines?
                // A safer way is regex.
                let match;
                const importRegex = /(?:^|\n)(import\s+[\s\S]*?from\s+['"][^'"]+['"];?)(?=\s*\n|$)/g;
                let lastIndex = -1;
                while ((match = importRegex.exec(content)) !== null) {
                    lastIndex = match.index + match[1].length;
                }

                if (lastIndex !== -1) {
                    const before = content.slice(0, lastIndex);
                    const after = content.slice(lastIndex);

                    // Count and replace newlines right after
                    const cleanAfter = after.replace(/^\s+/, '');

                    content = before + '\n\n\n' + cleanAfter;
                    // `\n\n\n` = exactly two blank lines between the import statement and the next code.
                    // e.g.
                    // import foo ... (line 1)
                    // (line 2 - blank)
                    // (line 3 - blank)
                    // const bar ... (line 4)
                }
            } else {
                // If no import, just ensure the file isn't messed up
            }

            fs.writeFileSync(fullPath, content);
        }
    }
}

processDir(path.join(__dirname, 'src'));
console.log('Normalized format completed.');
