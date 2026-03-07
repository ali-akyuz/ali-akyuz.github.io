# GitHub Pages Deploy Script
# Ali Akyu - Portfolio

Set-Location "c:\Users\Pc\OneDrive\Desktop\website"

git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/ali-akyuz/ali-akyuz.github.io.git
git push -u origin main
