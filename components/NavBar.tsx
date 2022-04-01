import type { NextComponentType } from 'next'
import { useTheme } from 'next-themes'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'

import Link from 'next/link'
import { useRouter } from 'next/router'

const NavBar: NextComponentType = () => {
    const router = useRouter()

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    interface User {
        apiKey: string,
        avatar: string,
        badges: [],
        createdAt: string,
        email: string,
        permission: number,
        preference: {},
        updatedAt: string,
        userId: number,
        username: string,
        __v: number,
        _id: string
    }
    const initialStateUser: User = {
        apiKey: '',
        avatar: '',
        badges: [],
        createdAt: '',
        email: '',
        permission: 0,
        preference: {},
        updatedAt: '',
        userId: 0,
        username: '',
        __v: 0,
        _id: ''
    }

    const [user, setUser] = useState(initialStateUser)

    const [dropDown, setDropDown] = useState(false)

    const logOut = () => {
        router.push('/v2/auth/logout')
    }

    const toSettings = () => {
        router.push('/user/settings')
        setDropDown(false)
    }

    const toAddSchool = () => {
        router.push('/school/add')
        setDropDown(false)
    }

    const toCheckJoinedSchool = () => {
        router.push('/user/joined')
        setDropDown(false)
    }

    useEffect(() => {
        const asyncFunc = async () => {
            const { data } = await axios.get('/v2/auth/user')
            if (data[0]) {
                setIsLoggedIn(true)
                setUser(data[1])
            }
        }
        asyncFunc()
    },[])

    const dropDownRef = useRef<any>(null)

    useEffect(() => {
        // only add the event listener when the dropdown is opened
        if (!dropDown) return;
        function handleClick(event: any) {
          if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
            setDropDown(false);
          }
        }
        window.addEventListener("click", handleClick);
        // clean up
        return () => window.removeEventListener("click", handleClick);
      }, [dropDown]);

  return (
    <div className="z-50 bg-white dark:bg-[#212121]/30 shadow fixed top-4 right-4 left-4 rounded-md backdrop-filter backdrop-blur-lg">
        <nav>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out cursor-pointer" onClick={() => {alert("BTNCLICED")}}><a>sd</a></button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href='/'>
                                <a>
                                    <a className="text-black dark:text-white block lg:hidden h-8 w-auto">openWiki</a>
                                    <a className="text-black dark:text-white hidden lg:block h-8 w-auto">openWiki</a>
                                </a>
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex">
                            <a className="false inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out false" href="#">menu1</a>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="ml-3 relative flex items-center">
                            <div className={isLoggedIn ? 'hidden' : 'flex-shrink-0'}>
                                <a className="relative inline-flex items-center px-3 md:px-8 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-400 active:bg-blue-700 transition ease-in-out duration-150 cursor-pointer" onClick={() => {router.push('/auth')}}>
                                    <span>auth</span>
                                </a>
                            </div>
                            <div className={isLoggedIn ? 'flex-shrink-0' : 'hidden'}>
                                <a className="relative inline-flex items-center px-3 md:px-3 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-400 active:bg-blue-700 transition ease-in-out duration-150 cursor-pointer" onClick={() => {setDropDown(!dropDown)}}>
                                    <span>user</span>    
                                </a>
                                <div ref={dropDownRef} className={dropDown ? 'z-50 absolute dark:border-[#aaaaaa] border float-right rounded-md mt-5 p-5 bg-white dark:bg-[#3d3d3d] text-black dark:text-white min-w-auto md:min-w-[20em] right-0 left-auto truncate' : 'hidden'}>
                                    <ul>
                                        <li><strong>{user.username}</strong></li>
                                        <li>{user.permission < 600 ? 'user' : 'admin'}</li>
                                        <li className="block h-0 border-t border-[#aaaaaa] my-1" />
                                        {
                                            user.permission >= 600 ? <>
                                                <li className="hover:bg-[#212121] cursor-pointer p-1 rounded-md" onClick={() => {router.push('/admin/panel'); setDropDown(false)}}>관리 패널</li>
                                                <div className="block h-0 border-t border-[#aaaaaa] my-1" />
                                            </> : <></>
                                        }
                                        <li className="hover:bg-[#212121] cursor-pointer p-1 rounded-md" onClick={toCheckJoinedSchool}>가입한 학교</li>
                                        <li className="hover:bg-[#212121] cursor-pointer p-1 rounded-md" onClick={toAddSchool}>새로운 학교 등록하기</li>
                                        <li className="block h-0 border-t border-[#aaaaaa] my-1" />
                                        <li className="hover:bg-[#212121] cursor-pointer p-1 rounded-md" onClick={toSettings}>설정</li>
                                        <li className="block h-0 border-t border-[#aaaaaa] my-1" />
                                        <li className="hover:bg-[#550000] cursor-pointer p-1 rounded-md" onClick={logOut}>로그아웃</li>
                                    </ul>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
