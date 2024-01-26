'use client'
import Drop from "@/components/drop";
import ToolBar from "@/components/ToolBar";
import { useRef } from "react";

function Draganddrop() {
    const ref = useRef();
    return (
        <div className="flex min-h-screen max-h-screen  overflow-hidden">
            <ToolBar ele={ref} />

            <Drop ele={ref} />
        </div>
    );
}

export default Draganddrop
