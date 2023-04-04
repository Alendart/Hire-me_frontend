import React,{useEffect,useState} from "react";

import "./JobDescription.css"

interface Props {
    description: string
}

export const JobDescription = (props: Props) => {
    //Przetwarzanie /n na znaki <br/>
    const [text,setText] = useState<string[]>([]);

    useEffect(() => {
        const splittedText = props.description.split('\n')
        setText(splittedText)
    },[])
    return (
        <div className="job job-description" id="desc">
            {
                text.map((e,i) => {
                    if (e) {
                        return <p key={i}>{e}</p>
                    }
                })
            }
        </div>
    )
}