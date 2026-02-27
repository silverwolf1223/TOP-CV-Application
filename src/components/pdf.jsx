import { useState } from 'react'

export default function PDFView(props){
    const[show, setShow] = useState(false);

    return <>
        <button onClick={() => setShow(!show)}>View PDF</button>
        {show && <div>
               
        </div>}
    </>
}