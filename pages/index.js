import Head from 'next/head'
import Image from 'next/image'

import { ServiceSection, TestomonialSection } from '../components/home'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Minify It Service</title>
        <meta name="description" content="Pokhara based software company. Providing you with high quality web services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles['hero-wrapper']}>
        <div className={styles['hero-text--wrapper']}>
            <div className={styles['hero-text']}>
                <h1>Expand your business</h1>
                <h4>
                    Grow your business with us,
                    as we minify your code and digital work
                </h4>
            </div>

            <button className={styles['hero-btn']}>
                Work with us
            </button>
        </div>
        <div className={styles['hero-image--wrapper']}>
            <img src='/assets/img/minify-hero--image.png' alt="man working on laptop" />
        </div>
    </div>
    <div className={styles['service-section--wrapper']}>
        <div className={styles['service-section']}>
            <h2>Services We Provide</h2>
            <div className={styles['services-wrapper']}>
                <ServiceSection 
                    title="Web development"
                    icon='/assets/logo/web-dev-icon.png'
                    description="Responsive, attractive yet simple websites with all features you ever want in your website"
                />
                <ServiceSection 
                    title="Logo design"
                    icon='/assets/logo/logo-design-icon.png'
                    description="Get best logo designs which is the foundation of your brand identity and separates you from the rest"
                />
                <ServiceSection 
                    title="Web design"
                    icon='/assets/logo/web-design-icon.png'
                    description="Innovative website design process for the best UI/UX design of your product"
                />
                <ServiceSection 
                    title="SEO"
                    icon='/assets/logo/seo-icon.png'
                    description="A comprehensive and professional SEO service to get your business more visibility in search"
                />
                <ServiceSection 
                    title="Hosting"
                    icon='/assets/logo/hosting-icon.png'
                    description="Fast, reliable and quality web hosting service with great features"
                />
                <ServiceSection 
                    title="Support and updates"
                    icon='/assets/logo/support-icon.png'
                    description="Get immediate web support incase any error occurs in your website"
                />
            </div>
        </div>
    </div>
    <div className={styles['how-work--wrapper']}>
        <div className={styles['how-work-section--wrapper']}>
            <h2>How We Work</h2>
            <div className={styles['how-work--section']}>
                <p>
                    All of our team members work from home maximizing the work time while minimizing
                    the commute time. But with meetings every other day, we all communicate and work
                    together to provide you solution for your problem. We follow a sequential work
                    process that result in a desirable output.
                    You have a project, we DESIGN, CODE and DELIVER.
                </p>
                <img src="https://images.unsplash.com/photo-1615576446086-23d3f016875a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvZnR3YXJlJTIwbGFwdG9wfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="laptop on a table" title="from unspash.com" />
            </div>
        </div>
    </div>
    <div className={styles['testomonial-wrapper']}>
        <h2>As They Say</h2>
        <div className={styles['testomonals']}>
            <TestomonialSection 
                imageUrl="https://media.istockphoto.com/photos/portrait-young-confident-smart-asian-businessman-look-at-camera-and-picture-id1288538088?b=1&k=20&m=1288538088&s=170667a&w=0&h=3efMku7kSXUhpVrErAVVgxp6G91tRZ_5seygOn68RnE="
                name="Jhon Doe"
                say="They did a great job pulling out every ounces of our business to new heights with our newly build website"
            />
            <TestomonialSection 
                imageUrl="https://images.unsplash.com/photo-1559541763-8d067061e72f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxwZXJzb25zJTIwc21pbGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                name="Jane Doe"
                say="They did a great job pulling out every ounces of our business to new heights with our newly build website"
            />
            <TestomonialSection 
                imageUrl="https://media.istockphoto.com/photos/portrait-young-confident-smart-asian-businessman-look-at-camera-and-picture-id1288538088?b=1&k=20&m=1288538088&s=170667a&w=0&h=3efMku7kSXUhpVrErAVVgxp6G91tRZ_5seygOn68RnE="
                name="Jhon Doe"
                say="They did a great job pulling out every ounces of our business to new heights with our newly build website"
            />
            <TestomonialSection 
                imageUrl="https://images.unsplash.com/photo-1559541763-8d067061e72f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxwZXJzb25zJTIwc21pbGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                name="Jane Doe"
                say="They did a great job pulling out every ounces of our business to new heights with our newly build website"
            />
        </div>
        <div className={styles['testomonial-handler--wrapper']}>
            <div className={`${styles['testomonial-handlers']} ${styles['active-testomonial--handler']}`} />
            <div className={styles['testomonial-handlers']} />
        </div>
    </div>
    </>
  )
}
