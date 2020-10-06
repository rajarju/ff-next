/* 
* <license header>
*/

import React from 'react'
import Link from 'next/link'

function SideBar() {
  return (
    <ul className="SideNav">
      <li className="SideNav-item">
        <Link className="SideNav-itemLink" activeClassName="is-selected" aria-current="page" exact href="/">
          <a className="SideNav-itemLink">Home</a>
        </Link>
      </li>
      <li className="SideNav-item">
        <Link className="SideNav-itemLink" activeClassName="is-selected" aria-current="page" href="/about">
          <a className="SideNav-itemLink">About Project Firefly Apps</a>
        </Link>
      </li>
      <li className="SideNav-item">
        <Link className="SideNav-itemLink" activeClassName="is-selected" aria-current="page" href="/about-mdx">
          <a className="SideNav-itemLink">About MDX</a>
        </Link>
      </li>
    </ul>
  )
}

export default SideBar
