
import './Boxes.css'
function Box2 (props){
    const divClassNames = props.isvisible ? "Box Box2" : "Invs";
    return(
        <div className={divClassNames}></div>
    )
}
export default Box2