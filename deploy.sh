npm run export &&
echo "fightforblacklives.com" > __sapper__/export/CNAME &&
rm -rf docs
mv __sapper__/export/ docs &&
git add . &&
git commit -m 'gh-pages-publish' &&
git push origin master