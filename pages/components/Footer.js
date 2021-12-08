import React from 'react'
import Link from 'next/dist/client/link'

function Footer() {
    return (
        <div className="list-unstyled fw-bold text-center text-dark fw-bold">
            <ul>
            <Link href="/Terms">
                <li className="list-unstyled text-center"><a>Terms & conditions</a></li>
               
            </Link>
            <Link href="/Refunds">
                <li className="list-unstyled text-center"><a>Refunds</a></li>
               
            </Link>
            </ul>
        </div>
    )
}

export default Footer
