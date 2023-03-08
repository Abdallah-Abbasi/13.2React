
import './Boxes.css'
function Box1 (props){
    const divClassNames = props.isvisible ? "Box Box1" : "Invs";
    return(
        <div className={divClassNames}></div>
    )
}
export default Box1