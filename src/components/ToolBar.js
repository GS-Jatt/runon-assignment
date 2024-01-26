'use client'

import Image from "next/image";
import { cloneElement, useRef } from "react";

function Toolbar({ ele }) {
    const text = <textarea defaultValue={'Text'} className=" text-center font-bold bg-transparent z-10 relative" />;

    const image = <Image src={'/cabin-008.jpg'} alt="image" width={500} height={300} style={{zIndex:'0',position:'relative'}} />;

    return (
        <div className=" w-80 border-2 flex flex-col items-center pt-20 gap-10 ">
            <div className="flex gap-4 items-center justify-center w-40 bg-gray-400 h-11  rounded-lg "
                draggable onDrag={(e) => {
                    e.preventDefault()
                    ele.current = cloneElement(text);
                    // e.dataTransfer.setData('text', e.target.id)
                }} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                </svg>

                <span className=" text-xl text-center font-bold">Text</span>
            </div>
            <div className="flex gap-4 items-center justify-center w-40 bg-gray-400 h-11  rounded-lg " draggable onDrag={(e) => {
                e.preventDefault()
                ele.current = cloneElement(image);
                // e.dataTransfer.setData('text', e.target.id)
            }} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>

                <span className=" text-xl text-center  font-bold">Image</span>
            </div>
        </div >
    );
}

export default Toolbar;
