"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PrivacyPolicy from "./PrivacyPolicy";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(3);
  const [route, setRoute] = useState("Login");

  return (
    <div>
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
      <PrivacyPolicy/>
      <Footer />
    </div>
  );
};

export default Page;
