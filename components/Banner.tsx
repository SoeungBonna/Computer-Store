"use client";
import React from "react";
import { Typewriter, useTypewriter } from 'react-simple-typewriter'


const Banner = () => {
    const [text] = useTypewriter({
        words: [
            "Your truseted Shoping Platform.",
            "Providing best user experience for customers.",
            "Delivery on time in demand.",
        ],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });


    return <div className="h-96 max-w-screen-2xl mx-auto flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-4xl uppercase font-bold ">
            Wecome to Computer Shop    
        </h1>
        <p className="text-base md:text-lg font-semibold mt-2">
            {text}
        </p>
    </div>
};
export default Banner;