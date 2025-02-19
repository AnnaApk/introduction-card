import wedding from '../../assets/wedding.jpg';
import altay from '../../assets/altay.jpg';
import ser from '../../assets/serbia.jpg';
import styles from './gallery.module.css';
import Image from 'next/image';

export function Gallery() {
  return (
    <div class={styles.gallery}>
      <Image className={styles.img} src={wedding} alt="" />
      <Image className={styles.img} src={altay} alt="" />
      <Image className={styles.img} src={ser} alt="" />
    </div>
)}
