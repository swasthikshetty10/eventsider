import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { DarkLightContext } from "../../context/DarkModeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import Image from "next/image";
function NavBAr() {
  const [dark, setDark] = useContext(DarkLightContext);
  return (
    <Navbar
      className="group fixed top-0 left-0  z-[999]  w-full bg-opacity-30 backdrop-blur-lg  dark:bg-gray-900 dark:bg-opacity-70 dark:backdrop-blur-lg"
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="https://flowbite.com/">
        <Image
          src="/images/logo.svg"
          width={100}
          height={100}
          className="h-10 w-10 group-hover:animate-pulse lg:h-12 lg:w-12"
          alt="Eventsider Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Eventsider
        </span>
      </Navbar.Brand>
      <div className="flex items-center gap-2 md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <button
          className="p-2 text-3xl text-yellow-300 dark:text-white "
          onClick={() => setDark(!dark)}
        >
          {!dark ? <FiSun /> : <FiMoon />}
        </button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBAr;
