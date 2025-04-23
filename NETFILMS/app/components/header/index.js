import React from 'react'
import Link from 'next/link'
import { FaPlayCircle } from 'react-icons/fa'

import styles from './styles.module.css'
function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>

        <Link href='/' className='{styles.logo}'>      
            <FaPlayCircle/>
            NETFLIMS
        </Link>

        <nav className={styles.navigationMenu}>
          <Link href="/">Movies</Link>
          <Link href="/tv">Series</Link>
          <Link href="/about">Kids</Link>
        </nav>

      </div>
    </header>
  )
}

export default Header