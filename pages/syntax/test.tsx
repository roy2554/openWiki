import type { NextPage } from 'next'

import { useState, useEffect } from 'react'
import axios from 'axios'

import { useTheme } from 'next-themes'

import parser from '../../utils/parser/index';

import REnderer from '../../components/render/namumark';
// import ToolTip from '../components/tools/tooltip'



const SyntaxTest: NextPage = () => {
    const [text, setText] = useState('');
    const [res, setRes] = useState<any>([]);

    const textEvent = async(e: any) => {
        const text$ = e.target.value;
        setText(text$);
        const result = await convert2(text$);
        setRes(result);
    }

    const convert2 = async(str: string) => {
        const result = await parser(str);
        return result;
    }
    return (
        // <div className="flex flex-col space-y-4 mx-4 xl:mx-64">
        //     <textarea className="w-full h-64 p-4 rounded-md bg-[#3d3d3d]" value={text} onChange={textEvent} />
        //     <div className="w-full p-4 rounded-md bg-[#3d3d3d]">
        //         {JSON.stringify(res)}   
        //     </div>
        //     <div className="w-full p-4 rounded-md bg-[#3d3d3d]">
        //         <REnderer wikiContent={res} />
        //     </div>
        // </div>
        <div>
            <textarea className="" value={text} onChange={textEvent} />
            <div>
                <REnderer wikiContent={res} />
            </div>
            <h1>a</h1>
        </div>
    )
}

export default SyntaxTest;
