import React from "react";
import Head from "next/head";
import MainLayout from "../layouts/MainLayout";
import Showcase from "../components/Showcase";

import styles from "../styles/MainLayout.module.css";

const index = () => (
  <>
    <Head>
      <title>Mkrtich Sargsyan</title>
    </Head>
    <MainLayout>
      <Showcase>
        <div>sdfsd</div>

        <style jsx>{`
          display: flex;
          flex-direction: column;
        `}</style>
      </Showcase>
    </MainLayout>
  </>
);

export default index;
