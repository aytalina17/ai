#!/bin/bash
set -e
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../src/assets/home" && pwd)"
cd "$DIR"

MAXDIM=900
QUALITY=76

optimize_to_jpg() {
  local base="$1"
  local src="${base}.png"
  [ -f "$src" ] || src="${base}.jpg"
  [ -f "$src" ] || return 0
  # NOTE: some source photos (e.g. modern iPhone shots with an embedded
  # HDR/gain-map or wide-gamut color profile) make macOS `sips` silently
  # output a solid-black image when format-conversion and resize happen in
  # a single pass. Splitting into two passes (flatten format, then resize)
  # avoids the bug — always verify the result visually after regenerating.
  sips -s format jpeg -s formatOptions "$QUALITY" "$src" --out "${base}.flat.jpg" >/dev/null
  sips -Z "$MAXDIM" -s formatOptions "$QUALITY" "${base}.flat.jpg" --out "${base}.opt.jpg" >/dev/null
  rm -f "$src" "${base}.flat.jpg"
  mv "${base}.opt.jpg" "${base}.jpg"
  echo "$base -> $(du -h "${base}.jpg" | cut -f1)"
}

for base in card-ananas-lichi card-arbuz-melissa card-dynya-myata card-persik-verbena-2 card-persik-verbena hero-bg map-bg moment-2 moment-6 moment-7 card-mango-chili card-persik-verbena-overlay moment-1 moment-3 moment-4 moment-5 moment-8; do
  optimize_to_jpg "$base"
done

# keep transparency for the can product shot, just cap resolution
sips -Z 700 can-peach-passion.png --out can-peach-passion.opt.png >/dev/null
mv can-peach-passion.opt.png can-peach-passion.png
echo "can-peach-passion -> $(du -h can-peach-passion.png | cut -f1)"
