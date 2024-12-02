import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";


const Navbar = () => {
    return <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-trabsparent">
        <div  className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
            <h1 className="text-2xl uppercase font-bold">Computer Shop</h1>
            <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-sm font-semibold">
                <li className="navbarLi">Home</li>
                <li className="navbarLi">Pages</li>
                <li className="navbarLi">Product</li>
                <li className="navbarLi">Shop</li>
            </ul>
            <div className="hidden lg:inline-flex gap-8 items-center">

               <CiSearch className="text-xl hover:text-fuchsia-800"/>
               <div  className="relative">
               <FaShoppingCart  className="text-xl"/>
               <span className="w-4 h-4 bg-fuchsia-600 text-white rounded-full absolute left-0 -bottom-2 text-xs flex items-center justify-centers">
                   0
                </span>
               </div>
                <button className="w-48 h-14 bg-white text-black uppercase text-sm font-semibold rounded-md hover:bg-red-600 hover:text-white duration-300">Get in Touch</button>
            </div>
            <div className="inline-flex lg:hidden">
               <IoMdMenu className="text-3xl" />
            </div>
        </div>
        
        
    </div>
}

export default Navbar;