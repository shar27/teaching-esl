import React from 'react'
import Nav from './components/Nav'
import Logo from './components/Logo'
import Image from 'next/image'
import Link from 'next/link'
import ExpandText from 'react-expand-text';
import Head from 'next/dist/shared/lib/head'

class Courses extends React.Component {

    render() {
        return (
            <div>
            <Head>
            <title>Courses</title>
            <meta name="description" content="All courses provided by me." />
        <link rel="icon" href="/teachinglogo.png" />
            </Head>
                <Logo/>
                <Nav/>
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-sm-12 col-lg-6 border border-white shadow mb-4">
                        <h1>General English</h1>
                        <p>General English course structured to help you achieve your goals.</p>
                        <Link href="/Generaleng">
                        <a className="btn btn-primary mb-4">Read more</a>
                        </Link>
                        </div>
                        <div className="col-6 col-sm-12 col-lg-6 border border-white shadow mb-4">
                        <h1>Business English</h1>
                        <p>Business English course structured to help you achieve your goals.</p>
                        <Link href="/Businesseng">
                            <a className="btn btn-primary mb-4">Read more</a>
                        </Link>
                        </div>
                        <div className="col-6 col-sm-12 col-lg-6 border border-white shadow ">
                        <h1>Custom subject</h1>
                        <p>Custom English course that is flexible in topics to help you.</p>
                        <Link href="/Customeng">
                            <a className="btn btn-primary mb-4">Read more</a>
                        </Link>
                        </div>
                        <div className="col-6 col-sm-12 col-lg-6 border border-white shadow">
                        <h1>Grammar</h1>
                        <p>Grammar course structured to help you finally understand key structures in the English language.</p>
                        <Link href="/Grammareng">
                            <a className="btn btn-primary">Read more</a>
                        </Link>
                        </div>
                        <div className="col-6 col-sm-12 col-lg-6 mt-4 border border-white shadow">
                        <h1>IELTS</h1>
                        <p>IELTS course structured to improve your IELTS score and achieve your goals.</p>
                        
                        <Link href="/Ielts">
                            <a className="btn btn-primary mt-4">Read more</a>
                        </Link>
                        </div>
                        <div className="col-6 col-sm-12 col-lg-6 mt-4 border border-white shadow">
                        <h1>Beginner English</h1>
                        <p>English course structured to give you an entry point in to the language.</p>
                        <Link href="/Beginners">
                            <a className="btn btn-primary mt-3">Read more</a>
                        </Link>
                        </div>
        
                    </div>
                </div>
            </div>
    
        )

}
   
    
    
}

export default Courses
