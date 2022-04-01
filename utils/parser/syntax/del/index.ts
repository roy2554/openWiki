// const delRegex = /^((-|~){2})(.+?)((-|~){2})$/;

// module.exports = async(wikiContent: any, ParseData: any) => {
//     // const wikiContentLine = wikiContent.split(/\n/);
//     const newLines = wikiContent.map((e: any) => {
//         e.map((line: any) => {
//             const match = delRegex.exec(line.content);
//             if (match) {
//                 const content = (match[3] || '').trim()
//                 line.isText = false
//                 if (!line.tag) {line.tag = []}
//                 line.tag.push('del')
//                 line.content = content
//                 return line;
//             }
//         })
//         return e;
//     })
//     return newLines
// }

// export {};
const delRegex = /(~~|--)(.+?)(~~|--)/g;

module.exports = async(wikiContent: any, ParseData: any) => {
    // const wikiContentLine = wikiContent.split(/\n/);
    const newLines = wikiContent.map((e: any) => {
        const ln = e.map((line: any) => {
            const match = line.content.match(delRegex);
            if (match) {
                let result: any = [];
                const arr = line.content.split(delRegex);
                let isDel = false;
                arr.map((cont: any) => {
                    if (cont == "~~" || cont == "--") {
                        isDel = !isDel;
                    } else if (isDel) {
                        result.push({
                            isText: false,
                            content: cont,
                            tag: ['del']
                        })
                    } else if (cont !== "") {
                        result.push({
                            isText: false,
                            content: cont,
                            tag: ['a']
                        })
                    }
                })
                return result;
            } else {
                return e;
            }
        })
        return ln[0];
        
        
    })
    return newLines
}

export {};