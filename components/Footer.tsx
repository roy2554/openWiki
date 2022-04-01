import type { NextComponentType } from 'next'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Link from 'next/link'
import { useRouter } from 'next/router'

const Footer: NextComponentType = () => {
    const router = useRouter()

  return (
    <div className="z-50 bg-white dark:bg-[#212121] w-full p-3 px-14 xl:px-64">
        <a>openWiki</a><br />
        <a>(C){new Date().getFullYear()} provided by team.pilewort with @wikiEngine</a>
    </div>
  )
}

export default Footer
