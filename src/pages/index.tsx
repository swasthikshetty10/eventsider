import { Button } from "flowbite-react";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Eventsider | Plan your Event </title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-5">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-evenly gap-10 lg:flex-row lg:gap-5">
          <div className="max-w-xl space-y-3  text-center">
            <h1 className="mb-4 flex w-full  items-start justify-center gap-2 text-center  text-4xl font-extrabold text-gray-900 dark:text-white md:text-6xl lg:justify-start lg:text-left  lg:text-7xl">
              <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                Eventsider
              </span>{" "}
              <span className="mr-2 ml-2 rounded bg-blue-100 px-2.5 py-0.5 text-xl font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800 sm:text-2xl">
                PRO
              </span>
            </h1>
            <h2 className="spacing-x-2 text-center text-lg font-semibold sm:text-2xl lg:text-left lg:text-3xl">
              Your One Stop for Event Registration!
            </h2>
            <p className="inline-flex items-center gap-2  text-center text-sm opacity-80 lg:text-left lg:text-lg">
              <span>
                Welcome to Register Events! The online platform to easily find
                and register for your favorite events. Whether you’re looking
                for a music festival, conference, or something else, Register
                Events is the perfect place to search and sign up for events
                near you
              </span>
            </p>
            <div className="w-full lg:text-left">
              <Link
                href="#"
                className="group inline-flex items-center   font-medium text-blue-600 hover:underline dark:text-blue-500 "
              >
                Register Now
                <svg
                  aria-hidden="true"
                  className="delay-50 ml-1 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <Image
            className="delay-50 select-none transition-transform duration-500 ease-in-out hover:scale-105 "
            src="/images/hero.svg"
            alt="Hero"
            width={500}
            height={500}
          />
        </div>
      </main>
    </>
  );
};

export default Home;