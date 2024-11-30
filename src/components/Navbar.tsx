"use client"

import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
    const { changeTheme } = useContext(ThemeContext);
    return (
        <div>
            <ul className="flex justify-between pt-5 items-center">
                <div>
                    <Link href="/">
                        <li className="text-4xl font-bold text-white hover:text-gray-300 transition duration-500">Forms AI</li>
                    </Link>
                </div>
                <div className="flex gap-5">
                    <button onClick={() => { changeTheme("light") }} className="btn bg-blue-300 hover:bg-white text-black transition duration-500">
                        <Sun size={20} />
                    </button>
                    <button onClick={() => { changeTheme("dark") }} className="btn bg-blue-900 text-white hover:bg-gray-900 transition duration-500">
                        <Moon size={20} />
                    </button>
                </div>
            </ul >
        </div >
    )
}

export default Navbar;