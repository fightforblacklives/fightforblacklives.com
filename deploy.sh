npm run export &&
echo "fightforblacklives.com" > __sapper__/export/CNAME &&
git checkout --orphan gh-pages &&
git --work-tree __sapper__/export/fightforblacklives.com add --all &&
git --work-tree __sapper__/export/fightforblacklives.com commit -m 'gh-pages' &&
git push origin HEAD:gh-pages --force &&
git checkout -f master &&
git branch -D gh-pages 
rm -rf __sapper__/export &&