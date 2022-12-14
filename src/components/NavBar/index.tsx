import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React, { useContext, useEffect } from "react";
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
      <Link href="/" className="flex items-center gap-2 text-xl font-bold">
        <Image
          src="/images/logo.svg"
          width={100}
          height={100}
          className="h-10 w-10 group-hover:animate-pulse lg:h-12 lg:w-12"
          alt="Eventsider Logo"
        />
        <span className="self-center whitespace-nowrap   dark:text-white">
          Eventsider
        </span>
      </Link>
      <div className="flex items-center gap-2 md:order-2">
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
            <Dropdown.Item>My Tickets</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
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
            className=""
            color="gray"
          >
            <span className="text-mds flex items-center gap-1">
              <FcGoogle /> SignIn
            </span>
          </Button>
        )}

        <button
          className="p-2 text-3xl text-yellow-300 dark:text-white "
          onClick={() => setDark(!dark)}
        >
          {!dark ? <FiSun /> : <FiMoon />}
        </button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
        <Link href="/about">About</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/offers">Offers</Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBAr;
