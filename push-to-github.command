#!/bin/bash
cd "/Users/mushtaq/Library/CloudStorage/OneDrive-Personal/Documents/AMF Solutions/Aryam Gold Store/Aryam Gold Store/aryam-jewelry"
rm -f .git/index.lock
git add .
git commit -m "Initial commit — Aryam's Jewelry website"
git push -u origin main
echo ""
echo "✅ Done! Press any key to close."
read -n 1
