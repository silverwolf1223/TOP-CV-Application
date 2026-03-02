import { useState } from 'react';
import '../styles/pdf.css';
import html2pdf from 'html2pdf.js';

export default function PDFView(props){
    const[show, setShow] = useState(false);

    return <>
        {!show && <button className="PDFButton" type="button" onClick={() => setShow(!show)}>View PDF</button>}
        {show && <><div className="previewContainer"><div id="pdf" className="preview">
            <h1>{props.info.firstName} {props.info.lastName}</h1>
            <h3>Contact Info</h3>
            <div className="PDFcontactInfo">
                <p>Phone: {props.info.phone}</p>
                <p>Email: {props.info.email}</p>
            </div>
            <fieldset className="PDFline">
                <legend>Personal Profile</legend>
            </fieldset>
            <p className="summary">{props.info.summary}</p>
            <fieldset className="PDFline">
                <legend>Education</legend>
            </fieldset>
            {props.education.map((e) => {
            return <div className="PDFeducation">
                <div>
                    <h2>{e.degree}</h2>
                </div>
                <div>
                    <p>{e.college}</p>
                </div>
                <div>
                    <p>Graduation Date: {e.graduationDate}</p>
                </div>
            </div>
            })}
            <fieldset className="PDFline">
                <legend>Experience</legend>
            </fieldset>
            {props.experience.map((e) => {
            return <div className="PDFexperience">
                <h2>{e.jobTitle}</h2>
                <p>{e.employer}</p>
                <p>{e.startDate} - {e.endDate}</p>
                <p>{e.description}</p>
            </div>
            })}
        </div>
        </div>
        <div className="absoluteButton">
            <button className="pdfButton" type="button" onClick={() => setShow(!show)}>View PDF</button>
            <button className="pdfButton" type="button" onClick={() => html2pdf(document.querySelector("#pdf"))}>print</button>
        </div>
        </>}
    </>
}