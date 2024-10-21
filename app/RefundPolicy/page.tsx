"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RefundPolicy from "./RefundPolicy";


type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(3);
  const [route, setRoute] = useState("Login");

  return (
    <div style={{ height: "100vh" }}>
      <Heading
        title="Policy - Stride Wise"
        description="Stride Wise is a Investment Knowledge Platform."
        keywords="Stock Market, Trading, Investment"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <div style={{ height: "55vh" }}>
      <RefundPolicy />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
