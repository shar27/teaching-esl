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
            </Head>
                <Logo/>
                <Nav/>
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-sm-12 col-lg-4">
                        <h1>General English</h1>
                        <p>General English course structured to help you achieve your goals.</p>
                        <Link href="/Generaleng">
                        <a className="btn btn-primary">Read more</a>
                        </Link>
                        </div>
                        <div className="col-4 col-sm-12 col-lg-4">
                        <h1>Business English</h1>
                        <p>Business English course structured to help you achieve your goals. 15 week course.</p>
                        <Link href="/Businesseng">
                            <a className="btn btn-primary">Read more</a>
                        </Link>
                        </div>
                        <div className="col-4 col-sm-12 col-lg-4">
                        <h1>Custom subject</h1>
                        <p>Custom English course that is flexible in topics to help you achieve your goals.</p>
                        <Link href="/Customeng">
                            <a className="btn btn-primary">Read more</a>
                        </Link>
                        </div>
                        <div className="col-4 col-sm-12 col-lg-4">
                        <h1>Grammar</h1>
                        <p>Grammar course structured to help you finally understand key structures in the English language.</p>
                        <Link href="/Grammareng">
                            <a className="btn btn-primary">Read more</a>
                        </Link>
                        </div>
                        <div className="col-4 col-sm-12 col-lg-4">
                        <h1>IELTS</h1>
                        <p>IELTS course structured to improve your IELTS course.</p>
                        <Link href="/Ielts">
                            <a className="btn btn-primary">Read more</a>
                        </Link>
                        </div>
                        <div className="col-4 col-sm-12 col-lg-4">
                        <h1>Beginner English</h1>
                        <p>English course structured to give you an entry point in to the language.</p>
                        <Link href="/Beginners">
                            <a className="btn btn-primary">Read more</a>
                        </Link>
                        </div>
        
                    </div>
                </div>
            </div>
    
        )

}
   
    
    
}

export default Courses
