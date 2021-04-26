#!/usr/bin/env bash

DATE="$(date +%m-%d)"
if [ ! -d "./save/$DATE" ]; then
  DEST="./save/$DATE"
else
  DEST="./save/${DATE}--$(date +%N)"
fi
mkdir $DEST

rsync -av --progress ** "$DEST" --exclude node_modules --exclude save
