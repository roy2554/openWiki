
//                   Regex      Meaning
//                   ^char      start with specific character.
//                   char{1,6}  find char*(1 to 6)

const headingRegex = /^(={1,6})(.+?)(={1,6})$/;

const tree = (absoluteLevel: any, title: any, ParseData: any, relativeLevel = 0): string => {
    const last = ParseData.subSections[ParseData.subSections.length-1];
    if (!last || last.absoluteLevel === absoluteLevel) {
        ParseData.subSections.push({
            title: title,
            relativeLevel: relativeLevel,
            absoluteLevel: absoluteLevel,
            subSections: []
        });
        return `${ParseData.subSections.length}`;
    }
    return `${ParseData.subSections.length}.${tree(absoluteLevel, title, last, relativeLevel + 1)}`;
}

// data in Array<Object>
module.exports = async(wikiContent: any, ParseData: any) => {
    // const wikiContentLine = wikiContent.split(/\n/);
    const newLines = wikiContent.map((e: any) => {
        const ln = e.map((line: any) => {
            const match = headingRegex.exec(line.content);
            if (match) {
                if (match[1] === match[3]) {
                    const level = match[1].length;
                    const content = (match[2] || '').trim();
                    const headingNumber = tree(level, content, ParseData.structureData.section);
                    
                    line.isText = false
                    if (!line.tag) {line.tag = []}
                    line.tag.push(`h${level}`)
                    line.headingNumber = headingNumber
                    line.content = content

                    return line;
                }
            }
        })
        return e;
    })
    return newLines;
}

export {};