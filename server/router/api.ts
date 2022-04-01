const express = require('express');
const router = express.Router();

const { glob } = require('glob');
const { promisify } = require('util');

const globPromise = promisify(glob);

const search = (async (path: string) => {
    const files = await globPromise(path);
    files.map((value: any) => {
        const file = require(value);
        const dir = value.split('/');
        const apiAddr = `${dir[dir.length - 2].split('.')[0]}/${dir[dir.length - 1].split('.')[0]}`;
        console.log(`[API LOADED] ${value} as /${apiAddr}`)
        router.use(`/${apiAddr}`, file);
    })
})
console.log(`search a file from ${process.cwd()}/Api/**/*.ts`)
search(`${process.cwd()}/server/Api/**/*.ts`);

module.exports = router;
export {};