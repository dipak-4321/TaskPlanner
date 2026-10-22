import React from 'react'
import {Badge} from 'antd'

const App = () => {
  return (
    <div className='bg-green-100 h-screen relative'>
      <nav className='h-[60px] bg-amber-300 top-0 fixed w-full'></nav>

      <section className='h-[calc(100%-120px)] fixed top-[60px] bg-fuchsia-300 '>
        <div className='w-12'>
          <Badge.Ribbon text="love you" />
        </div>
      </section>

      <footer className='h-[60px] bg-red-300 w-full absolute bottom-0'></footer>
    </div>
  )
}

export default App