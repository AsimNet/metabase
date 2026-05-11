git reset HEAD~1
rm ./backport.sh
git cherry-pick 26b4b626a92ea26ccdd16c4cb85bf6692f5f60b9
echo 'Resolve conflicts and force push this branch.\n\nTo backport translations run: bin/i18n/merge-translations <release-branch>'
