import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Section, SectionIndent, HomeBannerImg } from '../components/SectionIndent'
import NavBar from '../components/NavBar'
import homeBanner from "../public/images/homeBanner.png"

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
        />
        <SectionIndent>
          <h1>MAKE BUDGETS <br /> A BREEZE</h1>
          <h3>Cloud budget management for everyone. Free 30 Day Trial, cancel anytime</h3>
        </SectionIndent>

      </Section>
    </>
  )
}
