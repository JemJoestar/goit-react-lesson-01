import PropTypes from "prop-types"
import { VscAccount } from "react-icons/vsc";
import { FaLocationDot,FaClock } from "react-icons/fa6";
import { Card } from "./Event.styled";

export const Event = ({name, location, duration, color}) =>{
    return <Card color={color}>
        <p><VscAccount /> Speaker: {name}</p>
        <p><FaLocationDot /> Location: {location}</p>
        <p><FaClock /> Duration: {duration} hours</p>
    </Card>
}

Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    duration: PropTypes.number
    
}