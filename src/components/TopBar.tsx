import React from "react";
import {User, BellRing} from 'lucide-react'


export const TopBar: React.FC = () => {
    return (
        <nav className="bg-white dark:bg-gray-900 w-full z-10 top-0
        border-b border-gray-200 dark:border-gray-600 drop-shadow-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-end p-4">
                <div className="relative ms-2 group">
                    <button
                        className="flex items-center px-6 pb-2 pt-2.5 text-black/60 transition duration-200 hover:text-black/80 focus:text-black/80 active:text-black/80 dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                        id="dropdownMenuButton2"
                        aria-expanded="false"
                    >
                        <BellRing/>
                    </button>
                    <ul
                        className="absolute z-[1000] hidden float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-surface-dark group-focus:block group-hover:block"
                        aria-labelledby="dropdownMenuButton1"
                    >
                        <li>
                        <a
                            className="block w-full whitespace-nowrap px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                            href="#"
                        >
                            Notify message
                        </a>
                        </li>
                    </ul>
                </div>
                <div className="relative ms-2 group">
                    <button
                        className="flex items-center px-6 pb-2 pt-2.5 text-black/60 transition duration-200 hover:text-black/80 focus:text-black/80 active:text-black/80 dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                        id="dropdownMenuButton4"
                        aria-expanded="false"
                    >
                        <User/>
                        <span className="ms-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 transform transition-transform group-hover:rotate-180 group-focus:rotate-180"
                            >
                                <path
                                fill-rule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </button>
                    <ul
                        className="absolute z-[1000] hidden float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-surface-dark group-focus:block group-hover:block"
                        aria-labelledby="dropdownMenuButton3"
                    >
                        <li>
                        <a
                            className="block w-full whitespace-nowrap px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                            href="#"
                        >
                            Logout
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}