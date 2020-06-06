npm run export &&
git branch -D gh-pages &&
git checkout --orphan gh-pages &&
git --work-tree __sapper__/export/fightforblacklives.com add --all &&
git --work-tree __sapper__/export/fightforblacklives.com commit -m 'gh-pages' &&
echo "fightforblacklives.com" > ./CNAME &&
git push origin HEAD:gh-pages --force &&
git checkout -f master
rm -rf __sapper__/export