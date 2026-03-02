

export default function Education(props){
    return <div key={props.elem.id} className={props.className}>
        <div>
            <p className="label">Degree:</p>
            <input name="degree" data-index={props.index} onChange={props.handleEducation} value={props.elem.degree}></input>
        </div>
        <div>
            <p className="label">School:</p>
            <input name="college" data-index={props.index} onChange={props.handleEducation} value={props.elem.college}></input>
        </div>
        <div>
            <p className="label">Gradutation Date: </p>
            <input type="date" name="graduationDate" data-index={props.index} onChange={props.handleEducation} value={props.elem.graduationDate}></input>
        </div>
        <button type="button" onClick={() => props.deleteEducation(props.index)}>delete</button>
    </div>
}