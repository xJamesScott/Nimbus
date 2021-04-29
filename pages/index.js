import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Section, SectionIndent, HomeBannerImg, BannerContainer } from '../components/SectionIndent'
import NavBar from '../components/NavBar'
import homeBanner from "../public/images/homeBanner.jpg"
import MainCTA from '../components/MainCTA'

export default function Home() {
  return (
    <>


      <Section
        className="main-banner">
        <SectionIndent>
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
    </>
  )
}
