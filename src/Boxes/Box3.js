
import './Boxes.css'
function Box3 (props){
    const divClassNames = props.isvisible ? "Box Box3" : "Invs";
    return(
        <div className={divClassNames}></div>
    )
}
export default Box3