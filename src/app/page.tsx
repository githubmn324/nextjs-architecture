"use client";

import { Button } from "../components/ButtonKimura";
// import { Button } from '@/stories/Button';

export default function Home() {
  const test = () => {
    console.log("#####test");
  };
  function test2() {
    console.log("#####test2");
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">テスト</h1>
      <div>
        <h1>テスト2</h1>
      </div>

      <p>
        <button
          className="bg-gray-400 hover:bg-gray-300 text-white rounded px-4 py-2"
          onClick={test}
        >
          Delete Todo
        </button>
      </p>
      <br></br>
      <p>
        <Button label="test" onClick={test2}></Button>
      </p>
    </>
  );
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
