#!/usr/bin/env bash

tmux new-session 'npm run build' \; split-window -h 'npm run serve'
