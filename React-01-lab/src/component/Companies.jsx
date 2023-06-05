export default function programmers(props) {
    return (

        <div className="company-d">
            <img className="myimg" src={props.img} ></img>
            <p>{props.name}</p>
            <p>{props.empNum}</p>
            <p>{props.year}</p>
        </div>

    )
}
