import React from "react";
import { trpc } from "../../utils/trpc";
import Card from "./Card";

function Events() {
  const events = trpc.events.getAllEvents.useQuery();
  if (events.isLoading) return <div>Loading...</div>;
  if (!events.data) return <div>No events found</div>;
  return (
    <div className="mx-auto max-w-screen-2xl p-2 md:p-5">
      <h1 className="text my-14 text-center text-6xl font-bold ">Events</h1>
      <div className="lg:grid-clos-3  grid grid-cols-1 items-center gap-5 md:grid-cols-2  md:gap-10 2xl:grid-cols-3">
        {events?.data.map(
          ({
            id,
            title,
            description,
            date,
            location,
            banner,
            registrationFee,
          }) => (
            <Card
              key={title}
              title={title}
              description={description}
              date={date}
              location={location}
              banner={banner}
              registrationFee={registrationFee}
              id={id}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Events;
