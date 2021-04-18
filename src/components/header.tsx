import React from 'react'
import {Link} from 'gatsby'

const Header: React.FC = ()=> {
    return (
      <header>
        <ul>
          <div className="container mx-auto h-16 text-center text-3xl text-san mt-8 ">
            Takuro's portfolio
          </div>
          <li>
            {/* <Link to="/">top</Link> */}
          </li>
        </ul>
      </header>
    )
}
export default Header;