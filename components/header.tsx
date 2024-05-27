import { getHeaderData } from "@/lib/api";
import React from "react";

export default async function Header() {
  const headerData = await getHeaderData();

  return (
    <header className="bg-orange-400 text-white py-8 px-6 md:px-8 lg:px-10 flex justify-between items-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-4xl font-semibold">
          <h1>{headerData?.headerText}</h1>
        </div>
      </div>
    </header>
  );
}
