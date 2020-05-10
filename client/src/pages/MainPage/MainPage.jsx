import React from 'react'
import {
  MainPageWrapper,
  Logo,
  Link,
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

import { Button, AllPlaces } from '../../components'

import logo from './../../assets/logo.svg'
import backFrames from './../../assets/back-frames.svg'

const MainPage = () => (
  <MainPageWrapper>
    <Header>
      <Logo src={logo} alt=""></Logo>
      <Link href="">О проекте</Link>
      <Link href="">Цена</Link>
      <Link href="">Контакты</Link>
    </Header>
    <MainSection>
      <Text>
        Хочешь забронировать стол в любимом месте, но не хочешь звонить? Ты
        хочешь выбрать стол и посмотреть где он находится? Тогда система
        бронирования “Броня” отлично подойдет для тебя
      </Text>
      <Button state="start" text="Узнать больше" />
      <BackFrames src={backFrames} alt="" />
    </MainSection>
    <All>
      <Partners>Партнеры</Partners>
      <AllPlaces></AllPlaces>
      <WhatBlock>
        <WhatBlockH1>Защищенный, удобный способ бронирования</WhatBlockH1>
        <WhatBlockP>
          Данные используются только для подтверждения бронирования. Используя
          систему “Броня”, вы можете быть уверены, что ваше места займете только
          вы
        </WhatBlockP>
        <WhatBlockImage></WhatBlockImage>
      </WhatBlock>
    </All>
    {/* <FooterLayer src={footerLayer} alt=""></FooterLayer> */}
    <Footer></Footer>
  </MainPageWrapper>
)

export default MainPage
