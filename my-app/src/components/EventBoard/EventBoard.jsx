import PropTypes from "prop-types"
import {Event} from "components/Event/Event"
import { Board } from "./EventBoard.styled"


export const EventBoard = ({events}) =>{
    return <Board>
        {events.map(event => <Event name={event.name} location={event.location} duration={event.duration} key={event.id}/>)}
    </Board>
}

EventBoard.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.exact({
           name: PropTypes.string.isRequired,
           location: PropTypes.string.isRequired,
           duration: PropTypes.number.isRequired,
           id: PropTypes.string.isRequired,
       })
    ),
}
