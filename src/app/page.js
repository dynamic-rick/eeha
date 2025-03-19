"use client";

import React from "react";
import ButtonLoginFix from "./components/ButtonLoginFix";
import BoxStyledComponent from "./components/BoxStyledComponent";

const Page = () => {
  return (
    <div className="container bg-center bg-cover h-screen">
      <h1 className="text-4xl text-center pt-10">Tailwind CSS</h1>
      <BoxStyledComponent />
      <ButtonLoginFix />
    </div>
  );
};

export default Page;
