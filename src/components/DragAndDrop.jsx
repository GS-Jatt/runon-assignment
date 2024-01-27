"use client";
import Drop from "@/components/drop";
import ToolBar from "@/components/ToolBar";
import { useRef, useState } from "react";

function Draganddrop() {
    const dragRef = useRef(false);
    const ref = useRef();
    return (
        <div className="flex min-h-screen max-h-screen  overflow-hidden">
            <ToolBar ele={ref} dragRef={dragRef} />

            <Drop ele={ref} dragRef={dragRef} />
        </div>
    );
}

export default Draganddrop;
