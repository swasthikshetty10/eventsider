import { Card, Dropdown } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
function Profiles() {
  return (
    <div className="flex min-h-screen flex-wrap justify-center gap-5 p-5 pt-20">
      <div className="w-full max-w-sm">
        <Card>
          <div className="flex flex-col items-center pb-10">
            <Image
              height={250}
              width={250}
              className="mb-3 h-24 w-24 rounded-full shadow-lg"
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Bonnie Green
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Visual Designer
            </span>
            <div className="mt-4 flex space-x-3 lg:mt-6">
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add friend
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <AiFillEdit />
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Profiles;
