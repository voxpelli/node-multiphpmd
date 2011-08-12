MultiPHPMD
=============

A script for in parallell checking multiple specific files in [PHPMD](http://phpmd.org/).

Install
--------

First install [PHPMD](http://phpmd.org/download/index.html), [Node](http://nodejs.org/) (I use [Homebrew](http://mxcl.github.com/homebrew/) for Node) and [NPM](http://npmjs.org/), then do:

    git clone http://github.com/voxpelli/node-multiphpmd.git
    cd node-multiphpmd
    npm install -g

Example
--------

To check all staged files in git, do:

    git diff --name-only --staged | multiphpmd codesize,unusedcode,naming,design

Or the equivalent shorter:

    git diff --name-only --staged | multiphpmd
