import Image from "next/image";
import React from "react";

function Card(props: any) {
  return (
    <div>
      <div className="w-full max-w-sm rounded-lg bg-slate-200/60 shadow-md backdrop-blur-lg dark:border-gray-400 dark:bg-gray-700/60">
        <a href="#">
          <Image
            height={300}
            width={300}
            className="rounded-t-lg p-8"
            src={props.image}
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
              {props.date}
            </span>
          </p>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {props.description}
          </p>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {props.location}
          </p>
          <p className="mt-2 text-gray-600 dark:text-gray-400">{props.time}</p>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {props.price}
            </span>
            <a
              href="#"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Buy Tickets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
