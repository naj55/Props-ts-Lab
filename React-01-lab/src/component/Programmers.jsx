export default function programmers(props) {
    return (

        <div className="programer-d">
            <img className="myimg" src={props.img} ></img>
            <p>{props.name}</p>
            <p>{props.programmingLanguages}</p>
            <p>{props.Experance}</p>
            <p>{props.company}</p>
        </div>

    )
}
