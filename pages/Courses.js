import React from 'react'
import Nav from './components/Nav'
import Logo from './components/Logo'
import Image from 'next/image'
import Link from 'next/link'
import ExpandText from 'react-expand-text';


class Courses extends React.Component {

    render() {
        return (
            <div>
                <Logo/>
                <Nav/>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                        <h1>General English</h1>
                        <Link href="/Generaleng">
                        <a className="btn btn-primary">Read more</a>
                        </Link>
                        </div>
                        <div className="col-4">
                        <h1>Business English</h1>
                        <Link href="/Businesseng">
                            <a className="btn btn-primary">Read more</a>
                        </Link>
                        </div>
                        <div className="col-4">
                        <h1>Custom subject</h1>
                        <br/>
                        <Link href="/Customeng">
                            <a className="btn btn-primary">Read more</a>
                        </Link>
                        </div>
                        <div className="col-4">
                        <h1>Grammar </h1>
                        <br/>
                        <Link href="/Grammareng">
                            <a className="btn btn-primary">Read more</a>
                        </Link>
                        </div>
                        <div className="col-4">
                        <h1>IELTS</h1>
                        <br/>
                        <Link href="/Ielts">
                            <a className="btn btn-primary">Read more</a>
                        </Link>
                        </div>
                        <div className="col-4">
                        <h1>Beginners English</h1>
                        <br/>
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
