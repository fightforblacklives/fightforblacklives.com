npm run export &&
echo "fightforblacklives.com" > __sapper__/export/CNAME &&
mv __sapper__/export docs &&
git checkout -m gh-pages &&
git add . &&
git commit -m 'gh-pages-publish' &&
git push origin gh-pages &&
rm -rf docs &&
git checkout -f master &&
git branch -D gh-pages 