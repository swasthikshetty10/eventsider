import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import NavBar from "../components/NavBar";
import { DarkLightContext } from "../context/DarkModeContext";
import { useEffect, useState } from "react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("dark") === "true") {
      setDark(true);
    } else {
      setDark(false);
    }
  }, []);
  useEffect(() => {
    document.body.className = `${
      dark
        ? "dark bg-gradient-to-br from-gray-800 via-slate-800 to-slate-900  text-gray-200 "
        : " bg-gradient-to-br from-pink-100 via-blue-50 to-sky-100 text-gray-800 "
    } font-sans min-h-screen`;
  }, [dark]);
  return (
    <DarkLightContext.Provider value={[dark, setDark]}>
      <SessionProvider session={session}>
        <div>
          <NavBar />
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </DarkLightContext.Provider>
  );
};

export default trpc.withTRPC(MyApp);
