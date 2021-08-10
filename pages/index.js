import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Section, SectionIndent, SectionContainer, HomeBannerImg, BannerContainer, SectionTitle } from '../components/SectionIndent'
import NavBar from '../components/NavBar'
import homeBanner from "../public/images/homeBanner.jpg"
import MainCTA from '../components/MainCTA'
import easyImg from '../public/images/easy.jpg'
import currency from '../public/images/currency.png'
import cloudBudget from '../public/images/cloud-budget.png'
import manage from '../public/images/manage.png'
import cloudStorage from '../public/icons/cloud-storage.svg'
import secure from '../public/icons/secure.svg'
import pdf from '../public/icons/pdf-download.svg'
import csv from '../public/icons/csv-download.svg'
import playstore from '../public/icons/play-store.svg'
import appstore from '../public/icons/app-store.svg'
import windows from '../public/icons/windows.svg'
import stayFocused from '../public/images/stay-focused.png'
import { CardContainer, CardWrapper, Card, CardText, CardTextTech, GiantText } from '../components/Cards'
import { ContactForm } from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>

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
            <h1 className="main-title">MAKE BUDGETS <br /> A BREEZE</h1>
            <h3>Cloud budget management for everyone. Free 30 Day Trial, cancel anytime. No strings.</h3>
            <MainCTA />
          </SectionIndent>
        </BannerContainer>
      </Section>

      <Section>
        <SectionIndent
          id="overview"
          className="easy-section"
        >
          <div className="easy-text">
            <h2>Easy to Use Cloud Budget Management Software</h2>
            <p>Our software is made so you can access and manage your budget and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spending patterns and budget at a glance. Read below to find out more.</p>
            <a href="">Learn More</a>
          </div>
          <div
            className="img-wrap"
          >
            <img src={easyImg} alt="easy" />
          </div>
        </SectionIndent>
      </Section>

      <Section
        id="features"
        className="features-section">
        <SectionContainer>
          <SectionTitle>
            <h2>Features</h2>
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
                  <img src={manage} alt="" />
                  <CardText>
                    <h4>Manage your expenses on the go</h4>
                    <p>You can access your account from anywhere in the world on any device</p>
                    <a href="">Read More</a>
                  </CardText>
                </Card>
              </CardWrapper>

              <CardWrapper>
                <Card>
                  <img src={cloudBudget} alt="" />
                  <CardText>
                    <h4>Cloud Budget Management Software</h4>
                    <p>Our software is made so you can access and manage your budget</p>
                    <a href="">Read More</a>
                  </CardText>
                </Card>
              </CardWrapper>

            </CardContainer>
          </SectionIndent>
        </SectionContainer>
      </Section>

      <Section
        id="technology"
        className="technology">
        <SectionContainer>
          <SectionTitle>
            <h2>Technology</h2>
          </SectionTitle>
          <SectionIndent>
            <CardContainer
              className="technology"
            >
              <CardWrapper
                className="technology"
              >
                <Card
                >
                  <GiantText>01</GiantText>
                  <CardTextTech>
                    <img src={cloudStorage} alt="" />
                    <h4>Cloud Storage</h4>
                    <p>Access your account from anywhere in the world on any device</p>
                  </CardTextTech>
                </Card>
                <Card>
                  <GiantText>02</GiantText>
                  <CardTextTech>
                    <img src={secure} alt="" />
                    <h4>Secure</h4>
                    <p>All your information is stored on secure cloud servers</p>
                  </CardTextTech>
                </Card>
                <Card>
                  <GiantText>03</GiantText>
                  <CardTextTech>
                    <img src={pdf} alt="" />
                    <h4>PDF Download</h4>
                    <p>Download any of your reports in PDF format</p>
                  </CardTextTech>
                </Card>
                <Card>
                  <GiantText>04</GiantText>
                  <CardTextTech>
                    <img src={csv} alt="" />
                    <h4>CSV Download</h4>
                    <p>All your information is stored on secure cloud servers</p>
                  </CardTextTech>
                </Card>

              </CardWrapper>


            </CardContainer>
          </SectionIndent>
        </SectionContainer>
      </Section>

      <Section
        className="focus"
      >
        <SectionContainer>
          <SectionIndent
            className="focus"
          >
            <div className="focus-text">
              <h2>Stay focused on saving money</h2>
              <p>It is important to stay focused on saving money in any way you can. We help you monitor your spending habits so you can easily spot and cut any unnecessary expenses. Simply join today to get started!</p>
              <div className="focus-icons">
                <img src={playstore} alt="" />
                <img src={appstore} alt="" />
                <img src={windows} alt="" />
              </div>
            </div>

            <img src={stayFocused} alt="" />
          </SectionIndent>
        </SectionContainer>
      </Section>

      <Section>
        <SectionContainer
          id="contact"
          className="contact"
        >
          <SectionIndent
            className="contact"
          >
            <div className="contact-content">
              <div>
                <h2>Contact</h2>
                <p>Questions or concerns? Just fill out the form below and our support team will get back to you within 24 hours</p>
              </div>
              <ContactForm>
                <input
                  className="half"
                  type="text"
                  placeholder="First Name" />
                <input
                  className="half"
                  type="text"
                  placeholder="Last Name" />
                <input
                  className="full"
                  type="text"
                  placeholder="Phone Number" />
                <input
                  className="full"
                  type="text"
                  placeholder="Phone Number" />
                <input id="form-button" type="submit" value="SUBMIT" />
              </ContactForm>
            </div>

          </SectionIndent>
        </SectionContainer>
      </Section >

      <Footer />

    </div>
  )
}
