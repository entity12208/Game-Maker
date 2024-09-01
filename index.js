#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function main() {
    const projectRoot = path.resolve(__dirname);
    const distDir = path.join(projectRoot, 'dist');
    const appFile = path.join(projectRoot, 'Code Files', 'Project Files', 'App.js');

    if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir);
    }

    if (!fs.existsSync(appFile)) {
        console.error('Error: App.js not found');
        process.exit(1);
    }

    fs.copyFileSync(appFile, path.join(distDir, 'App.js'));
    console.log('Build completed successfully.');
}

main();
