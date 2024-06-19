import { getHeaderData } from "@/lib/api";
import React from "react";

export default async function Header() {
  const headerData = await getHeaderData();

  return (
    <header
      style={{ backgroundColor: headerData.backgroundColor.value }}
      className="text-white py-4 px-6 md:px-8 lg:px-10 flex justify-between items-center"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-semibold">
          <h1>{headerData?.headerText}</h1>
        </div>
      </div>
    </header>
  );
}
