#!/bin/bash
cd "/Users/mushtaq/Library/CloudStorage/OneDrive-Personal/Documents/AMF Solutions/Aryam Gold Store/Aryam Gold Store/aryam-jewelry"
rm -f next.config.ts
git add .
git commit -m "Fix: rename next.config.ts to next.config.mjs for Netlify compatibility"
git push
echo ""
echo "Done! Press any key to close."
read -n 1
