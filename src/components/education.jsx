

export default function Education(props){
    return <div key={props.elem.id}>
        <div>
            <label>Degree: </label>
            <input name="degree" data-index={props.index} onChange={props.handleEducation} value={props.elem.degree}></input>
        </div>
        <div>
            <label>School: </label>
            <input name="college" data-index={props.index} onChange={props.handleEducation} value={props.elem.college}></input>
        </div>
        <div>
            <label>Gradutation Date: </label>
            <input type="date" name="graduationDate" data-index={props.index} onChange={props.handleEducation} value={props.elem.graduationDate}></input>
        </div>
        <button type="button" onClick={() => props.deleteEducation(props.index)}>delete</button>
    </div>
}