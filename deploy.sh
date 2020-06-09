npm run export &&
echo "fightforblacklives.com" > __sapper__/export/CNAME &&
mv __sapper__/export/404/index.html __sapper__/export/404.html
rm -rf __sapper__/export/404
rm -rf docs
mv __sapper__/export/ docs &&
git add . &&
git commit -m 'gh-pages-publish' &&
git push origin master