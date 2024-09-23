const fs = require('fs');  // Import the filesystem module
const path = require('path');  // Import the path module for handling and transforming file paths

// Function to recursively log the file structure
function logDirectoryStructure(dir, depth = 0) {
    // Read all files and folders in the current directory (dir)
    const files = fs.readdirSync(dir);

    // Iterate over each file/folder in the directory
    files.forEach(file => {
        // Get the full path of the current file/folder by combining the directory and file name
        const fullPath = path.join(dir, file);

        // Create an indentation based on the depth of the folder hierarchy
        const indent = '  '.repeat(depth);

        // Exclude the .git and node_modules directories from being logged
        if (file === '.git' || file === 'node_modules' || file === '.DS_Store') return;
        // Check if the current item is a directory (folder)
        if (fs.lstatSync(fullPath).isDirectory()) {
            // Log the folder name with a folder icon
            console.log(`${indent}📁 ${file}`);

            // Recursively log the contents of this directory by calling the function again
            // Increase depth by 1 to indent the contents further
            logDirectoryStructure(fullPath, depth + 1);
        } else {
            // If the item is not a directory (i.e., it's a file), log the file name with a file icon
            console.log(`${indent}📄 ${file}`);
        }
    });
}

// Provide the starting directory, which is the current directory (__dirname)
logDirectoryStructure(__dirname);
