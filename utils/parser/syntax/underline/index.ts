const underlineRegex = /^(_{2})(.+?)(_{2})$/;

module.exports = async (wikiContent: any, ParseData: any) => {
  // const wikiContentLine = wikiContent.split(/\n/);
  const newLines = wikiContent.map((e: any) => {
    e.map((line: any) => {
      const match = underlineRegex.exec(line.content);
      if (match) {
        const content = (match[2] || "").trim();
        line.isText = false
        if (!line.tag) {line.tag = []}
        line.tag.push('u')
        line.content = content
        return line;
      }
    })
    return e;
  });
  return newLines;
};

export {};