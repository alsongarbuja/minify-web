import React from 'react'
import { ArrowLeft } from 'react-feather'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

const TermsCondition = () => {
    return (
        <div
            style={{
                padding: '2em',
             }}
        >
            <Head>
                <title>Terms and Conditions</title>
                <meta name="description" content="Terms and conditions applied when working with Minify IT Service." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="stackedit">
                <div className="stackedit__html">
                <Link href="/"><ArrowLeft style={{ 
                    cursor: 'pointer',
                 }}/></Link>
                <div className={styles['logo-holder']}>
                    <img src='/M-purple.svg' alt="minify" style={{ float: 'right', }} />
                </div>
                <h1 id="terms-and-condition">Terms and Condition</h1>
            <h2 id="unregistered">UnRegistered</h2>
            <ul>
            <li>Minify IT service is an unregistered company, though we will provide you with all facilities any software company
                provides or, even more than others. Still if you are to be involved in any illegal or law related problems than 
                you are responsible for yourself, we at Minify IT Service will not be held responsible.
            </li>
            </ul>
            </div>
            </div>
        </div>
    )
}

export default TermsCondition
