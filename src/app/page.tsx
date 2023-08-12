import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      Hello, NextJS!
      <br />
      <img src={'/next.svg'}  alt={'next svg'} width={'400'}/>
    </>
  )
}
