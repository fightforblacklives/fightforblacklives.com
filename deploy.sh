npm run export &&
echo "fightforblacklives.com" > __sapper__/export/CNAME &&
mv __sapper__/export docs &&
git commit -m 'gh-pages-publish' &&
git push origin master