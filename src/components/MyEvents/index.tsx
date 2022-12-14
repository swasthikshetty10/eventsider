import Link from "next/link";
import React from "react";
import Image from "next/image";
import { trpc } from "../../utils/trpc";
import { Button } from "flowbite-react";
import RegisteredUsers from "../Modal/RegisteredUsers";
import { truncateString } from "../../utils/helpers";
import { MdDeleteForever } from "react-icons/md";
function MyEvents() {
  const [modal, setModal] = React.useState(false);
  const mutation = trpc.events.deleteEvent.useMutation();
  const events = trpc.events.getAllEventsByOrganizer.useQuery();
  const utlis = trpc.useContext();
  if (!events.data) {
    return <div>loading</div>;
  }
  return (
    <div className="h-fit space-y-5 overflow-y-auto  md:max-h-[70vh]">
      {events.data.map((event) => {
        const deleteHandler = async () => {
          await mutation.mutateAsync(event.id);
          utlis.events.getAllEventsByOrganizer.invalidate();
        };
        return (
          <div key={event.id}>
            <EventCard onDelete={deleteHandler} event={event} />
          </div>
        );
      })}
    </div>
  );
}

export default MyEvents;
const EventCard = ({ event, onDelete }: any) => {
  const [modal, setModal] = React.useState(false);
  return (
    <div className="relative flex flex-col items-center overflow-hidden rounded-lg border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row">
      <button
        className="absolute top-5 right-5 text-2xl text-red-500"
        color={"gray"}
        onClick={onDelete}
      >
        <MdDeleteForever />
      </button>
      <Image
        className="max-h-48  max-w-xs"
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
          {truncateString(event.description, 75)}
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
            outline={true}
            gradientDuoTone="purpleToBlue"
          >
            Registrations
          </Button>
        </div>
      </div>
      {modal && <RegisteredUsers showModal={setModal} eventId={event.id} />}
    </div>
  );
};
