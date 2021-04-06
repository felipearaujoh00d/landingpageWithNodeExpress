#!/usr/bin/env bash

#source ./.envvars

## Executa em background
docker-compose up  web

## Em seguida ouve os arquivos scss
#exec ./watch-scss-files.sh