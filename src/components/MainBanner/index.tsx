"use client";
import { FC, memo } from 'react';
import Image from "next/image";
import styles from "./MainBanner.module.css";
import classNames from '@/utils/classNames';
import ariaLabels from '@/utils/ariaLabelDescriptions';

const MainBanner: FC<any> = ({ displayMainBanner, setHidden, hiddenBunner }) => {
  return (
    !hiddenBunner
    ? (<section 
      role="banner" 
      className={classNames(styles.bannerBody, displayMainBanner && styles.bannerBody_visible)} 
    >
      <div className={styles.bannerBody__content}>
        <button aria-label={ariaLabels.hideBanner} className={styles.bannerBody__content_close} onClick={() => setHidden()}>
          <Image
            src={"icons/close.svg"}
            alt="Close button"
            width={24}
            height={24}
          />
        </button>
        <h3 className={styles.bannerBody__content_header}>Black Friday</h3>
        <h4 className={styles.bannerBody__content_discount}>10%OFF</h4>
        <p className={styles.bannerHeader__content_code}>Use code
          &nbsp;<span className={classNames(styles.textBold, styles.textYellow)}>10FRIDAY</span>&nbsp;
          at checkout
        </p>
        <a className={styles.bannerBody__content_button} href="https://google.com" target="_blank">
          Shop now <span className={styles.bannerBody__content_button_text}>through Monday</span>
        </a>
      </div>
    </section>)
    : null
  );
};

export default memo(MainBanner);
