import Link from "next/link";
import React from "react";
import Image from "next/image";
import { trpc } from "../../utils/trpc";
import { Button } from "flowbite-react";
import RegisteredUsers from "../Modal/RegisteredUsers";

function MyEvents() {
  const [modal, setModal] = React.useState(false);
  const events = trpc.events.getAllEventsByOrganizer.useQuery();
  if (!events.data) {
    return <div>loading</div>;
  }
  return (
    <div className="h-fit space-y-5 overflow-y-auto  md:max-h-[70vh]">
      {events.data.map((event) => {
        return (
          <div key={event.id}>
            <EventCard event={event} />
          </div>
        );
      })}
    </div>
  );
}

export default MyEvents;
const EventCard = ({ event }: any) => {
  const [modal, setModal] = React.useState(false);
  return (
    <div className="flex flex-col items-center overflow-hidden rounded-lg border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row">
      <Image
        className="h-48 w-auto"
        width={256}
        height={256}
        src={event.banner}
        alt="banner"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {event.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {event.description}
        </p>
        <div className="flex items-center">
          <div className="flex items-center gap-5">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {event.date.toDateString()}
            </span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {event.date.toLocaleTimeString("en-US", {
                hour: "numeric",
                hour12: true,
              })}
            </span>
          </div>
        </div>
        <div className="ml-auto flex gap-2">
          <Link href="/event/[id]" as={`/event/${event.id}`} legacyBehavior>
            <Button color="gray">View</Button>
          </Link>
          <Button
            onClick={() => {
              setModal(true);
            }}
          >
            Registrations
          </Button>
        </div>
      </div>
      {modal && <RegisteredUsers showModal={setModal} eventId={event.id} />}
    </div>
  );
};
