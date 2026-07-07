#!/bin/sh
# 发布前运行：把 Obsidian 库里的文章同步到博客仓库
# 用法: ./scripts/sync-posts.sh  或  npm run sync
set -e

SRC="/Users/frank/ob/Joy/04archive/posts/"
DEST="$(cd "$(dirname "$0")/.." && pwd)/content/posts/"

if [ -L "${DEST%/}" ]; then
  echo "错误: content/posts 仍是软链接，请先将其替换为真实目录再同步。" >&2
  exit 1
fi

rsync -av --delete \
  --exclude ".obsidian" \
  --exclude ".trash" \
  --exclude ".DS_Store" \
  "$SRC" "$DEST"

echo ""
echo "同步完成。检查改动: git status content/posts"
