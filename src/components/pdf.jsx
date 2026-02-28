import { useState } from 'react';
import '../pdf.css';

export default function PDFView(props){
    const[show, setShow] = useState(false);

    return <>
        <button className="absoluteButton" onClick={() => setShow(!show)}>View PDF</button>
        {show && <><div className="preview">
               <h1>{props.info.firstName} {props.info.lastName}</h1>
               <h3>Contact Info</h3>
               <div className="contactInfo">
                <p>Phone: {props.info.phone}</p>
                <p>Email: {props.info.email}</p>
               </div>
               <h2>Personal Profile</h2>
               <p>{props.info.summary}</p>
               <h2>Education</h2>
               {props.education.map((e) => {
                return <div className="education">
                    <div>
                        <h4>Graduation Date:</h4>
                        <p>{e.graduationDate}</p>
                    </div>
                    <div>
                        <h4>{e.degree}</h4>
                    </div>
                    <div>
                        <h4>{e.college}</h4>
                    </div>
                </div>
               })}
               <h2>Experience</h2>
               {props.experience.map((e) => {
                return <div className="experience">
                    <h4>{e.jobTitle}</h4>
                    <p>{e.employer}</p>
                    <label>Start Date</label>
                    <p>{e.startDate}</p>
                    <label>End Date</label>
                    <p>{e.endDate}</p>
                    <p>{e.description}</p>
                </div>
               })}
        </div>
        <button className="absoluteButton" type="button" onClick={() => props.printFunction(document.querySelector(".preview"))}>print</button>
        </>}
    </>
}