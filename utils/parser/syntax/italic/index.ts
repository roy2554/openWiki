const italicRegex = /^('{2})(.+?)('{2})$/;

module.exports = async(wikiContent: any, ParseData: any) => {
    // const wikiContentLine = wikiContent.split(/\n/);
    const newLines = wikiContent.map((e: any) => {
        e.map((line: any) => {
            const match = italicRegex.exec(line.content);
            if (match) {
                const content = (match[2] || '').trim();
                line.isText = false
                if (!line.tag) {line.tag = []}
                line.tag.push('i')
                line.content = content
                return line;
            }
        })
        return e;
    })
    return newLines
}

export {};