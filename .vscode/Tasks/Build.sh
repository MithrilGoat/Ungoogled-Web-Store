#!/usr/bin/env sh

bun build                                    \
    --tsconfig-override Source/tsconfig.json \
    --outfile "Bundle/$1.js"                 \
    --watch                                  \
    "Source/$1/mod.ts"