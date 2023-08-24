import { PageTitle } from "./PageTitle/Title";
import { EventBoard } from "./EventBoard/EventBoard";
import events from "Events.json"

export const App = () => {
  return (
    <div>
      <PageTitle text="penis bolshoy" />
      <EventBoard
        events={events}
      />
    </div>
  );
};
