import React from 'react'
import {
  MainPageWrapper,
  Logo,
  HeaderLink,
  Header,
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
} from './MainPage.styles'

import { Link } from 'react-router-dom'

import { Button, AllPlaces } from '../../components'

import logo from './../../assets/logo.svg'
import backFrames from './../../assets/back-frames.svg'

const MainPage = () => {
  return (
    <MainPageWrapper>
      <Header>
        <Logo src={logo} alt=""></Logo>
        <HeaderLink href="">О проекте</HeaderLink>
        <HeaderLink href="">Цена</HeaderLink>
        <HeaderLink href="">Контакты</HeaderLink>
      </Header>
      <MainSection>
        <Text>
          Хочешь забронировать стол в любимом месте, но не хочешь звонить? Ты
          хочешь выбрать стол и посмотреть где он находится? Тогда система
          бронирования “Броня” отлично подойдет для тебя. Найди любимое
          заведение сейчас!
        </Text>
        <Link to="/">
          <Button state="start" text="Посмотреть" />
        </Link>
        <BackFrames src={backFrames} alt="" />
      </MainSection>
      <All>
        <Partners>Партнеры</Partners>
        <AllPlaces></AllPlaces>
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
      <Footer></Footer>
    </MainPageWrapper>
  )
}

export default MainPage
