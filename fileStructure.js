const fs = require('fs');
const path = require('path');

// Function to recursively log the file structure
function logDirectoryStructure(dir, depth = 0) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const indent = '  '.repeat(depth);
        
        // Check if it's a directory or a file
        if (fs.lstatSync(fullPath).isDirectory()) {
            console.log(`${indent}📁 ${file}`);
            // Recursively log contents of the directory
            logDirectoryStructure(fullPath, depth + 1);
        } else {
            console.log(`${indent}📄 ${file}`);
        }
    });
}

// Provide the starting directory (e.g., current directory)
logDirectoryStructure(__dirname);
