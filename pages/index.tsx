import type { NextPage } from 'next'

import { useState, useEffect } from 'react'
import axios from 'axios'

import { useTheme } from 'next-themes'

// import ToolTip from '../components/tools/tooltip'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-4 mx-4 xl:mx-64">
      <a>openWiki</a>
    </div>
  )
}

export default Home
