import { useState } from "react";

export const useBatchLabelingForm = ()=>{
    const [baseLabel, setBaseLabel] = useState<string>('');
    const [batchStart, setBatchStart] = useState<number>(1);

    const handleSubmit =(e:React.FormEvent, callback: (bl:string, bs: number)=> void)=>{
        e.preventDefault();
        callback(baseLabel, batchStart);
    };

    return {
        baseLabel,
        setBaseLabel,
        batchStart,
        setBatchStart,
        handleSubmit
    };
};