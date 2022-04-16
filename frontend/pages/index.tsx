import type { NextPage } from 'next'
import Image from 'next/image';

import Header from '../components/Header'
import styles from '../styles/Main.module.css';
import bg_top from '../public/images/bg-top.jpg';
import logo from '../public/images/lolchessgg-logo-bkbg.png';
import banner_naver from '../public/images/banner-naver-search-20211116.png';

import SearchBox from '../components/SearchBox';
import MetaDeck from '../components/MetaTrends/Deck';


const Home: NextPage = () => {
  return (
    <div>
      <Header/>
      <div className={styles.main_top_box}>
        <Image 
          src={logo} 
          width = {238}
          height = {50}
          alt='Logo'
        />
        <SearchBox name="main"/>
        <Image 
          src={banner_naver} 
          width = {232}
          height = {79}
          alt='BannerNaver'
        />
      </div>
      <div className={styles.main_container}>
        <MetaDeck/>
      </div>
      
    </div>
  )
}
// export const getServerSideProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`);
//   const posts = await res.json();
//   return {
//     props : {
//       posts
//     }
//   }
// }
export default Home
