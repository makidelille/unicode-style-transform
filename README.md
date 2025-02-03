# unicode-style-transform

Transform unicode string using unicode special characters

## Install

```bash
npm install unicode-style-transform
```

## Usage

```js
// typescript
import { Style, stylize, unstylize } from "unicode-style-transform";

// javascript
const { Style, stylize, unstylize } = require("unicode-style-transform");

stylize("The quick brown fox jumps over the lazy dog", Style.Bold | Style.Italic); 
// Transforms to "𝑻𝒉𝒆 𝒒𝒖𝒊𝒄𝒌 𝒃𝒓𝒐𝒘𝒏 𝒇𝒐𝒙 𝒋𝒖𝒎𝒑𝒔 𝒐𝒗𝒆𝒓 𝒕𝒉𝒆 𝒍𝒂𝒛𝒚 𝒅𝒐𝒈"

unstylize("𝑻𝒉𝒆 𝒒𝒖𝒊𝒄𝒌 𝒃𝒓𝒐𝒘𝒏 𝒇𝒐𝒙 𝒋𝒖𝒎𝒑𝒔 𝒐𝒗𝒆𝒓 𝒕𝒉𝒆 𝒍𝒂𝒛𝒚 𝒅𝒐𝒈"); 
// Transforms back to "The quick brown fox jumps over the lazy dog"

unstylize("𝑻𝒉𝒆 𝒒𝒖𝒊𝒄𝒌 𝒃𝒓𝒐𝒘𝒏 𝒇𝒐𝒙 𝒋𝒖𝒎𝒑𝒔 𝒐𝒗𝒆𝒓 𝒕𝒉𝒆 𝒍𝒂𝒛𝒚 𝒅𝒐𝒈", Style.Bold); 
// Transforms back (removes only the bold style) to "𝑇ℎ𝑒 𝑞𝑢𝑖𝑐𝑘 𝑏𝑟𝑜𝑤𝑛 𝑓𝑜𝑥 𝑗𝑢𝑚𝑝𝑠 𝑜𝑣𝑒𝑟 𝑡ℎ𝑒 𝑙𝑎𝑧𝑦 𝑑𝑜𝑔"
```

all Available styles:

> see /src/type.ts

``` 
Bold,
Italic,
SansSerif,
Script,
Gothic,
MonoSpace,
DoubleStruck,
```

It should also work with diactrics (aka accents): `àéçùèñ`