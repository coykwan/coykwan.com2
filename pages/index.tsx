import { Button, Modal, Typography, Box, styled } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import BasicCard from '../src/componets/Card'
import BasicModal from '../src/Componets/Modal'
import { Header } from '../src/componets/Header'
import { Tagline } from '../src/componets/Tagline'
import zIndex from '@mui/material/styles/zIndex'

const HeaderPaddingWrapper = styled('div')({
  paddingTop: '200px',
});


const Home: NextPage = () => {
  return (
    <>
      <Header/>
        <HeaderPaddingWrapper>
            <Tagline></Tagline>
        </HeaderPaddingWrapper>
      
    </>


  )
}

export default Home
