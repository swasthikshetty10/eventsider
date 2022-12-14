import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
function Card(props: any) {
  return (
    <div className=" flex h-full flex-col items-center justify-between rounded-lg bg-slate-200/60 shadow-md  backdrop-blur-lg transition delay-75 duration-300 ease-in-out hover:scale-105 hover:shadow-2xl dark:border-gray-400 dark:bg-gray-700/60">
      <a href=" mx-auto ">
        <Image
          height={300}
          width={300}
          className="h-full max-h-[300px] w-full rounded-t-lg p-2"
          src={props.banner}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </a>
        <p>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {props.date.toDateString() +
              ", " +
              props.date.toLocaleTimeString("en-US", {
                hour: "numeric",
                hour12: true,
              })}
          </span>
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {props.description}
        </p>
        <a className="mt-2 inline-flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <HiOutlineLocationMarker />
          {props.location}
        </a>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{props.time}</p>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {props.price}
          </span>

          <Link
            href="/event/[id]"
            as={`/event/${props.id}`}
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy Tickets
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
