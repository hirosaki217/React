import { useEffect, useState } from "react"



function Content(){
    const [title, setTitle] = useState('')
    useEffect(()=>{
    })
    return(
        <div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)} 
            ></input>
        </div>
    )
}

export default Content