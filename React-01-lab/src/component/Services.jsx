export default function programmers(props) {
    return (

        <div className="serves-d">
            <img className="myimg" src={props.img} ></img>
            <p>{props.serves}</p>
            <p>{props.price}</p>
        </div>

    )
}
