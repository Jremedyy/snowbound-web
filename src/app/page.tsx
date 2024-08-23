"use client";
import { createContext } from "react";
//@ts-ignore
const Context = createContext();
import React from "react";
import NavbarLayout from "@/layouts/NavbarLayout/NavbarLayout";
import HomePage from "../layouts/HomePage/HomePage";

export default function Home(props: any) {
  return (
    <NavbarLayout
      render={(mainProps) => (
        <>
          <HomePage {...mainProps} />
        </>
      )}
      showLinks={true}
    />
  );
}
