import { Button, Modal, Typography, Box, styled, Slide, FormControlLabel, Switch, Paper, Theme } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import { Footer } from "../src/components/Footer";
import Link from "next/link";
import { IntroPage } from "components/IntroPage";


const HeaderPaddingWrapper = styled("div")({
  paddingTop: "200px",
});

const PaddingWrapper = styled("div")({
  padding: "12px",
  justifyContent: "center",
  display: "flex",
});

const Home: NextPage = () => {
  return (
    <>
      <IntroPage></IntroPage>
    </>
  );
};

export default Home;
