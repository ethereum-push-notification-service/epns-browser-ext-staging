import React, { Fragment, useEffect } from "react";
import "./Tooltip.css";
import gsap from "gsap";

export default function Tooltip() {
  return (
    <Fragment>
      <div className="new-one regular">
        EPNS is a decentralized communication protocol for Web3! that allows any
        <b> dApps</b>, <b>Smart Contracts</b>, backends or protocols to send
        communication directly to user wallet addresses in an open, gasless and
        platform agnostic fashion.
      </div>
    </Fragment>
  );
}
