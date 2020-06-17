import React from 'react'
import {Link} from 'gatsby'

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to = "/" > Home</Link>

                    </li>

                    <li>
                        <Link to = "/blog" > Blog</Link>

                    </li>

                    <li>
                        <Link to = "/product" > Product</Link>

                    </li>

                    <li>
                        <Link to = "/examples" > Examples</Link>

                    </li>

                    <li>
                        <Link to = "/images" > Images</Link>

                    </li>

                </ul>

            </nav>
        </div>
    )
}
