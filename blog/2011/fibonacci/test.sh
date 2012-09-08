echo "### php"
php -v | head -1

echo "\n\`\`\`php"
cat fibonacci.php
echo "\n\`\`\`"

echo "\n\`\`\`bash"
time php fibonacci.php
echo "\`\`\`\n"

$HOME/apps/php-5.4.6/sapi/cli/php -v | head -1

echo "\n\`\`\`bash"
time $HOME/apps/php-5.4.6/sapi/cli/php fibonacci.php
echo "\`\`\`\n"

echo "### perl"
perl -v | head -2 | grep version

echo "\n\`\`\`perl"
cat fibonacci.pl
echo "\n\`\`\`"

echo "\n\`\`\`bash"
time perl fibonacci.pl
echo "\`\`\`\n"
