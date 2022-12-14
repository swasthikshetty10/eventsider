import { Card, Tabs } from "flowbite-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { trpc } from "../utils/trpc";
import QRCode from "react-qr-code";
import Link from "next/link";
function Profiles() {
  const user = trpc.auth.getUserData.useQuery();
  const utils = trpc.useContext();
  const events = trpc.events.getRegisteredEvents.useQuery();
  if (!user.data || !events.data) {
    return <div>loading</div>;
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-start gap-5 p-5 pt-28  md:flex-row md:items-start md:justify-center ">
      <Card className="h-fit w-full max-w-xs">
        <div className="flex flex-col items-center ">
          <Image
            height={250}
            width={250}
            className="mb-3 h-24 w-24 rounded-full shadow-lg"
            src={user.data.image || ""}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {user.data.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {user.data.email}
          </span>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Logout
            </button>
            <a className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
              <AiFillEdit />
            </a>
          </div>
        </div>
      </Card>

      <Tabs.Group
        className="h-fit w-full max-w-xl rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
        aria-label="Tabs with underline"
        style="underline"
      >
        <Tabs.Item title="Profile" className="md:max-h-[70vh]">
          <div className="space-y-5">
            {events.data.map((event) => {
              return (
                <div key={event.id}>
                  <Link
                    href="/event/[id]"
                    as={`/event/${event.id}`}
                    legacyBehavior
                  >
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
        </Tabs.Item>
        <Tabs.Item title="Upcoming Events"></Tabs.Item>
      </Tabs.Group>
    </div>
  );
}

export default Profiles;
