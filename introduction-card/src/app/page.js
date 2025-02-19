import Image from "next/image";
import "i18next";
import styles from "./page.module.css";
import { LangChoice } from "@/components/langChoice/LangChoice";
import { Info } from "@/components/info/Info"
// import { Gallery } from "@/components/galary/Gallery";
import { Bans } from "@/components/bans/Bans";
import us from "../assets/DSC_6760.jpg";
import Link from "next/link";

export default function Home() {

  return (
    <div className={styles.page}>
      <header className={styles.header} >
      <LangChoice />
      </header>
      <main className={styles.main}>

        <Info >
          <Bans />
        </Info>
       
        {/* <Gallery /> */}

        <Link href='https://google.com' target="blanket" >GOOGLE</Link>

        <Image src={us} alt=" " className={styles.photo} />

      </main>
      <footer className={styles.footer}>
    
      </footer>
    </div>
  );
}
