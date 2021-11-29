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
                        <div className="col">
                        <h1>General English</h1>
                        <Link href="/">
                        <a className="btn btn-primary">Read more</a>
                        </Link>
                        </div>
                        <div className="col">
                        <h1>Business English</h1>
                        <Link href="/">
                            <a className="btn btn-primary">Read more</a>
                        </Link>
                        </div>
                        <div className="col">
                        <h1>Grammar </h1>
                        <br/>
                        <Link href="/">
                            <a className="btn btn-primary">Read more</a>
                        </Link>
                        </div>
                        <div className="col">
                        <h1>Grammar </h1>
                        <br/>
                        <Link href="/">
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
