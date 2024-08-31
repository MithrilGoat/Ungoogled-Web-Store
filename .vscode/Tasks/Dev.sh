#!/usr/bin/env sh

clear

echo 'Started Bundling ..'

bun run build Background &

wait

echo 'Stopped Bundling.'