import type { NextPage } from 'next'
import React from 'react';

import { useState, useEffect } from 'react'
import axios from 'axios'

import { useTheme } from 'next-themes'

import parser from '../../utils/parser/index';

// import ToolTip from '../components/tools/tooltip'

interface props {
    wikiContent: [Object[]]
}

const RenderNamuMark: NextPage<props> = ({wikiContent}) => {
    console.log(`ss: ${JSON.stringify(wikiContent)}`)

    const [content, setContent] = useState([]);

    useEffect(() => {
        if (wikiContent) {
            setContent(wikiContent);
        }
    }, [wikiContent])

    // if (content !== []) {console.log(`wikiContent: ${content.map((line: any) => {return line})}`);}
    
    const createElement = (item: any): any => {
        if (item !== undefined) {
            console.log(`REC: ${JSON.stringify(item)}`)
            let itemC = JSON.parse(JSON.stringify(item))
            if (itemC.tag.length > 1) {
                return React.createElement(itemC.tag.shift(), null, createElement(itemC));
            } else if (!itemC.tag) {
                itemC.tag = ['p'];
            }
            console.log(`FUCK ${JSON.stringify(item)}`)
            console.log(`FUCK2 ${JSON.stringify(itemC)}`)
            // return React.createElement("a", null, item.content);
            const sh = itemC.tag.shift()
            console.log(`SH: ${sh} ${typeof(sh)}`)
            const tt = "del"
            return React.createElement(sh ? sh : 'null', null, itemC.content);
            // return React.createElement("a", null, React.createElement("h1", null, "hio"));
        }
        return React.createElement("p", null, "fuck");
    }

    const a = () => {
        return wikiContent.map((line: any, index: number) => {
            console.log(`a: ${JSON.stringify(line)}`)
            const b = line.map((item: any, index: number) => {
                console.log(`b: ${JSON.stringify(item)}`)
                // console.log(`FIN: ${JSON.stringify(createElement(item))}`)
                return createElement(item);
                // return React.createElement("a", null, "a");
            }) 
            return b;
        })
    }
    return (
        a()
    )
}

export default RenderNamuMark;
