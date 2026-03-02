

export default function Experience(props){
    return <div key={props.elem.id} className={props.className}>
        <div>
            <p className="label">Job Title: </p>
            <input name="jobTitle" data-index={props.index} onChange={props.handleExperience} value={props.elem.jobTitle}></input>
            <p className="label">Employer: </p>
            <input name="employer" data-index={props.index} onChange={props.handleExperience} value={props.elem.employer}></input>
        </div>
        <div>
            <p className="label">Start Date: </p>
            <input type="date" name="startDate" data-index={props.index} onChange={props.handleExperience} value={props.elem.startDate}></input>
            <p className="label">End Date: </p>
            <input type="date" name="endDate" data-index={props.index} onChange={props.handleExperience} value={props.elem.endDate}></input>
        </div>
        <div>
            <p className="taLabel">General Description: </p>
            <textarea name="description" data-index={props.index} onChange={props.handleExperience} value={props.elem.description}></textarea>
        </div>
        <button type="button" onClick={() => props.deleteExperience(props.index)}>delete</button>
    </div>
}