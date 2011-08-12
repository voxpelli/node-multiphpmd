MultiPHPMD
=============

A script for in parallell checking multiple specific files in PHPMD.

Install
--------

Standalone installation:

    git clone http://github.com/voxpelli/node-multiphpmd.git
    cd node-multiphpmd
    npm install

Example
--------

To check all staged files in git, do:

    git diff --name-only --staged | multiphpmd codesize,unusedcode