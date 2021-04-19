#!/usr/bin/env bash

# generics

# products
if [ "$1" = "products" ]; then
  # GETs
  curl 'http://localhost:9000/products'
  curl 'http://localhost:9000/products?page=2&count=3'
  curl 'http://localhost:9000/products/?page=2&count=3'
  curl 'http://localhost:9000/products/19002'
  curl 'http://localhost:9000/products/19002/'
  curl 'http://localhost:9000/products/19002?page=2&count=3'""
  curl 'http://localhost:9000/products/19002/?page=2&count=3'
  curl 'http://localhost:9000/products/19002/styles'
  curl 'http://localhost:9000/products/19002/styles?page=2&count=3'
  curl 'http://localhost:9000/products/19002/styles/?page=2&count=3'
  curl 'http://localhost:9000/products/19002/related'
  curl 'http://localhost:9000/products/19002/related?page=2&count=3'
  curl 'http://localhost:9000/products/19002/related/?page=2&count=3'
fi

if [ "$1" = "reviews" ]; then
  # GETs
  curl 'http://localhost:9000/reviews'
  curl 'http://localhost:9000/reviews/'
  curl 'http://localhost:9000/reviews/?product_id=19002'
  curl 'http://localhost:9000/reviews/?product_id=19002&sort=newest'
  curl 'http://localhost:9000/reviews/?product_id=19002&sort=relevant'
  curl 'http://localhost:9000/reviews/?product_id=19002&sort=helpful'
  curl 'http://localhost:9000/reviews/meta/?product_id=19002'
  # POSTs
  curl \
    -X POST \
    -H 'Content-Type: application/json' \
    --data '{"rating":3,"summary":"sum summary","body":"bodacious bod","recommend":true,"name":"username1","email":"name@email.com","photos":["https://files.catbox.moe/aeii4s.jpg"],"characteristics":{"14":2,"15":3}}'
    'http://localhost:9000/reviews/?product_id=19002'
  # PUTs
  curl -X PUT 'http://localhost:9000/reviews/19002/helpful'
  curl -X PUT 'http://localhost:9000/reviews/19002/report'
fi

if [ "$1" = "qa" ]; then
  # GETs
  curl 'http://localhost:9000/qa/questions/?product_id=19002'
  curl 'http://localhost:9000/qa/questions/123020/answers/?product_id=19002'
  # POSTs
  curl \
    -X POST \
    -H 'Content-Type: application/json' \
    --data '{"product_id":19002,"name":"john smith","email":"js@dingleheimer.com","body":"to be, or not to be?"}' \
    'http://localhost:9000/qa/questions'
  curl \
    -X POST \
    -H 'Content-Type: application/json' \
    --data '{"name":,"bob jones","email":"bobjones@yahoo.com","body":"yer wrong!","photos":["https://files.catbox.moe/o9qxby.jpg"]}'
    'http://localhost:9000/qa/123030/answers'
  # PUTs
  curl -X PUT 'http://localhost:9000/qa/questions/123030/helpful'
  curl -X PUT 'http://localhost:9000/qa/questions/123030/report'
  curl -X PUT 'http://localhost:9000/qa/answers/1164840/helpful'
  curl -X PUT 'http://localhost:9000/qa/answers/1164840/report'
fi

if [ "$1" = "cart" ]; then
  # GETs
  curl 'http://localhost:9000/cart'
  # POSTs
  curl \
    -X POST \
    -H 'Content-Type: application/json' \
    --data '{"sku_id":19002}'
    'http://localhost:9000/cart'
fi

if [ "$1" = "interactions" ]; then
  # POSTs
  curl \
    -X POST \
    -H 'Content-Type: application/json' \
    --data '{"widget":"","element":"","time":"18:16"}'
    'http://localhost:9000/interactions'
fi
