#!/bin/bash
set -e
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../src/assets/home" && pwd)"
cd "$DIR"

ASSETS='
more-more-andriod https://www.figma.com/api/mcp/asset/f548d8a1-1b18-4509-b509-290b859b3654
wrap https://www.figma.com/api/mcp/asset/4807ee6b-e30e-4c02-af3a-6e26ce03c655
close https://www.figma.com/api/mcp/asset/9105ce6c-c74f-4a09-8e1e-99c741668cea
hero-bg https://www.figma.com/api/mcp/asset/f2dfbc8b-5069-4b2e-9f9a-0ae7f41e0cb1
headline-mask https://www.figma.com/api/mcp/asset/579eb94f-b6a5-4035-b2c7-5d56dc7b03c4
can-peach-passion https://www.figma.com/api/mcp/asset/7ef59056-2e8c-426e-90ea-f59aad1f4c0d
leaf-group https://www.figma.com/api/mcp/asset/ec60d08d-9515-4b32-94d1-e4b153a11c28
mission-fruit-1 https://www.figma.com/api/mcp/asset/bad7d62a-188b-4be7-8d0b-caa02eed7a06
mission-fruit-2 https://www.figma.com/api/mcp/asset/d9f9cd69-39bb-491d-aada-90e2906f2031
card-persik-verbena https://www.figma.com/api/mcp/asset/3197174b-ec03-4a29-9c66-b3d61a0d6b61
card-persik-verbena-overlay https://www.figma.com/api/mcp/asset/c32276a5-e176-47a0-901e-d0eeece5c237
card-mango-chili https://www.figma.com/api/mcp/asset/c6e00723-a0f0-42f3-99ea-e5a802e18cea
card-arbuz-melissa https://www.figma.com/api/mcp/asset/a28b492f-732f-45fa-97fa-617695727449
card-ananas-lichi https://www.figma.com/api/mcp/asset/8a2aae62-afbd-4392-93c7-a1063fbec962
card-dynya-myata https://www.figma.com/api/mcp/asset/45fc9f1b-d0ba-451a-9fc3-5c65096c4182
card-persik-verbena-2 https://www.figma.com/api/mcp/asset/6aa5861c-6511-4b4c-92d0-9b41f0009908
chevron-back https://www.figma.com/api/mcp/asset/541f92cc-5b21-4d02-88b9-e36c6760fd9d
icon-map-pin https://www.figma.com/api/mcp/asset/80b2dfee-46f3-42c4-a887-832e8f848c6e
moment-1 https://www.figma.com/api/mcp/asset/a0123c35-b4b3-42f7-8b07-ea641474e77e
moment-2 https://www.figma.com/api/mcp/asset/833440fa-9734-4730-869a-b9049e3f5790
moment-3 https://www.figma.com/api/mcp/asset/f68ab394-a43a-4c13-a2af-45618950cb9c
moment-4 https://www.figma.com/api/mcp/asset/cf413fd9-25ff-4d77-ba16-5e83c6adcba8
moment-5 https://www.figma.com/api/mcp/asset/a5bdf1f7-a9cb-44d9-97c9-708919ba6b47
moment-6 https://www.figma.com/api/mcp/asset/3afa6db0-a504-4eaa-bf73-086cb1078eea
moment-7 https://www.figma.com/api/mcp/asset/82e26375-1d29-4f36-b147-6d0c6e50a549
map-bg https://www.figma.com/api/mcp/asset/dc7416fd-c53e-424e-91a8-19033b7ae251
map-vec-1 https://www.figma.com/api/mcp/asset/0019ff0d-bad9-4a17-8262-ad5866cd3499
map-vec-2 https://www.figma.com/api/mcp/asset/c08e4849-9853-47a1-bd5e-0533accbf7a3
map-vec-3 https://www.figma.com/api/mcp/asset/af4c8e48-1cf1-460b-9f41-edacd02c9034
map-vec-4 https://www.figma.com/api/mcp/asset/0b79d7ce-4fad-48d2-bf02-450298c5c0d0
map-vec-5 https://www.figma.com/api/mcp/asset/18bdaed3-0cd1-4b6b-ba3d-3f387fee628a
map-vec-6 https://www.figma.com/api/mcp/asset/de21e9d4-7a1f-4e3d-9783-6bb4e10a25a8
map-vec-7 https://www.figma.com/api/mcp/asset/eaf81d5a-9d73-4c56-adc3-28ca1f5b7f31
map-vec-8 https://www.figma.com/api/mcp/asset/1d3a9f9d-b4aa-4625-8c06-74981eb944f8
map-mask-2 https://www.figma.com/api/mcp/asset/af4c8e48-1cf1-460b-9f41-edacd02c9034
btn-find-nearby https://www.figma.com/api/mcp/asset/c540349b-d2c0-4c71-98d5-01242a1ad57d
icon-plus-outline https://www.figma.com/api/mcp/asset/a70ec391-0ddd-4656-9438-8ed826dda44d
btn-add-purchase https://www.figma.com/api/mcp/asset/eaab9ca0-be3a-4df8-8726-7c4c443537f5
icon-close-modal https://www.figma.com/api/mcp/asset/f30dcbd0-7e3a-4161-9b64-12b390791261
modal-illustration https://www.figma.com/api/mcp/asset/1df7b8c7-2314-4843-972e-1bb59dcce42e
logo-wordmark https://www.figma.com/api/mcp/asset/d08b4617-7e32-4028-b844-deae5e5fa6ec
icon-nav-home https://www.figma.com/api/mcp/asset/7e76fb20-4f26-4ff0-88da-6bee921ca6f1
icon-nav-map https://www.figma.com/api/mcp/asset/e7d2ce5d-86ed-4fe6-a469-a0c599d371da
btn-nav-add https://www.figma.com/api/mcp/asset/dc7416fd-c53e-424e-91a8-19033b7ae251
icon-nav-list https://www.figma.com/api/mcp/asset/c4ff9ab9-c43e-4961-94f5-0f478adeddb4
icon-nav-user https://www.figma.com/api/mcp/asset/e1536491-5434-40c6-b84e-22fd7e3190c9
'

echo "$ASSETS" | while read -r name url; do
  [ -z "$name" ] && continue
  curl -sL "$url" -o "${name}.tmp"
  fmt=$(file --brief --mime-type "${name}.tmp")
  case "$fmt" in
    image/png) ext=png ;;
    image/jpeg) ext=jpg ;;
    image/svg*|text/xml|text/plain) ext=svg ;;
    image/webp) ext=webp ;;
    image/gif) ext=gif ;;
    *) ext=png ;;
  esac
  mv "${name}.tmp" "${name}.${ext}"
  echo "$name.$ext <- $fmt"
done
