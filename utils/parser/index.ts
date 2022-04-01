const Heading = require('./syntax/heading');
const bold = require('./syntax/bold');
const italic = require('./syntax/italic');
const del = require('./syntax/del');
const underline = require('./syntax/underline');

const parseData = require('./ParseData');

const makeObject = async(text: string) => {
    const result: Array<Object> = [];
    const line = text.trim().replace(/\r\n|\r/ug, '\n');
    line.split(/\n/).map((content) => {
        result.push([{
            isText: true,
            tag: ['p'],
            content: content
        }])
    })
    return result;
}

const a = async(tex: string) => {
    const ParseData = new parseData({});
    let int = await makeObject(tex);
    int = await Heading(int, ParseData);
    int = await bold(int, ParseData);
    int = await del(int, ParseData);
    // console.log(`bld: ${int}`)
    int = await italic(int, ParseData);
    int = await underline(int, ParseData);

    console.log(int)
    return int;
}

export default a;