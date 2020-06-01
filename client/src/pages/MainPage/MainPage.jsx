import React from 'react'
import {
  MainPageWrapper,
  Text,
  BackFrames,
  MainSection,
  All,
  Partners,
  WhatBlock,
  WhatBlockImage,
  WhatBlockH1,
  WhatBlockP,
  Footer,
  FooterImg,
  FooterText,
} from './MainPage.styles'

import { Link } from 'react-router-dom'

import { Button, AllPlaces, Header } from '../../components'
import { useStores } from './../../hooks/useStores'

import backFrames from './../../assets/back-frames.svg'
import logo from './../../assets/logo.svg'

const MainPage = () => {
  const { authStore } = useStores()

  console.log(authStore)
  return (
    <MainPageWrapper>
      <Header></Header>
      <MainSection>
        <Text>
          Теперь столик в любимом ресторане можно забронировать удалённо в одном
          приложении. За считанные секунды. И никаких звонков! Надёжно и просто.
        </Text>
        <Link to="/places">
          <Button state="start" text="Посмотреть" />
        </Link>
        <BackFrames src={backFrames} alt="" />
      </MainSection>
      <All>
        <Partners>Партнеры</Partners>
        <AllPlaces path={process.env.REACT_APP_GETPLACES}></AllPlaces>
        <WhatBlock>
          <WhatBlockH1>Защищенный, удобный способ бронирования</WhatBlockH1>
          <WhatBlockP>
            Данные используются только для подтверждения бронирования. Используя
            систему “Броня”, вы можете быть уверены, что ваше места займете
            только вы
          </WhatBlockP>
          <WhatBlockImage></WhatBlockImage>
        </WhatBlock>
      </All>
      {/* <FooterLayer src={footerLayer} alt=""></FooterLayer> */}
      <Footer>
        <FooterImg src={logo} alt=""></FooterImg>
        <FooterText>
          Выпускная квалификационная работа студента 4 курса 6 группы Выдро
          Артема
        </FooterText>
      </Footer>
    </MainPageWrapper>
  )
}

export default MainPage
