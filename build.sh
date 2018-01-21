#!/bin/bash

export BUILD_REVERSION=${BUILD_REVERSION:-UNKNOWN}
export BUILD_NUMBER=${BUILD_NUMBER:-UNKNOWN}

echo "BUILD_NUMBER: $BUILD_NUMBER"
echo "BUILD_REVERSION: $BUILD_REVERSION"
echo "PATH: $PATH"

die() {
   err=$?
   echo "Failed with exit code $err." >&2
   exit $err
}

build() {
   #
   ### Step 1: Build
   #
   echo "================== Building Developer Frontend =================="
   npm install
   npm run build
   npm run package
}

case $1 in
   build)
      shift
      build
      ;;
   help|*)
      echo "Usage: ./build.sh [COMMAND]"
      echo "COMMANDS"
      echo ""
      echo "   build     Exec clean, compile and unit test."
      echo "   publish   Exec publish to nexus and sonar."
      echo "   help      Show command help."
      ;;
esac
