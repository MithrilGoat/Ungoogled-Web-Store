#!/usr/bin/env sh

clear

echo 'Started Bundling ..'

bun run build Background &
bun run build Sidepanel &

wait

echo 'Stopped Bundling.'