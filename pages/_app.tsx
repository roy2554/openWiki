import { ThemeProvider } from 'next-themes'

import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { useEffect, useCallback } from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import axios from 'axios'

import { useTheme } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
    const { theme, setTheme } = useTheme()
    return <>
            {/* <ThemeProvider attribute="class"> */}
            <html className="dark">
                {/* <NavBar /> */}
                {/* <div className="bg-[#ffffff] dark:bg-[#212121] text-black dark:text-white h-screen pt-4">
                    <div className="pt-20 px-3 md:px-16 bg-[#ffffff] dark:bg-[#212121]">
                        <Component {...pageProps} />
                    </div>
                    <footer>
                        <Footer />
                    </footer>
                </div> */}
                <Component {...pageProps} />
            </html>
            {/* </ThemeProvider> */}
    </>
}

export default MyApp
