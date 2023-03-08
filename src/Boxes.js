import {useState, useEffect} from 'react'
import './Boxes.css'
import Box1 from './Boxes/Box1'
import Box2 from './Boxes/Box2'
import Box3 from './Boxes/Box3'
function Boxes () {
    const [isvisible, setIsVisible] = useState(true)
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(false)},
            4000)
            return () => clearTimeout(timeoutId);
        }, []);
    return (
        <div>
            <Box1 isvisible={isvisible}/>
            <Box2 isvisible={isvisible}/>
            <Box3 isvisible={isvisible}/>
        </div>
    )
}
export default Boxes