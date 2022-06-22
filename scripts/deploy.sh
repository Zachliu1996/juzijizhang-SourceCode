#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'update' &&
git remote add origin git@github.com:Zachliu1996/juzijizhang-website.git  &&
git push -U origin master -f
cd -