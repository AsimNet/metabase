git reset HEAD~1
rm ./backport.sh
git cherry-pick c848b50e2f18d6cd959c34812d5c946858aaa3e8
echo 'Resolve conflicts and force push this branch.\n\nTo backport translations run: bin/i18n/merge-translations <release-branch>'
