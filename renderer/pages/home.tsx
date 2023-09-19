import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { RscButton } from "../components/rscButton";

function Home() {
  return (
    <div className="flex flex-col items-center mt-10">
      <Head>
        <title>Home - Nextron (with-typescript-tailwindcss)</title>
      </Head>

      <RscButton />
    </div>
  );
}

export default Home;
