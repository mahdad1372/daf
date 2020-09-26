// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Frist from "../components/First";
import React from "react";
import Link from "next/link";
import Second from "../components/Second";
import Api from "../components/Api";

const Main = () => (
  <div>
    <Link href="/detail">
      <a>press here</a>
    </Link>
    <br />
    <Second />
  </div>
);

export default Main;
