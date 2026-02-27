import {useState} from "react";
import "../form.css";
import Education from "./education.jsx"

function Form(){
    const [formState, setFormState] = useState({
        generalInfo: {
            firstName:"",
            lastName: "",
            email: "",
            phone: ""
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

    function deleteExperiences(index){
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

    return <>
    <form>
        <fieldset>Contact Information
            <div>
                <label>First Name: </label>
                <input name="firstName" onChange={handleInfo} value={formState.generalInfo.firstName}></input>
                <label>Last Name: </label>
                <input name="lastName" onChange={handleInfo} value={formState.generalInfo.lastName}></input>
            </div>
            <div>
                <label>Email: </label>
                <input name="email" type="email" onChange={handleInfo} value={formState.generalInfo.email}></input>
                <label>Phone: </label>
                <input name="phone" onChange={handleInfo} value={formState.generalInfo.phone}></input>
            </div>
        </fieldset>
        <fieldset>
            Education
            <button type="button" onClick={addEducation}>add education</button>
            {formState.education.map((elem, i) => {return <Education index={i} elem={elem} handleEducation={handleEducation} deleteEducation={deleteEducation}/>})}
        </fieldset>
        <fieldset>
            Work Experience
            <div>
                <label>Job Title: </label>
                <input name="jobTitle"></input>
                <label>Employer's name: </label>
                <input name="employerName"></input>
            </div>
            <div>
                <label>Description: </label>
                <input type="text"></input>
            </div>
            <div>
                <label>Start Date: </label>
                <input name="startDate"></input>
                <label>End Date: </label>
                <input name="endDate"></input>
            </div>
        </fieldset>
    </form>
</>
}

export default Form;