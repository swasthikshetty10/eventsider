import React, { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsFillCalendarFill } from "react-icons/bs";
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
              <a
                href="#"
                className="bg-primary-700 hover:bg-primary-800text-xl  mr-3 inline-flex items-center  justify-center gap-1 rounded-lg px-5 py-3 text-center text-base font-medium  text-opacity-75 focus:ring-4"
              >
                <HiOutlineLocationMarker /> {event.data.location}
              </a>
              <a
                href="#"
                className="bg-primary-700 hover:bg-primary-800text-xl  mr-3 inline-flex items-center  justify-center gap-1 rounded-lg px-5 py-3 text-center text-base font-medium  text-opacity-75 focus:ring-4"
              >
                <BsFillCalendarFill /> {event.data.date.getUTCDay()}
              </a>
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
      <h5 className="dark: mb-2 text-3xl font-bold ">
        Work fast from anywhere
      </h5>
      <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
        Stay up to date and move work forward with Flowbite on iOS & Android.
        Download the app today.
      </p>
      <List />
    </Card>
  );
};

const List = () => {
  return (
    <ol className="list-inside list-decimal space-y-4 text-gray-500 dark:text-gray-400">
      <li>
        List item one
        <ul className="mt-2 list-inside list-disc space-y-1 pl-5">
          <li>
            You might feel like you are being really &quote;organizedQ&uote; o
          </li>
          <li>
            Nested navigation in UIs is a bad idea too, keep things as flat as
            possible.
          </li>
          <li>
            Nesting tons of folders in your source code is also not helpful.
          </li>
        </ul>
      </li>
      <li>
        List item two
        <ul className="mt-2 list-inside list-disc space-y-1 pl-5">
          <li>
            I&apos;m not sure if we&apos;ll bother styling more than two levels
            deep.
          </li>
          <li>
            Two is already too much, three is guaranteed to be a bad idea.
          </li>
          <li>If you nest four levels deep you belong in prison.</li>
        </ul>
      </li>
      <li>
        List item three
        <ul className="mt-2 list-inside list-disc space-y-1 pl-5">
          <li>Again please don&apos;t nest lists if you want</li>
          <li>Nobody wants to look at this.</li>
          <li>I&apos;m upset that we even have to bother styling this.</li>
        </ul>
      </li>
    </ol>
  );
};
