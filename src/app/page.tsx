"use client";
import styles from "./page.module.css";
import MainBanner from "../components/MainBanner";
import TopBanner from "../components/TopBanner";
import Header from "../components/Header";
import { useEffect, useState, useCallback } from "react";

export default function Home() {
  const [hiddenBunner, setHiddenBanner] = useState(false);
  const [displayMainBanner, setDisplayMainBanner] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const bannerIsHidden = !!localStorage.getItem('tangem_bodyBannerIsHidden')
      setHiddenBanner(bannerIsHidden);
    }
  }, []);

  const setHidden = useCallback(() => {
    setHiddenBanner(true);
    localStorage.setItem('tangem_bodyBannerIsHidden', 'true');
  }, [])

  const displayBanner = useCallback(() => {
    setDisplayMainBanner(true);
  }, [])

  return (
    <>
      <main className={styles.main}>
        <Header />
        <TopBanner displayBanner={displayBanner} hiddenBunner={hiddenBunner} />
      </main>
      <MainBanner displayMainBanner={displayMainBanner} hiddenBunner={hiddenBunner} setHidden={setHidden} />
    </>    
  );
}
