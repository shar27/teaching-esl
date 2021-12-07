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
                <div className="container ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-6 col-sm-12 col-lg-4 ms-3 me-2 border border-white shadow mb-4">
                        <h1>General English</h1>
                        <Image
                            src="/generall.jpg"
                            width="400"
                            height="400"
                        />
                        <p className="lead">General English course structured to help you achieve your goals.</p>
                        <Link href="/Generaleng">
                        <a className="btn btn-primary mb-4">Read more</a>
                        </Link>
                        </div>
                        <div className="col-6 col-sm-12 col-lg-4 p-2 ms-3 me-2 border border-white shadow mb-4">
                        <h1>Business English</h1>
                        <Image
                            priority="true"
                            src="/business.jpg"
                            width="400"
                            height="400"
                        />
                        <p className="lead">Business English course structured to help you achieve your goals.</p>
                        <Link href="/Businesseng">
                            <a className="btn btn-primary mb-4">Read more</a>
                        </Link>
                        </div>
                        <div className="col-6 col-sm-12 col-lg-4 p-2 ms-3 me-2 border border-white shadow ">
                        <h1>Custom Subject</h1>
                        <Image
                            src="/custom.jpg"
                            width="400"
                            height="400"
                        />
                        <p className="lead">Custom English course that is flexible in topics to help you.</p>
                        <Link href="/Customeng">
                            <a className="btn btn-primary mb-4">Read more</a>
                        </Link>
                        </div>
                        <div className="col-6 col-sm-12 col-lg-4 p-2 ms-3 me-2 border border-white shadow mt-1">
                        <h1>Grammar</h1>
                        <Image
                            src="/grammarbook.jpg"
                            width="400" 
                            height="400"
                        />
                        <p className="lead">Grammar course structured to help you finally understand key structures in the English language.</p>
                        <Link href="/Grammareng">
                            <a className="btn btn-primary">Read more</a>
                        </Link>
                        </div>
                        <div className="col-6 col-sm-12 col-lg-4 mt-4 ms-3 me-2 p-2 border border-white shadow">
                        <h1>IELTS</h1>
                        <Image
                            src="/ielts.jpg"
                            width="400"
                            height="400"
                        />
                        <p className="lead">IELTS course structured to improve your IELTS score and achieve your goals.</p>
                        
                        <Link href="/Ielts">
                            <a className="btn btn-primary mt-4">Read more</a>
                        </Link>
                        </div>
                        <div className="col-6 col-sm-12 col-lg-4 mt-4 ms-3 me-2 p-2 border border-white shadow">
                        <h1>Beginner English</h1>
                        <Image
                            src="/words.jpg"
                            width="400"
                            height="400"
                        />
                        <p className="lead">English course structured to give you an entry point in to the language.</p>
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
