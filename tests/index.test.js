const { Style, stylize, unstylize } = require("../lib");

describe('UnicodeStyleTransform', () => {
    const testSentence = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG The quick brown fox jumps over the lazy dog 1234567890"

    it('stylize', () => {
        expect(stylize(testSentence, Style.Bold)).toBe('𝐓𝐇𝐄 𝐐𝐔𝐈𝐂𝐊 𝐁𝐑𝐎𝐖𝐍 𝐅𝐎𝐗 𝐉𝐔𝐌𝐏𝐒 𝐎𝐕𝐄𝐑 𝐓𝐇𝐄 𝐋𝐀𝐙𝐘 𝐃𝐎𝐆 𝐓𝐡𝐞 𝐪𝐮𝐢𝐜𝐤 𝐛𝐫𝐨𝐰𝐧 𝐟𝐨𝐱 𝐣𝐮𝐦𝐩𝐬 𝐨𝐯𝐞𝐫 𝐭𝐡𝐞 𝐥𝐚𝐳𝐲 𝐝𝐨𝐠 𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗𝟎')
        expect(stylize(testSentence, Style.Italic)).toBe('𝑇𝐻𝐸 𝑄𝑈𝐼𝐶𝐾 𝐵𝑅𝑂𝑊𝑁 𝐹𝑂𝑋 𝐽𝑈𝑀𝑃𝑆 𝑂𝑉𝐸𝑅 𝑇𝐻𝐸 𝐿𝐴𝑍𝑌 𝐷𝑂𝐺 𝑇ℎ𝑒 𝑞𝑢𝑖𝑐𝑘 𝑏𝑟𝑜𝑤𝑛 𝑓𝑜𝑥 𝑗𝑢𝑚𝑝𝑠 𝑜𝑣𝑒𝑟 𝑡ℎ𝑒 𝑙𝑎𝑧𝑦 𝑑𝑜𝑔 1234567890')
        expect(stylize(testSentence, Style.Bold | Style.Italic)).toBe('𝑻𝑯𝑬 𝑸𝑼𝑰𝑪𝑲 𝑩𝑹𝑶𝑾𝑵 𝑭𝑶𝑿 𝑱𝑼𝑴𝑷𝑺 𝑶𝑽𝑬𝑹 𝑻𝑯𝑬 𝑳𝑨𝒁𝒀 𝑫𝑶𝑮 𝑻𝒉𝒆 𝒒𝒖𝒊𝒄𝒌 𝒃𝒓𝒐𝒘𝒏 𝒇𝒐𝒙 𝒋𝒖𝒎𝒑𝒔 𝒐𝒗𝒆𝒓 𝒕𝒉𝒆 𝒍𝒂𝒛𝒚 𝒅𝒐𝒈 1234567890')
        expect(stylize(testSentence, Style.SansSerif)).toBe('𝖳𝖧𝖤 𝖰𝖴𝖨𝖢𝖪 𝖡𝖱𝖮𝖶𝖭 𝖥𝖮𝖷 𝖩𝖴𝖬𝖯𝖲 𝖮𝖵𝖤𝖱 𝖳𝖧𝖤 𝖫𝖠𝖹𝖸 𝖣𝖮𝖦 𝖳𝗁𝖾 𝗊𝗎𝗂𝖼𝗄 𝖻𝗋𝗈𝗐𝗇 𝖿𝗈𝗑 𝗃𝗎𝗆𝗉𝗌 𝗈𝗏𝖾𝗋 𝗍𝗁𝖾 𝗅𝖺𝗓𝗒 𝖽𝗈𝗀 𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫𝟢')
        expect(stylize(testSentence, Style.SansSerif | Style.Bold)).toBe('𝗧𝗛𝗘 𝗤𝗨𝗜𝗖𝗞 𝗕𝗥𝗢𝗪𝗡 𝗙𝗢𝗫 𝗝𝗨𝗠𝗣𝗦 𝗢𝗩𝗘𝗥 𝗧𝗛𝗘 𝗟𝗔𝗭𝗬 𝗗𝗢𝗚 𝗧𝗵𝗲 𝗾𝘂𝗶𝗰𝗸 𝗯𝗿𝗼𝘄𝗻 𝗳𝗼𝘅 𝗷𝘂𝗺𝗽𝘀 𝗼𝘃𝗲𝗿 𝘁𝗵𝗲 𝗹𝗮𝘇𝘆 𝗱𝗼𝗴 𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵𝟬')
        expect(stylize(testSentence, Style.SansSerif | Style.Italic)).toBe('𝘛𝘏𝘌 𝘘𝘜𝘐𝘊𝘒 𝘉𝘙𝘖𝘞𝘕 𝘍𝘖𝘟 𝘑𝘜𝘔𝘗𝘚 𝘖𝘝𝘌𝘙 𝘛𝘏𝘌 𝘓𝘈𝘡𝘠 𝘋𝘖𝘎 𝘛𝘩𝘦 𝘲𝘶𝘪𝘤𝘬 𝘣𝘳𝘰𝘸𝘯 𝘧𝘰𝘹 𝘫𝘶𝘮𝘱𝘴 𝘰𝘷𝘦𝘳 𝘵𝘩𝘦 𝘭𝘢𝘻𝘺 𝘥𝘰𝘨 1234567890')
        expect(stylize(testSentence, Style.SansSerif | Style.Bold | Style.Italic)).toBe('𝙏𝙃𝙀 𝙌𝙐𝙄𝘾𝙆 𝘽𝙍𝙊𝙒𝙉 𝙁𝙊𝙓 𝙅𝙐𝙈𝙋𝙎 𝙊𝙑𝙀𝙍 𝙏𝙃𝙀 𝙇𝘼𝙕𝙔 𝘿𝙊𝙂 𝙏𝙝𝙚 𝙦𝙪𝙞𝙘𝙠 𝙗𝙧𝙤𝙬𝙣 𝙛𝙤𝙭 𝙟𝙪𝙢𝙥𝙨 𝙤𝙫𝙚𝙧 𝙩𝙝𝙚 𝙡𝙖𝙯𝙮 𝙙𝙤𝙜 1234567890')
        expect(stylize(testSentence, Style.Script)).toBe('𝒯ℋℰ 𝒬𝒰ℐ𝒞𝒦 ℬℛ𝒪𝒲𝒩 ℱ𝒪𝒳 𝒥𝒰ℳ𝒫𝒮 𝒪𝒱ℰℛ 𝒯ℋℰ ℒ𝒜𝒵𝒴 𝒟𝒪𝒢 𝒯𝒽ℯ 𝓆𝓊𝒾𝒸𝓀 𝒷𝓇ℴ𝓌𝓃 𝒻ℴ𝓍 𝒿𝓊𝓂𝓅𝓈 ℴ𝓋ℯ𝓇 𝓉𝒽ℯ 𝓁𝒶𝓏𝓎 𝒹ℴℊ 1234567890')
        expect(stylize(testSentence, Style.Script | Style.Bold)).toBe('𝓣𝓗𝓔 𝓠𝓤𝓘𝓒𝓚 𝓑𝓡𝓞𝓦𝓝 𝓕𝓞𝓧 𝓙𝓤𝓜𝓟𝓢 𝓞𝓥𝓔𝓡 𝓣𝓗𝓔 𝓛𝓐𝓩𝓨 𝓓𝓞𝓖 𝓣𝓱𝓮 𝓺𝓾𝓲𝓬𝓴 𝓫𝓻𝓸𝔀𝓷 𝓯𝓸𝔁 𝓳𝓾𝓶𝓹𝓼 𝓸𝓿𝓮𝓻 𝓽𝓱𝓮 𝓵𝓪𝔃𝔂 𝓭𝓸𝓰 1234567890')
        expect(stylize(testSentence, Style.Gothic )).toBe('𝔗ℌ𝔈 𝔔𝔘ℑℭ𝔎 𝔅ℜ𝔒𝔚𝔑 𝔉𝔒𝔛 𝔍𝔘𝔐𝔓𝔖 𝔒𝔙𝔈ℜ 𝔗ℌ𝔈 𝔏𝔄ℨ𝔜 𝔇𝔒𝔊 𝔗𝔥𝔢 𝔮𝔲𝔦𝔠𝔨 𝔟𝔯𝔬𝔴𝔫 𝔣𝔬𝔵 𝔧𝔲𝔪𝔭𝔰 𝔬𝔳𝔢𝔯 𝔱𝔥𝔢 𝔩𝔞𝔷𝔶 𝔡𝔬𝔤 1234567890')
        expect(stylize(testSentence, Style.Gothic | Style.Bold)).toBe('𝕿𝕳𝕰 𝕼𝖀𝕴𝕮𝕶 𝕭𝕽𝕺𝖂𝕹 𝕱𝕺𝖃 𝕵𝖀𝕸𝕻𝕾 𝕺𝖁𝕰𝕽 𝕿𝕳𝕰 𝕷𝕬𝖅𝖄 𝕯𝕺𝕲 𝕿𝖍𝖊 𝖖𝖚𝖎𝖈𝖐 𝖇𝖗𝖔𝖜𝖓 𝖋𝖔𝖝 𝖏𝖚𝖒𝖕𝖘 𝖔𝖛𝖊𝖗 𝖙𝖍𝖊 𝖑𝖆𝖟𝖞 𝖉𝖔𝖌 1234567890')
        expect(stylize(testSentence, Style.MonoSpace)).toBe('𝚃𝙷𝙴 𝚀𝚄𝙸𝙲𝙺 𝙱𝚁𝙾𝚆𝙽 𝙵𝙾𝚇 𝙹𝚄𝙼𝙿𝚂 𝙾𝚅𝙴𝚁 𝚃𝙷𝙴 𝙻𝙰𝚉𝚈 𝙳𝙾𝙶 𝚃𝚑𝚎 𝚚𝚞𝚒𝚌𝚔 𝚋𝚛𝚘𝚠𝚗 𝚏𝚘𝚡 𝚓𝚞𝚖𝚙𝚜 𝚘𝚟𝚎𝚛 𝚝𝚑𝚎 𝚕𝚊𝚣𝚢 𝚍𝚘𝚐 𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿𝟶')
        expect(stylize(testSentence, Style.DoubleStruck)).toBe('𝕋ℍ𝔼 ℚ𝕌𝕀ℂ𝕂 𝔹ℝ𝕆𝕎ℕ 𝔽𝕆𝕏 𝕁𝕌𝕄ℙ𝕊 𝕆𝕍𝔼ℝ 𝕋ℍ𝔼 𝕃𝔸ℤ𝕐 𝔻𝕆𝔾 𝕋𝕙𝕖 𝕢𝕦𝕚𝕔𝕜 𝕓𝕣𝕠𝕨𝕟 𝕗𝕠𝕩 𝕛𝕦𝕞𝕡𝕤 𝕠𝕧𝕖𝕣 𝕥𝕙𝕖 𝕝𝕒𝕫𝕪 𝕕𝕠𝕘 𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡𝟘')
    })

    it('diactricts', () => {
        expect(stylize('àéùûîçñ', Style.Bold)).toBe('𝐚̀𝐞́𝐮̀𝐮̂𝐢̂𝐜̧𝐧̃'.normalize('NFD'));
        expect(unstylize('𝐚̀𝐞́𝐮̀𝐮̂𝐢̂𝐜̧𝐧̃')).toBe('àéùûîçñ'.normalize('NFD'));
    })

    it('Composition', () => {
        expect(stylize(stylize(testSentence, Style.Bold), Style.Italic)).toBe(stylize(testSentence, Style.Bold | Style.Italic));
        expect(unstylize(stylize(testSentence, Style.Bold | Style.Italic), Style.Bold)).toBe(stylize(testSentence, Style.Italic));
        expect(unstylize(stylize(testSentence, Style.Bold | Style.Italic))).toBe(testSentence);
    })
})