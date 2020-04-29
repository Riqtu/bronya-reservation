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
    </All>
  </MainPageWrapper>
)

export default MainPage
