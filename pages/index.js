import Head from 'next/head';
import Link from 'next/link';
import Layout, {siteTitle} from '../components/layout';
import utilsStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts';

export default function Home() {
  return (
   <Layout home>
     <Head>
       <title>{siteTitle}</title>
     </Head>
     <section className={utilsStyles.headingMd}>
       <p>I am a Front-end developer</p>
       <p>PDP</p>
       </section>
   </Layout>
  )
}

export async function getStaticProps(){
  const allPostsData=getSortedPostsData()

  return{
    props:{
      allPostsData
    }
  }
}
