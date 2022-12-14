import { Card, Tabs } from "flowbite-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { trpc } from "../utils/trpc";
import Tickets from "../components/Tickets";
import MyEvents from "../components/MyEvents";
function Profiles() {
  const user = trpc.auth.getUserData.useQuery();
  const utils = trpc.useContext();
  if (!user.data) {
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
        className="h-fit w-full max-w-xl  rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 "
        aria-label="Tabs with underline"
        style="underline"
      >
        <Tabs.Item title="Tickets">
          <Tickets />
        </Tabs.Item>
        <Tabs.Item title="My Events">
          <MyEvents />
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
}

export default Profiles;
