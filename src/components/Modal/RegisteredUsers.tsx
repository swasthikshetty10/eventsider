import { Accordion, Avatar, Card } from "flowbite-react";
import React from "react";
import { trpc } from "../../utils/trpc";

function RegisteredUsers({
  eventId,
  showModal,
}: {
  eventId: number;
  showModal: (arg0: boolean) => void;
}) {
  const users = trpc.events.getAllRegisteredUsersByEvent.useQuery(eventId);
  if (!users.data) return <div>loading</div>;

  return (
    <div className="fixed top-0 left-0 right-0 z-[999] flex h-screen w-screen items-center justify-center overflow-x-hidden bg-gray-900 bg-opacity-50   p-5 dark:bg-opacity-80">
      <Card className="relative -m-5 h-fit max-h-[75vh] w-full max-w-3xl overflow-auto">
        <button
          onClick={() => {
            showModal(false);
          }}
          className=" absolute top-5 right-5"
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        {users.data.length === 0 ? (
          <div>No users registered</div>
        ) : (
          <div>
            {users.data?.map((user, index) => (
              <div key={user.id}>
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Avatar
                        className="h-10 w-10 rounded-full"
                        img={user?.image || ""}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {user.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {user.email}
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="mt-2 opacity-50"></hr>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}

export default RegisteredUsers;
