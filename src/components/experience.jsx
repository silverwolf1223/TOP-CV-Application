

export default function Experience(props){
    return <div key={props.elem.id}>
        <div>
            <label>Job Title: </label>
            <input name="jobTitle" data-index={props.index} onChange={props.handleExperience} value={props.elem.jobTitle}></input>
            <label>Employer: </label>
            <input name="employer" data-index={props.index} onChange={props.handleExperience} value={props.elem.employer}></input>
        </div>
        <div>
            <label>Start Date: </label>
            <input type="date" name="startDate" data-index={props.index} onChange={props.handleExperience} value={props.elem.startDate}></input>
            <label>End Date: </label>
            <input type="date" name="endDate" data-index={props.index} onChange={props.handleExperience} value={props.elem.endDate}></input>
        </div>
        <div>
            <label className="taLabel">General Description: </label>
            <textarea name="description" data-index={props.index} onChange={props.handleExperience} value={props.elem.description}></textarea>
        </div>
        <button type="button" onClick={() => props.deleteExperience(props.index)}>delete</button>
    </div>
}