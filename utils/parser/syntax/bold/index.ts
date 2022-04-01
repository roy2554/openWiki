const boldRegex = /('{3})(.+?)('{3})/g;

module.exports = async(wikiContent: any, ParseData: any) => {
    // const wikiContentLine = wikiContent.split(/\n/);
    const newLines = wikiContent.map((e: any) => {
        const ln = e.map((line: any) => {
            const match = line.content.match(boldRegex);
            if (match) {
                let result: any = [];
                const arr = line.content.split(boldRegex);
                let isBold = false;
                arr.map((cont: any) => {
                    if (cont === "'''") {
                        isBold = !isBold;
                    } else if (isBold) {
                        result.push({
                            isText: false,
                            content: cont,
                            tag: ['b']
                        })
                    } else {
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