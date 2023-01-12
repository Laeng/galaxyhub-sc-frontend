import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import MainHeroSection from "../components/sections/app/main-hero-section";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <MainHeroSection/>
    </>
  )
}
