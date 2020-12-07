#!/usr/bin/env sh

rm -rf node_modules
yarn 
./build-ts.sh
yarn build:ts
yarn build
yarn test
yarn changelog
git add ./CHANGELOG.md
lerna publish  --registry=https://registry.npmjs.org --force-publish