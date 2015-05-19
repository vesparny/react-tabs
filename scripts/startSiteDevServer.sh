#!/bin/bash

webpackDevServer=node_modules/.bin/webpack-dev-server

rm -rf .examples/__build__
$webpackDevServer --config "$PWD/examples/webpack.config.js" --hot --content-base examples
