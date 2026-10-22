import React from 'react'
import {Badge, Tag, Card} from 'antd'

import { Plus } from 'lucide-react'

const App = () => {
  return (
    <div className='bg-green-100 h-screen relative'>
      <nav className='h-[60px] bg-amber-300 top-0 fixed w-full'></nav>

      <section className='h-[calc(100%-120px)]  fixed top-[60px] w-full bg-fuchsia-300 grid grid-cols-3 gap-3 p-4 overflow-hidden'>
        <div className='overflow-auto overflow-x-hidden '>
          <Badge.Ribbon text="love you" className='!bg-pink-600'/>

          <div className=' bg-white rounded-2xl p-4 overflow-y-scroll '>

            <button className='bg-blue-500 text-white hover:bg-green-700 active:scale-95 flex py-2 px-3 rounded'>
              <Plus size={25} color="#ffffff" strokeWidth={0.95} />
              Add Task
            </button>
            
            <div className='my-3'>
              {Array(10).fill(12).map(()=>(
              <Card hoverable className='my-4!' >
                <Card.Meta title="Dilwale" description="jaaneman tu khub  hai tu mera mehbub hai"/>
             

              <div className='flex justify-between mt-3'>

              <div className='flex gap-4'>
                <Tag >Pending</Tag>
                <Tag className='bg-rose-500! text-white!' >Delete</Tag>
              </div>

              <div>
                <select placeholder="change placeholder">
                  <option value="pending">pending</option>
                  <option value="processing">processing</option>
                  <option value="completed">completed</option>
                </select>
              </div>

              </div>
               </Card>
               ))}
            </div>
 
          </div>
  
        </div>
        <div className=' h-full '>
          <Badge.Ribbon text="love you" className='!bg-blue-600'/>
          <div className='h-full bg-white rounded-2xl'>

          </div>

        </div>
        <div className='h-full '>
          <Badge.Ribbon text="love you" className='!bg-orange-600'/>
          <div className='h-full bg-white rounded-2xl'>

          </div>

        </div>
      </section>

      <footer className='h-[60px] bg-red-300 w-full absolute bottom-0'></footer>
    </div>
  )
}

export default App