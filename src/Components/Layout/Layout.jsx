import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import { Toaster } from 'react-hot-toast';

export default function Layout({ children, title, description, keywords, author }) {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
                <meta name='author' content={author} />
                <title>{title}</title>
            </Helmet>

            <Header />

            <main style={{ height: "100%" }}>

                <Toaster />
                {children}
            </main>
            <div className="space"></div>
            <Footer />
        </>
    )
}


Layout.defaultProps = {
    title: '88*',
    description: 'Asthetic clothing Brand',
    keywords: 't-shirst, asthetic, branded, new look, ',
    author: '88*'

}