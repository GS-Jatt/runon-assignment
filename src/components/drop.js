'use client'

import { cloneElement, isValidElement, useRef, useState } from "react";
import Draggable from "react-draggable";

function Drop({ ele }) {
    const [ref, setRef] = useState([]);
    return (
        <div className="border-2 flex-1 overflow-scroll relative " onDrop={(e) => {
            e.preventDefault();
            if (!ele.current) return '';
            // const no = document.importNode(ele.current, true);
            setRef((re) => [...re, ele.current]);
            ele.current = null;
            // e.target.appendChild(element);
            // console.log(ele.current);
        }}
            onDragOver={(e) => e.preventDefault()}>
            <button className=" float-right p-2 bg-blue-600 rounded-3xl px-8 mr-6 text-white font-bold sticky z-40" onClick={() => console.log('website is saved succesfully')}>Save</button>
            {ref.map((data, index) => <Draggable key={index} scale={1} >
                <div key={index} >{data}</div>
                </Draggable>)}

        </div>
    )
}

export default Drop
