import PropTypes from "prop-types"
import {Event} from "components/Event/Event"
import { Board } from "./EventBoard.styled"
import { FaToiletPaperSlash } from "react-icons/fa6"


export const EventBoard = ({events}) =>{
    return <Board>
        {events.map(event => <Event name={event.name} location={event.location} duration={event.duration} color={event.color} key={event.id}/>)}
    </Board>
}

EventBoard.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.exact({
           name: PropTypes.string.isRequired,
           location: PropTypes.string.isRequired,
           duration: PropTypes.number.isRequired,
           color: PropTypes.string,
           id: PropTypes.string.isRequired,
       })
    ),
}
