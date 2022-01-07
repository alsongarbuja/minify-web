import React from 'react'
import { ArrowLeft } from 'react-feather'
import Link from 'next/link'
import Head from 'next/head'

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
            <div class="stackedit">
                <div class="stackedit__html">
                <Link href="/"><ArrowLeft style={{ 
                    cursor: 'pointer',
                 }}/></Link>
                <div className={styles['logo-holder']}>
                    <img src='/M-purple.svg' alt="minify" style={{ float: 'right', }} />
                </div>
                <h1 id="terms-and-condition">Terms and Condition</h1>
            <h2 id="unregistered">UnRegistered</h2>
            <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam error nobis veniam similique voluptas distinctio reprehenderit nihil, ipsa voluptates mollitia, a magnam quas iure deserunt ullam deleniti exercitationem illum tempore?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam error nobis veniam similique voluptas distinctio reprehenderit nihil, ipsa voluptates mollitia, a magnam quas iure deserunt ullam deleniti exercitationem illum tempore?</li>
            </ul>
            <h2 id="non-disclouser-agreement">Non-Disclouser Agreement</h2>
            <ul>
            <li>
            <h3 id="clients">Clients</h3>
            <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam error nobis veniam similique voluptas distinctio reprehenderit nihil, ipsa voluptates mollitia, a magnam quas iure deserunt ullam deleniti exercitationem illum tempore</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam error nobis veniam similique voluptas distinctio reprehenderit nihil, ipsa voluptates mollitia, a magnam quas iure deserunt ullam deleniti exercitationem illum tempore</li>
            </ul>
            </li>
            <li>
            <h3 id="employees">Employees</h3>
            <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam error nobis veniam similique voluptas distinctio reprehenderit nihil, ipsa voluptates mollitia, a magnam quas iure deserunt ullam deleniti exercitationem illum tempore</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam error nobis veniam similique voluptas distinctio reprehenderit nihil, ipsa voluptates mollitia, a magnam quas iure deserunt ullam deleniti exercitationem illu</li>
            </ul>
            </li>
            </ul>
            </div>
            </div>
        </div>
    )
}

export default TermsCondition
