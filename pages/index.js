import { useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Airplay, Command, Crosshair, Facebook, Instagram, Mail, MessageCircle, Monitor, Server, Smartphone, Tool, Twitter } from 'react-feather'

import { ServiceSection, TestomonialSection } from '../components/home'

import styles from '../styles/Home.module.css'

export default function Home() {

    const spotLight = useRef();

    function updateSpotlight(e) {
        // spotLight.current.style.background = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, transparent 130px, rgba(0, 0, 0, 0.966) 150px)`;
    }

  const handleTestMonial = () => {
      
  }

  return (
    <>
      <Head>
        <title>Minify It Service</title>
        <meta name="description" content="Pokhara based software company. Providing you with high quality web services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
          <article className={styles.articles}>
              <div className={styles['logo-holder']}>
                  <img src='/minifylogo.png' alt="minify" />
              </div>
              <div className={styles['hero-div']}>
                  <h3>Welcome To</h3>
                  <h1>MINIFY</h1>
              </div>
          </article>
          <article className={`${styles.articles} ${styles['service-section']} flex`}>
              <h2 className={styles.h2}>Our Services</h2>
              <div className={styles['services-holder']}>
                  <div className={`${styles['services-top']} flex`}>
                      <ServiceSection 
                        icon={<Airplay />}
                        title='Web Dev'
                      />
                      <ServiceSection 
                        icon={<Crosshair />}
                        title='SEO'
                      />
                  </div>
                  <div className={`${styles['services-bottom']} flex`}>
                    <ServiceSection 
                        icon={<Command />}
                        title='Logo Design'
                    />
                    <ServiceSection 
                        icon={<Tool />}
                        title='Support'
                    />
                    <ServiceSection 
                        icon={<Server />}
                        title='Hosting'
                    />
                    <ServiceSection 
                        icon={<Monitor />}
                        title='Web Design'
                    />
                  </div>
              </div>
              <div className={styles['service-texts']}>
                <h2 className={styles.h2}>Have Anything For Us?</h2>
                <h6 className={styles.h6}>We Got You</h6>
              </div>
          </article>
          <article className={styles.articles}>PROJECTS</article>
          <article className={`${styles.articles} ${styles['contact-section']}`}>
              <h2 className={styles.h2}>Find US</h2>
              <div className={`${styles['contacts-holder']} flex`}>
                  <div className={styles.contacts}>
                      <div className={`flex`}>
                          <span className={styles['contact-icons']}>
                              <Smartphone />
                          </span>
                          <h6 className={styles.h6}>9825140802 / 9846069180</h6>
                      </div>
                      <div className={`flex`} style={{ marginTop: '2em' }}>
                          <span className={styles['contact-icons']}>
                              <Mail />
                          </span>
                          <h6 className={styles.h6}>minifyitservice@gmail.com</h6>
                      </div>
                  </div>
                  <div className={styles.socials}>
                      <h6 className={styles.h6}>Social Links</h6>
                      <div className={styles['socials-holder']}>
                          <Facebook />
                          <Instagram />
                          <Twitter />
                      </div>
                  </div>
              </div>
                <button className={`flex ${styles['chat-with-btn']}`}>
                    Chat With Us?
                    <span>
                        <MessageCircle />
                    </span>
                </button>
                <button className={styles['light-btn']}>Light up</button>
                <div className={styles['dark-bg']} ref={spotLight} onMouseMove={updateSpotlight}></div>
          </article>
          <article className={`${styles.articles} ${styles['about-section']}`}>
              <h2 className={styles.h2}>About Us and They Say</h2>
              <div className={`flex ${styles['about-section--text']}`}>
                  <p>
                    Minify is a software company based in Pokhara, Nepal with highly passionate 
                    engineers and designers to help you achieve your dream project.
                    With cutting edge technologies and customer satisfaction in mind, we aim for
                    better, faster and easier solutions to your problems.
                  </p>
                  <TestomonialSection
                    imageUrl="/assets/img/minify-hero--image.png"
                    name="Kirshna Prasad"
                    say="They did a great job pulling out every ounces of our business to new heights with our newly build website"
                  />
              </div>
          </article>
          <article>FOOTER</article>
      </div>
    </>
  )
}
