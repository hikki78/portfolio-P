import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdNorthEast } from 'react-icons/md'
import { SiLeetcode } from 'react-icons/si'
import styles from '../styles/mainheader.module.scss'

export function SocialIcons({ scrollFunction }: any) {
  return (
    <>
      <div className={`${styles.socialIconsContainer} flex items-center justify-center`}>
        <div className={`${styles.header__socialIcons} flex items-center justify-center`}>
          <div>
            <FaGithub />
            <a target="_blank" href="https://github.com/hikki78" rel="noopener noreferrer" className={styles.iconNames}>
              Github
            </a>
            <MdNorthEast />
          </div>
          <div>
            <FaTwitter />
            <a target="_blank" href="https://twitter.com/hikki_78" rel="noopener noreferrer" className={styles.iconNames}>
              Twitter
            </a>
            <MdNorthEast />
          </div>
          <div>
            <FaLinkedin />
            <a target="_blank" href="https://www.linkedin.com/in/hikki78/" rel="noopener noreferrer" className={styles.iconNames}>
              LinkedIn
            </a>
            <MdNorthEast />
          </div>
          <div>
            <SiLeetcode />
            <a target="_blank" href="https://leetcode.com/Hikki78/" rel="noopener noreferrer" className={styles.iconNames}>
              Leetcode
            </a>
            <MdNorthEast />
          </div>
        </div>
      </div>
      <div className={styles.divSayHi}>
        <a onClick={() => scrollFunction()} className={styles.sayHi}>
          Say Hi 👋
        </a>
      </div>
    </>
  )
}
