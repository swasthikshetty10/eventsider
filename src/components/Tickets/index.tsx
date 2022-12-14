import Link from "next/link";
import React from "react";
import QRCode from "react-qr-code";
import { trpc } from "../../utils/trpc";

function Tickets() {
  const events = trpc.events.getRegisteredEvents.useQuery();
  if (!events.data) {
    return <div>loading</div>;
  }
  return (
    <div className="h-fit space-y-5 overflow-y-auto md:max-h-[70vh]">
      {events.data.map((event) => {
        return (
          <div key={event.regId}>
            <Link href="/event/[id]" as={`/event/${event.id}`} legacyBehavior>
              <a className="flex flex-col items-center rounded-lg border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row">
                <div className="m-2 bg-white px-2 pt-2  shadow-md">
                  <QRCode
                    className="h-28 w-28  "
                    value={`TICKET-${event.regId}`}
                    viewBox={`0 0 256 256`}
                  />
                  <div className="w-full bg-white  text-center font-bold text-gray-900">
                    TICKET-{event.regId}
                  </div>
                </div>
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
                </div>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Tickets;
