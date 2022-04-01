const literalRegex = /^(\{\{\{\[\[)(.+?)(\]\]\}\}\})$/;

module.exports = async (wikiContent: any, ParseData: any) => {
  // const wikiContentLine = wikiContent.split(/\n/);
  const newLines = wikiContent.map((e: any) => {
    e.map((line: any) => {
      const match = literalRegex.exec(line.content);
      if (match) {
        const content = (match[2] || "").trim();
        line.isText = false
        if (!line.tag) {line.tag = []}
        line.tag.push('p')
        line.content = content
        return line;
      }
    })
    return e;
  });
  return newLines;
};

export {};