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

Support
--------

[![Flattr this git repo](http://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=voxpelli&url=https://github.com/voxpelli/node-multiphpmd&title=MultiPHPMD&language=en_GB&tags=github&category=software) 
