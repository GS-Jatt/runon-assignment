/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { cloneElement, isValidElement, useEffect, useRef, useState } from "react";
import ReactGridLayout from "react-grid-layout";


function Iimage({id}) {
    const [src, setSrc] = useState('/cabin-008.jpg')
   
    const uploader = (file) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            localStorage.setItem('id', reader.result)
            setSrc(localStorage.getItem('id'));
        })
        reader.readAsDataURL(file);
    }
    return (
        <div className=" relative">
            <input type="file" accept="image/*" className=" float-end  w-64 pl-1 -mr-36 pl-36 rotate-90" onChange={(e) => {
                e.preventDefault();
                uploader(e.target.files[0])
                // localStorage.setItem(id, e.target.files[0]);
                // setSrc(localStorage.getItem(id));
                // console.log(e.target.files[0])
            }}
            />
            <img src={src} alt="image" className=" w-60 h-40" style={{ zIndex: '0', position: 'relative' }} />
        </div>
    )
};

function Drop({ ele, dragRef }) {
    const [ref, setRef] = useState([]);

    

    return (
        <div
            className="border-2 flex-1 overflow-scroll relative "
            onDrop={(e) => {
                e.preventDefault();
                // console.log(ele.current);
                if (dragRef.current){                
                    // const no = document.importNode(ele.current, true);
                    setRef((re) => [...re, ele.current]);
                    dragRef.current =false;
                // e.target.appendChild(element);
                 }
            }}
            onDragOver={(e) => e.preventDefault()}>
            <button
                className=" float-right p-2 bg-blue-600 rounded-3xl px-8 mr-6 text-white font-bold sticky z-40"
                onClick={() => console.log("website is saved succesfully")}>
                Save
            </button>
            <ReactGridLayout
                width={900}
                className="layout h-full"
                // isResizable ={true}
                // isBounded= {true}
                cols={5}
                maxRows={200}
                rowHeight={200}
                
                
            >
                {
                ref.map((data, index) =><div key={index}>
                    {data === 'Iimage'?<Iimage id={index}/>:data }
                </div>)
                }
            </ReactGridLayout>
        </div>
    );
}

export default Drop;
