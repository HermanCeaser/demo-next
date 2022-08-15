import { useState } from "react";
import { Content } from "../components/content";
import { Header } from "../components/header/header";
import Navbar from "../components/layout/navigation/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Content />
    </>
  );
}
