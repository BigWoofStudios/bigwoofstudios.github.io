git checkout main
# create a local temp branch containing the splitted output folder
git subtree split --prefix dist -b temp 

git checkout temp
git add .
git commit -m "deploying"

# force the push of the gh-pages branch to the remote gh-pages branch at origin
git push -f origin HEAD:gh-pages
# delete the local temp because you will need it: ref
git branch -D temp 