interface ParseData {
    title: string;
    data: Object;
    structureData: Object;
}

class ParseData {
    constructor(
        wikiContent: string
    ) {
        this.title = '';
        this.data = {}; // load from database. this includes document datas ex) contributors, last modified date, ...
        this.structureData = {
            section: {
                title: '',
                relativeLevel: -1,
                absoluteLevel: -1,
                subSections: [],
            }
        };
    }
}

module.exports = ParseData;
export {};