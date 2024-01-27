"use client";

import { cloneElement, isValidElement, useRef, useState } from "react";
import ReactGridLayout from "react-grid-layout";

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
                    {data}
                </div>)
                }
            </ReactGridLayout>
        </div>
    );
}

export default Drop;
