#!/usr/bin/env bash
# Checks the .htaccess behaviour of an exported build.
# Usage: ./check.sh                        (local container)
#        ./check.sh https://carenuity.com  (live Strato)
set -u

BASE=${1:-https://localhost:8443}
HTTP_BASE=$(echo "$BASE" | sed -e 's#^https://#http://#' -e 's#:8443#:8080#')
OUT=$(cd "$(dirname "$0")/../../out" && pwd)
BUILD_ID=$(ls "$OUT/_next/static" | grep -vE '^(chunks|css|media)$' | head -1)
CSS=$(cd "$OUT" && ls -S _next/static/css/*.css | head -1) # largest stylesheet
JS=$(cd "$OUT" && ls _next/static/chunks/pages/_app-*.js | head -1)

fails=0
check() { # name expected actual
  if [ "$2" = "$3" ]; then echo "PASS  $1"; else echo "FAIL  $1 (expected '$2', got '$3')"; fails=$((fails + 1)); fi
}
status() { curl -sk -o /dev/null -m 60 -w '%{http_code} %{redirect_url}' "$@"; }
encoding() { curl -sk -o /dev/null -m 60 -H 'Accept-Encoding: gzip' -w '%header{content-encoding}' "$1"; }

echo "Checking $BASE (build $BUILD_ID)"

# Compression: text gzipped, already-compressed media left alone
check 'CSS gzipped' gzip "$(encoding "$BASE/$CSS")"
check 'JS gzipped' gzip "$(encoding "$BASE/$JS")"
check 'HTML gzipped' gzip "$(encoding "$BASE/")"
check 'mp4 not gzipped' '' "$(encoding "$BASE/videos/content/sq-panel-latest.mp4")"
check 'mp4 range request' 206 "$(curl -sk -o /dev/null -m 60 -H 'Range: bytes=0-99' -w '%{http_code}' "$BASE/videos/content/sq-panel-latest.mp4")"

# Earlier fixes still hold
check 'register page' '200 ' "$(status "$BASE/home-challenge/register/thws/")"
check '_buildManifest not lowercased' '200 ' "$(status "$BASE/_next/static/$BUILD_ID/_buildManifest.js")"
check 'uppercase URL redirect' "302 $BASE/microcontrollers/c3-mini/" "$(status "$BASE/microcontrollers/C3-Mini/")"
check 'HTTP to HTTPS redirect' 301 "$(status "$HTTP_BASE/" | cut -d' ' -f1)"

echo
echo "Sizes ($CSS): $(curl -sk -o /dev/null -m 60 -w '%{size_download}' "$BASE/$CSS") bytes plain," \
  "$(curl -sk -o /dev/null -m 60 --compressed -w '%{size_download}' "$BASE/$CSS") bytes gzipped"
[ "$fails" -eq 0 ] && echo 'All checks passed' || { echo "$fails check(s) failed"; exit 1; }
