#!/bin/bash

# clean
rm -r build/
# create target dir
mkdir -p build/
# create distribution zip
zip -r -FS build/img-full-res.zip * --exclude '*.git*' 'README.md' 'build.sh' 'build/*' 'images/usage.png'
