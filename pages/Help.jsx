import { Navbar } from '../components/Navbar/Navbar'
import Carousel from '../components/Carousel/Carousel'
import React, { useState } from 'react'
import Head from 'next/head'
import styled from "styled-components"
import ExploreLanguages from '../components/ExplorePages/ExploreLanguages'
import Bodytext from '../components/BodyText/Bodytext'
import ItemBox from '../components/ItemBox/ItemBox'
import VideoPlayer from '../components/VideoPlayer'

import Header from '../components/Header/Header'
import {useRouter} from "next/router";
import router from 'next/router';
import MiniButton from '../components/Button'

const StyledContainer = styled.div`
  max-height: calc(100vh - 60px - 58px);
  min-height: calc(100vh - 60px - 58px);
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 1.5em;
  background-color: #F2F2F2;
  overflow-y: scroll;
  @media (min-width: 768px) {
    height: 100vh;
  }
  @media (prefers-color-scheme: dark) {
    background-color: #1F1F1F;
    color: #FFFFFF;
  }
  `

  const InsideContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 174px;

  * {
    font-family: 'Fira Sans', sans-serif;
  }
  a {
    color: blue;
    text-decoration: underline;
  }
`

const StyledAnchor = styled.a`
  @media (prefers-color-scheme: dark) {
    color: deepskyblue !important;
  }
`


export default function Help ({
  ...props
}) {
  const [page, setPage] = useState(true)
  const [Langauges, setLanguages] = useState(false)
  const [Arts, setArts] = useState(false)
  const [Lang, setLang] = useState(false)
  const [History, setHistory] = useState(false)
  const GoBack = () => {
    setPage(true);
    setLanguages(false);
    setArts(false);
    setLang(false);
    setHistory(false);
  };
  return (
    <>
      <Head>
        <title>Help | First Maps</title>
        <meta name="description" content="First Maps: Help" />
        <link rel="icon" href="/location-dot-solid.svg" />
      </Head>

      <StyledContainer>
        <Header
          label='Contact Us'
          text='↽ Back to FAQ'
          dir="column-reverse"
          ali="flex-start"
          padl="0"
          onClick={() => router.push('/FAQ')}
            />
        <InsideContainer>
        <h1>👋</h1>
        <h2>Having any trouble?</h2>
        <p>Find help here.</p>
        <StyledAnchor href="firstmaps@contact.ca">firstmaps@contact.ca</StyledAnchor>
        </InsideContainer>

        {/* <MiniButton text = "Go Back" onClick={() => router.push('/profile')}>
        </MiniButton> */}
  
      </StyledContainer>
      <Navbar
        navPages={['Home', 'Explore', 'Contribute', 'Profile']}
        activePage={'Profile'}
      />
    </>
  )
}

