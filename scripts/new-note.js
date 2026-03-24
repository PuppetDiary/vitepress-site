#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function createNote() {
  console.log('创建新随笔\n');

  const module = await question('选择模块 (music/movies/books/sports/travel): ');
  const category = await question('选择分类: ');
  const title = await question('输入标题: ');
  const tags = await question('输入标签 (用逗号分隔): ');

  const date = new Date().toISOString().split('T')[0];
  const filename = `${date}-${title.toLowerCase().replace(/\s+/g, '-')}.md`;
  const filepath = path.join(__dirname, '..', 'docs', module, category, filename);

  const template = fs.readFileSync(
    path.join(__dirname, '..', 'templates', 'note-template.md'),
    'utf-8'
  );

  const content = template
    .replace(/标题/g, title)
    .replace(/YYYY-MM-DD/g, date)
    .replace(/标签1, 标签2/g, tags);

  fs.writeFileSync(filepath, content);
  console.log(`\n随笔创建成功: ${filepath}`);

  rl.close();
}

createNote();
