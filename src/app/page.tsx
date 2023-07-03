'use client';

import Image from 'next/image'
import styles from './page.module.css'
import {Button} from '../components/ButtonKimura';
// import { Button } from '@/stories/Button';

export default function Home() {
 const test = () => {
  console.log("#####test")
 }
 function test2(){
  console.log("#####test2") 
 }

 return (
  <>
  <h1>テスト</h1>
  <p>
      <button type="button" onClick={test}>
                Delete Todo
      </button>
  </p>
  <Button label='test' onClick={test}></Button>
  </>

)
  // return (
  //   <>
  //   <h1>テスト</h1>
  //   <p>
  //       <button type="button" onClick={test}>
  //                 Delete Todo
  //       </button>
  //   </p>
  //   <Button onClick={test2}>Hello!</Button>
  //   </>
 
  // )
}
