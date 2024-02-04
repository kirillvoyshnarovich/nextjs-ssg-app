"use client";
import Image from "next/image";
import { FC, memo } from 'react';
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import formatedDate from "../../utils/formatedDate";
import ariaLabels from '@/utils/ariaLabelDescriptions';

const Header: FC<any> = () => {
  const [time, setTime] = useState<Date>(new Date());
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className={styles.header}>
      {/* dateTime={time?.toString()} */}
      <time className={styles.timer}>
        {formatedDate(time)}
      </time>
      <div className={styles.statusBar}>
        <Image
          src="icons/cellular_connection.svg"
          alt="Cellular connection status"
          height={13}
          width={20}
          aria-label={ariaLabels.cellularIndicator}
        />
        <Image
          src="icons/wifi.svg"
          alt="Wifi control status"
          height={13}
          width={18}
          style={{marginLeft: 8}}
          aria-label={ariaLabels.wifiIndicator}
        />
        <Image
          src="icons/battery.svg"
          alt="Battery status"
          height={13}
          width={28}
          style={{marginLeft: 8}}
          aria-label={ariaLabels.batteryIndicator}
        />
      </div>
    </header>
  );
};

export default memo(Header);
