import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Section, SectionIndent, SectionContainer, HomeBannerImg, BannerContainer, SectionTitle } from '../components/SectionIndent'
import NavBar from '../components/NavBar'
import homeBanner from "../public/images/homeBanner.jpg"
import MainCTA from '../components/MainCTA'
import easyImg from '../public/images/easy.jpg'
import currency from '../public/images/currency.jpg'
import { CardContainer, CardWrapper, Card, CardText } from '../components/Cards'

export default function Home() {
  return (
    <>


      <Section
        className="main-banner">
        <SectionIndent

        >
          <NavBar />
        </SectionIndent>
        <HomeBannerImg
          src={homeBanner}
          className="main-banner-img"
        />
        <BannerContainer>
          <SectionIndent
            className="banner-text"
          >
            <h1>MAKE BUDGETS <br /> A BREEZE</h1>
            <h3>Cloud budget management for everyone. Free 30 Day Trial, cancel anytime. No strings.</h3>
            <MainCTA />
          </SectionIndent>
        </BannerContainer>
      </Section>
      <Section>
        <SectionIndent
          className="easy-section"
        >
          <div className="easy-text">
            <h3>Easy to Use Cloud Budget Management Software</h3>
            <p>Our software is made so you can access and manage your budget and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spending patterns and budget at a glance. Read below to find out more.</p>
            <a href="">Learn More</a>
          </div>
          <img src={easyImg} alt="easy" />
        </SectionIndent>
      </Section>

      <Section className="features-section">
        <SectionContainer>
          <SectionTitle>
            <h3>Features</h3>
          </SectionTitle>
          <SectionIndent>
            <CardContainer
            className="features"
            >
              <CardWrapper>
                <Card>
                  <img src={currency} alt="" />
                  <CardText>
                    <h4>Supports All Currencies and Cards</h4>
                    <p>We support all popular currencies and is fully customizable to add</p>
                    <a href="">Read More</a>
                  </CardText>
                </Card>
              </CardWrapper>
              <CardWrapper>
                <Card>
                  <img src={currency} alt="" />
                  <CardText>
                    <h4>Supports All Currencies and Cards</h4>
                    <p>We support all popular currencies and is fully customizable to add</p>
                    <a href="">Read More</a>
                  </CardText>
                </Card>
              </CardWrapper>
              <CardWrapper>
                <Card>
                  <img src={currency} alt="" />
                  <CardText>
                    <h4>Supports All Currencies and Cards</h4>
                    <p>We support all popular currencies and is fully customizable to add</p>
                    <a href="">Read More</a>
                  </CardText>
                </Card>
              </CardWrapper>
              
            </CardContainer>
          </SectionIndent>
          <div>yoo</div>
          <div>yoo</div>
        </SectionContainer>
      </Section>
    </>
  )
}
