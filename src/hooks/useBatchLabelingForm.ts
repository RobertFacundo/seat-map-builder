import { useState } from "react";

export const useBatchLabelingForm = ()=>{
    const [baseLabel, setBaseLabel] = useState<string>('');
    const [batchStart, setBatchStart] = useState<number>(1);
    const [color, setColor] = useState<string>('#4A90E2')

    const handleSubmit =(e:React.FormEvent, callback: (bl:string, bs: number, c:string)=> void)=>{
        e.preventDefault();
        callback(baseLabel, batchStart, color);
    };

    return {
        baseLabel,
        setBaseLabel,
        batchStart,
        setBatchStart,
        color,
        setColor,
        handleSubmit
    };
};