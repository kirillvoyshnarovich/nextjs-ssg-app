"use client";
import { FC, memo } from 'react';
import Image from "next/image";
import styles from "./TopBanner.module.css";
import { useEffect, useRef, useState } from "react";
import classNames from '@/utils/classNames';
import ariaLabels from '@/utils/ariaLabelDescriptions';

const TopBanner: FC<any> = ({ displayBanner, hiddenBunner }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hiddenBanner, setHiddenBanner] = useState(false);

  useEffect(() => {
    if (!hiddenBunner) {
      let bannerElement = ref.current as HTMLDivElement
      let observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true) {
          console.log('Element is visible');
        } else {
          console.log('Element is not visible');
          displayBanner();
          observer.unobserve(bannerElement);
        }
      }, { threshold: [0] });
  
      if (ref.current) {
        observer.observe(bannerElement);
      }
      return () => observer.unobserve(bannerElement);
    }
  }, [ref, displayBanner, hiddenBunner]);


  return (
    <section role="banner" className={styles.bannerHeader} style={{ display: hiddenBanner ? 'none' : 'flex' }} ref={ref}>
      <Image
        src="/banner-header.png"
        alt="Picture inside banner"
        height={54}
        width={212}
      />
      <h3 className={styles.bannerHeader__info}>
        <strong className={styles.textBold}>Black Friday</strong>
        <span className={styles.bannerHeader__info_text}>, 24-27 Nov</span> 
        <b className={classNames(styles.textYellow, styles.gap)}>10%OFF</b>
        <span className={styles.bannerHeader__info_text_code}>Use code 
          <strong className={classNames(styles.textYellow, styles.textBold)}> 10FRIDAY</strong>
        </span>
        <span className={styles.bannerHeader__info_text}> at checkout</span>
      </h3>
      <a className={styles.bannerHeader__button} href="https://google.com" target="_blank">Shop now</a>
      <button aria-label={ariaLabels.hideBanner} className={styles.bannerHeader__close} onClick={() => setHiddenBanner(true)}>
        <Image
          src={"icons/close.svg"}
          alt="Close button"
          width={24}
          height={24}
        />
      </button>
    </section>
  );
};

export default memo(TopBanner);
