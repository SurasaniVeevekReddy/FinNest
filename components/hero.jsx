"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {

    const imageRef = useRef()

    useEffect(()=>{
        const imageElement=imageRef.current;

        const handleScroll=()=>{
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;

            if(scrollPosition>scrollThreshold){
                imageElement.classList.add("scrolled");
            }
            else{
                imageElement.classList.remove("scrolled");
            }
        };
        window.addEventListener("scroll",handleScroll)
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, [])

  return (
    <div className="pb-20 px-4">
        <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[70px] pb-6 font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Manage Your Finances <br /> with Intelligence
        </h1>
        
        <p className="text-xl lg:text-[17.7px] text-gray-600 mb-8 max-w-2xl mx-auto">
            An AI-powered financial management platform that helps you track,analyze,and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4">
            <Link href="/dashboard">
             <Button size="lg" className="px-8">
                Get Started
             </Button>
            </Link>
            
            {/* changed */}
            <Link href="https://drive.google.com/drive/folders/1gbS4IUQWy88OEaiTxZc28oR6YyuigC9a?usp=drive_link">
             <Button size="lg" variant="outline" className="px-8">
                Watch Demo
             </Button>
            </Link>
        </div>
        <div className="hero-image-wrapper">
            <div ref={imageRef} className="hero-image">
                <Image src="/Banner.png" 
                width={900} 
                height={600} 
                alt="Dashboard Preview" 
                className="rounded-lg shadow-2xl border mx-auto" 
                priority
                /> 
            </div>
        </div>
        </div>
        </div>
  )
};

// this can contain frontend components like hooks
// these are of more dynamic pages
export default HeroSection;