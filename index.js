#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function copyFolderSync(from, to) {
    fs.mkdirSync(to, { recursive: true });
    fs.readdirSync(from, { withFileTypes: true }).forEach((entry) => {
        const fromPath = path.join(from, entry.name);
        const toPath = path.join(to, entry.name);
        if (entry.isDirectory() && entry.name !== 'dist') {
            copyFolderSync(fromPath, toPath);
        } else if (!entry.isDirectory()) {
            fs.copyFileSync(fromPath, toPath);
        }
    });
}

function main() {
    const projectRoot = path.resolve(__dirname);
    const distDir = path.join(projectRoot, 'dist');

    if (fs.existsSync(distDir)) {
        fs.rmdirSync(distDir, { recursive: true });
    }

    copyFolderSync(projectRoot, distDir);

    console.log('Project copied to dist directory.');

    execSync(`pkg ${distDir} --out-path dist --targets node14-win-x64`);
    console.log('Build completed successfully.');
}

main();
