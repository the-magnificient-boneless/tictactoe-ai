#! /bin/bash -
if [[ ! -e .husky/prepare-commit-msg ]]; then
    npx husky add .husky/prepare-commit-msg 'npm run lint:fix'
    npx husky add .husky/prepare-commit-msg 'exec < /dev/tty && git cz --hook || true'
fi