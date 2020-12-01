import React from 'react'
import Sidebar from "./Sidebar"

const Column = ({contents}) => {
    return (
        <div key={contents.id} className="">
            {
    
            contents.map(content=>(
                <div key={content.title}>
                    {
                        content.title || content.description ?
                        <Sidebar contents={content} />
                        : null
                    }
                </div>
            ))}
            
       </div>
    )
}

export default Column;
