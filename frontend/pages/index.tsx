import type { NextPage } from 'next'
import Header from '../components/Header'


const Home: NextPage = () => {
  return (
    <div>
      <Header/>
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
