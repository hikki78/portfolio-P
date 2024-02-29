import React, { forwardRef, useRef } from 'react'
import styles from '../../styles/message/message.module.scss'
import { FaEnvelope, FaPhone, FaLinkedin, FaTelegram, FaTwitter, FaPhoneAlt } from 'react-icons/fa'
import { MdNorthEast } from 'react-icons/md'
import GifHolder from './GifHolder'

const MessageComponent = (_props: any, ref: any) => {
  const messageRef = useRef(null)

  React.useImperativeHandle(ref, () => {
    return {
      // @ts-ignore
      scrollIntoView: () => messageRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' }),
    }
  })

  return (
    <div className={styles.messageComponent} ref={messageRef}>
      <div className={styles.messageContainer}>
        <div className={styles.headingContainer}>
          <h2 className={styles.messageHeading}>Get in touch </h2>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.messageContainer}>
            <GifHolder />
            <p>
              <FaTwitter /> Twitter: <a href="https://twitter.com/hikki_78">Hikki78</a> <MdNorthEast />
            </p>
            <p>
              <FaLinkedin /> LinkedIn: <a href="https://linkedin.com/in/meghadrimukherjee">Meghadri Mukherjee</a> <MdNorthEast />
            </p>
            <p>
              <FaPhoneAlt /> Phone Number: +91-6294398618
            </p>
            <p>
              <FaTelegram /> Telegram: @Megh78
            </p>
            <p>
              <FaEnvelope /> Email: meghadrimukherjee680@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default forwardRef(MessageComponent)
