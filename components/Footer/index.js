import React from "react";
import Socials from "../Socials";
import Link from "next/link";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0 flex flex-col items-center justify-center">
        <div>
          <h1 className="text-2xl text-bold text-center">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl text-center tablet:text-4xl laptop:text-4xl laptopl:text-6xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl text-center tablet:text-4xl laptop:text-4xl laptopl:text-6xl text-bold">
              TOGETHER
            </h1>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
