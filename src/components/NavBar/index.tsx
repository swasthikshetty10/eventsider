import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { DarkLightContext } from "../../context/DarkModeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import Image from "next/image";
import { trpc } from "../../utils/trpc";
import { FcGoogle } from "react-icons/fc";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
function NavBAr() {
  const [dark, setDark] = useContext(DarkLightContext);
  const user = trpc.auth.getUserData.useQuery();
  const utils = trpc.useContext();
  return (
    <Navbar
      className="group fixed top-0 left-0  z-[999]  w-full bg-opacity-30 backdrop-blur-lg  dark:bg-gray-900 dark:bg-opacity-70 dark:backdrop-blur-lg"
      fluid={true}
      rounded={true}
    >
      <Link
        href="/"
        className="xs:text-xl flex items-center gap-2 text-lg font-bold"
      >
        <Image
          src="/images/logo.svg"
          width={100}
          height={100}
          className="xs:h-10 xs:w-10 h-8 w-8 group-hover:animate-pulse lg:h-12 lg:w-12"
          alt="Eventsider Logo"
        />
        <span className="self-center whitespace-nowrap   dark:text-white">
          Eventsider
        </span>
      </Link>
      <div className="xs:gap-2 flex items-center gap-1 md:order-2">
        {user.data ? (
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img={user.data?.image || undefined}
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block  font-medium">{user.data.name}</span>
              <span className="block truncate text-sm font-light">
                {user.data?.email || ""}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Link href="/profile"> My Tickets</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/profile"> Profile</Link>
            </Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item
              onClick={async () => {
                await signOut({ redirect: true });
                utils.auth.getUserData.invalidate();
              }}
            >
              Sign out
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <Button
            onClick={() => {
              signIn("google", {
                callbackUrl: `${window.location.pathname}/profile`,
              });
            }}
            color="gray"
          >
            <span className="text-md flex items-center gap-1">
              <FcGoogle /> SignIn
            </span>
          </Button>
        )}

        <button
          className="xs:text-3xl p-2 text-2xl text-yellow-300 dark:text-white "
          onClick={() => setDark(!dark)}
        >
          {!dark ? <FiSun /> : <FiMoon />}
        </button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link
          className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700  hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
          href="/"
        >
          Home
        </Link>

        <Link
          className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700  hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
          href="/"
        >
          Events
        </Link>

        <Link
          className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700  hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
          href="/"
        >
          About
        </Link>

        <Link
          className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700  hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
          href="/profile"
        >
          Tickets
        </Link>

        <Link
          className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700  hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
          href="/offers"
        >
          Offers
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBAr;
