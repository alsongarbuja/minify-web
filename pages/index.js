import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import AOS from 'aos'
import Slider from 'react-slick'
import 'aos/dist/aos.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Airplay, Command, Crosshair, Facebook, Instagram, Mail, MessageCircle, Monitor, Server, Smartphone, Sun, Tool, Twitter } from 'react-feather'

import { ServiceSection, TestomonialSection, SideIndicator } from '../components/home'

import styles from '../styles/Home.module.css'

export default function Home() {

    const spotLight = useRef();
    const lightBulb = useRef();
    const [isDarkness, setIsDarkness] = useState(true)
    const [location, setLocation] = useState({
        x: -100,
        y: -100,
    })

    useEffect(() => {
        AOS.init()
    }, [])

    const updateSpotLight = e => {
        if(isDarkness)
            setLocation({ x: (e.screenX/window.innerWidth)*100, y: (e.screenY/window.innerHeight)*100 })
    }

    const toggleDarkness = () => {
        if(isDarkness){
            spotLight.current.style.display = 'none'
            setIsDarkness(false)
            lightBulb.current.classList.add(styles['active-light--btn'])
        }else{
            spotLight.current.style.display = 'block'
            setIsDarkness(true)
            lightBulb.current.classList.remove(styles['active-light--btn'])
        }
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
          <SideIndicator />
          <article className={`${styles.articles} ${styles['service-section']} flex`}>
              <h2 className={styles.h2}>Our Services</h2>
              <div className={styles['services-holder']}>
                  <div className={`${styles['services-top']} flex`}>
                      <ServiceSection 
                        icon={<Airplay />}
                        title='Web Dev'
                        duration='300'
                      />
                      <ServiceSection 
                        icon={<Crosshair />}
                        title='SEO'
                        duration='500'
                      />
                  </div>
                  <div className={`${styles['services-bottom']} flex`}>
                    <ServiceSection 
                        icon={<Command />}
                        title='Logo Design'
                        duration='300'
                    />
                    <ServiceSection 
                        icon={<Tool />}
                        title='Support'
                        duration='500'
                    />
                    <ServiceSection 
                        icon={<Server />}
                        title='Hosting'
                        duration='700'
                    />
                    <ServiceSection 
                        icon={<Monitor />}
                        title='Web Design'
                        duration='900'
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
                          <h6 className={styles.h6}>
                              <a href="mailto: minifyitservice@gmail.com" className={styles['hover-underline-animation']}>minifyitservice@gmail.com</a>
                          </h6>
                      </div>
                  </div>
                  <div className={styles.socials}>
                      <h6 className={styles.h6}>Social Links</h6>
                      <div className={styles['socials-holder']}>
                          <a href="#">
                              <Facebook />
                          </a>
                          <a href="#" target="_blank">
                              <Instagram className={styles.insta} />
                          </a>
                          <a href="#">
                              <Twitter />
                          </a>
                      </div>
                  </div>
              </div>
                <button className={`flex ${styles['chat-with-btn']}`}>
                    Chat With Us?
                    <span>
                        <MessageCircle />
                    </span>
                </button>
                
                <div 
                    onMouseMove={updateSpotLight}
                    ref={spotLight}
                    className={styles['dark-bg']}
                    style={{ 
                        background: `radial-gradient(circle at ${location.x}% ${location.y}%, transparent 130px, rgba(0,0,1,0.966) 150px)`,
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        // cursor: 'none',
                    }}
                >
                </div>
                <button className={styles['light-btn']} onClick={toggleDarkness} ref={lightBulb}>
                    <Sun />
                </button>
          </article>
          <article className={`${styles.articles} ${styles['about-section']}`}>
              <h2 className={`${styles.h2} ${styles['type-line']} ${styles['anim-typewriter']}`}>About Us and They Say</h2>
              <div className={`flex ${styles['about-section--text']}`}>
                  <p>
                    Minify is a software company based in Pokhara, Nepal with highly passionate 
                    engineers and designers to help you achieve your dream project.
                    With cutting edge technologies and customer satisfaction in mind, we aim for
                    better, faster and easier solutions to your problems.
                  </p>
                  {/* <div>

                  </div> */}
                  <Slider 
                    dots={true}
                    infinite={true}
                    autoplay={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                  >
                      <div>
                        <TestomonialSection
                            imageUrl="/assets/img/minify-hero--image.png"
                            name="Kirshna Prasad"
                            say="They did a great job pulling out every ounces of our business to new heights with our newly build website"
                        />
                      </div>
                      <div>
                        <TestomonialSection
                            imageUrl="/assets/img/minify-hero--image.png"
                            name="Jhon Doe"
                            say="They did a great job pulling out every ounces of our business to new heights with our newly build website"
                        />
                      </div>
                      <div>
                        <TestomonialSection
                            imageUrl="/assets/img/minify-hero--image.png"
                            name="Iyer"
                            say="They did a great job pulling out every ounces of our business to new heights with our newly build website"
                        />
                      </div>
                  </Slider>
              </div>
          </article>
          <footer className={styles.footer}>
              <h4>Minify It Services &copy; 2022</h4>
          </footer>
      </div>
    </>
  )
}
