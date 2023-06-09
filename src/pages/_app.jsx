import Navbar from '@/components/Navbar'
import TopDetailBar from '@/components/TopDetailBar';
import '@/styles/globals.css'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '600']
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <TopDetailBar />
      <Navbar />
      <div className={`${poppins.className} antialiased`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
