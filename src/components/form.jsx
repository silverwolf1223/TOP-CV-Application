import {useState} from "react";
import "../form.css";
import Education from "./education.jsx";
import Experience from "./experience.jsx";
import PDFView from './pdf.jsx';

function Form(){
    const [formState, setFormState] = useState({
        generalInfo: {
            firstName:"",
            lastName: "",
            email: "",
            phone: "",
            summary: ""
        },
        education: [{
            degree: "",
            college: "",
            graduationDate: "",
            id: 3
        }],
        experience: [{
            jobTitle: "",
            employer: "",
            startDate: "",
            endDate: "",
            description: "",
            id: 3
        }]
    })

    function addEducation(){
        const newEducation = {
            degree: "",
            college: "",
            graduationDate: "",
            id: crypto.randomUUID()
        }
        const newState = {
            generalInfo: formState.generalInfo,
            education: [...formState.education, newEducation],
            experience: formState.experience
        }
        setFormState(newState);
    }

    function addExperience(){
        const newExperience = {
            jobTitle: "",
            employer: "",
            startDate: "",
            endDate: "",
            description: "",
            id: crypto.randomUUID()
        }
        const newState = {
            generalInfo: formState.generalInfo,
            education: formState.education,
            experience: [...formState.experience, newExperience]
        }
        setFormState(newState);
    }

    function deleteEducation(index){
        let educations = formState.education;
        educations.splice(index, 1);
        const newState = {
            generalInfo: formState.generalInfo,
            education: educations,
            experience: formState.experience
        }
        setFormState(newState);
    }

    function deleteExperience(index){
        let experiences = formState.experience;
        experiences.splice(index, 1);
        const newState = {
            generalInfo: formState.generalInfo,
            education: formState.education,
            experience: experiences
        }
        setFormState(newState);
    }

    function handleInfo(e){
        const { name, value } = e.target;
        setFormState({
            generalInfo: {
                ...formState.generalInfo,
                [name]: value,
            },
            education: formState.education,
            experience: formState.experience
        })
    }

    function handleEducation(e){
        const { name, value, } = e.target;
        const index = e.target.dataset.index;
        let newEducation = formState.education;
        newEducation[index] = {...newEducation[index],
            [name]: value,
        }
        setFormState({
            generalInfo: formState.generalInfo,
            education: newEducation,
            experience: formState.experience
        })
    }

    function handleExperience(e){
        const { name, value, } = e.target;
        const index = e.target.dataset.index;
        let newExperience = formState.experience;
        newExperience[index] = {...newExperience[index],
            [name]: value,
        }
        setFormState({
            generalInfo: formState.generalInfo,
            education: formState.education,
            experience: newExperience
        })
    }

    return <>
    <form>
        <fieldset>Contact Information
            <div className="contactInfo">

                    <p className="label">First Name: </p>
                    <input name="firstName" onChange={handleInfo} value={formState.generalInfo.firstName}></input>

                    <p className="label">Last Name: </p>
                    <input name="lastName" onChange={handleInfo} value={formState.generalInfo.lastName}></input>

            </div>
            <div className="contactInfo">

                    <p className="label">Email: </p>
                    <input name="email" type="email" onChange={handleInfo} value={formState.generalInfo.email}></input>

                    <p className="label">Phone: </p>
                    <input name="phone" onChange={handleInfo} value={formState.generalInfo.phone}></input>

                
            </div>
            <div className="contactInfo">
                <p className="taLabel">Short Summary: </p>
                <textarea name="summary" onChange={handleInfo} value={formState.generalInfo.summary}></textarea>
            </div>
        </fieldset>
        <fieldset>
            Education
            <button type="button" onClick={addEducation}>Add Education</button>
            {formState.education.map((elem, i) => <Education index={i} elem={elem} handleEducation={handleEducation} deleteEducation={deleteEducation} className="education"/>)}
        </fieldset>
        <fieldset>
            Work Experience
            <button type="button" onClick={addExperience}>Add Experience</button>
            {formState.experience.map((elem, i) => <Experience index={i} elem={elem} handleExperience={handleExperience} deleteExperience={deleteExperience} className="experience"/>)}
        </fieldset>
        <PDFView info={formState.generalInfo} education={formState.education} experience={formState.experience}/>
    </form>
</>
}

export default Form;