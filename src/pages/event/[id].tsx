import React, { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsFillCalendarFill, BsFillClockFill } from "react-icons/bs";
import { Button, Card } from "flowbite-react";
import Image from "next/image";
import EventsModal from "../../components/Modal/EventsModal";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

export default function Events() {
  const [modal, showModal] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const event = trpc.events.getEventById.useQuery({ id: Number(id) || -1 });
  if (event.isLoading) return <div>Loading...</div>;
  if (!event.data) {
    router.push({
      pathname: "/404",
    });
    return null;
  }

  return (
    <div>
      <section className="min-h-screen pt-20">
        <div className="mx-auto grid max-w-screen-xl gap-10 px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto justify-between place-self-center  lg:col-span-7">
            <h1 className="dark: mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
              {event.data.title}
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              {event.data.description}
            </p>
            <div>
              <span className="bg-primary-700 hover:bg-primary-800text-xl  mr-3 inline-flex items-center  justify-center gap-1 rounded-lg px-5 py-3 text-center text-base font-medium  text-opacity-75 focus:ring-4">
                <HiOutlineLocationMarker /> {event.data.location}
              </span>
              <span className="bg-primary-700 hover:bg-primary-800text-xl  mr-3 inline-flex items-center  justify-center gap-1 rounded-lg px-5 py-3 text-center text-base font-medium  text-opacity-75 focus:ring-4">
                <BsFillCalendarFill /> {event.data.date.toDateString()}
              </span>
              <span className="bg-primary-700 hover:bg-primary-800text-xl  mr-3 inline-flex items-center  justify-center gap-1 rounded-lg px-5 py-3 text-center text-base font-medium  text-opacity-75 focus:ring-4">
                <BsFillClockFill />{" "}
                {event.data.date.toLocaleTimeString("en-US", {
                  hour: "numeric",
                  hour12: true,
                })}
              </span>
            </div>
          </div>

          <div className=" lg:col-span-5 lg:mt-0 lg:flex">
            <Image
              height={500}
              width={500}
              src={event.data.banner}
              alt="mockup"
            />
          </div>
        </div>
        <div className="mt-10 flex w-full  items-center justify-center gap-5">
          <div>
            <a className=" text-lg font-semibold">
              Starting at{" "}
              <span className="text-2xl md:text-4xl">
                ₹{event.data.registrationFee}
              </span>
            </a>
          </div>
          <Button
            size={"xl"}
            onClick={() => {
              showModal(true);
            }}
            outline={true}
            gradientDuoTone="purpleToBlue"
          >
            Buy Now
          </Button>
        </div>
        <div className="p-5 md:p-10">
          <EventCard />
        </div>
      </section>

      <EventsModal
        id={event.data.id}
        fee={event.data.registrationFee}
        showModal={showModal}
        modal={modal}
      />
    </div>
  );
}

const EventCard = () => {
  return (
    <Card>
      <h5 className="dark: mb-2 text-3xl font-bold ">Rules and Regulations</h5>
      <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
        All participants must be 18+ years of age, provide valid ID, and
        register online prior to the event. Payment must be made in full at the
        time of registration, and all registrations are non-refundable and
        non-transferable. Participants must sign a waiver and release of
        liability and adhere to all rules and regulations set forth by the event
        organizer. The event organizer reserves the right to refuse, cancel,
        modify, or cancel any event at any time. Participants also agree to
        allow the event organizer to use their name, likeness, and photograph
        for promotional purposes.
      </p>
      <List />
    </Card>
  );
};

const List = () => {
  return (
    <ol className="list-inside list-decimal space-y-4 text-gray-500 dark:text-gray-400">
      <li>
        Rules
        <ul className="mt-2 list-inside list-disc space-y-1 pl-5">
          <li>
            All participants must provide a valid form of identification at the
            time of registration.
          </li>
          <li>
            Registration is open to all participants, regardless of race,
            religion, gender, or sexual orientation.
          </li>
          <li>
            All registrations must be completed online prior to the event.
          </li>

          <li>6. All registrations are non-refundable and non-transferable.</li>
        </ul>
      </li>
    </ol>
  );
};
