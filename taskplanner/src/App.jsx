import React, { useState } from 'react'
import {Badge , Tag , Card , Select ,Modal ,Form , Input, Button } from 'antd'

import { Plus } from 'lucide-react'
import { set } from '@rc-component/util'

const App = () => {
  const [open, setOpen] = useState(false)
  const handleClose = ()=> {
    setOpen(false)
  }
  return (
    <div className='bg-green-100 h-screen relative'>
      <nav className='h-[60px] bg-amber-300 top-0 fixed w-full'></nav>

      <section className='h-[calc(100%-120px)]  fixed top-[60px] w-full bg-fuchsia-300 grid grid-cols-3 gap-3 p-4 overflow-auto'>
        <div className='h-full min-h-0 '>
          <Badge.Ribbon text="Highest" className='!bg-pink-600'/>

          <div className=' bg-white rounded-2xl p-4 overflow-auto h-full min-h-0'>

            <button onClick={()=>setOpen(true)} className='bg-blue-500 text-white hover:bg-green-700 active:scale-95 flex py-2 px-3 rounded'>
              <Plus size={25} color="#ffffff" strokeWidth={0.95} />
              Add Task
            </button>
            
            <div className='my-3'>
              {Array(10).fill(12).map(()=>(
              <Card hoverable className='my-4!' >
                <Card.Meta title="Dilwale" description="jaaneman tu khub  hai tu mera mehbub hai"/>
             

              <div className='flex justify-between mt-3'>

              <div className='flex gap-4'>
                <Tag className='!flex items-center' >Pending</Tag>
                <Tag className='!bg-rose-500 hover:bg-rose-600! active:scale-95! !text-white !flex !items-center !py-1 !px-2' >Delete</Tag>
              </div>

              <div>
                <Select placeholder="change status">
                  <Select.Option value="pending">pending</Select.Option>
                  <Select.Option value="processing">processing</Select.Option>
                  <Select.Option value="completed">completed</Select.Option>
                </Select>
              </div>

              </div>
               </Card>
               ))}
            </div>
 
          </div>
  
        </div>
        <div className=' h-full '>
          <Badge.Ribbon text="Medium" className='!bg-blue-600'/>
          <div className='h-full bg-white rounded-2xl'>

          </div>

        </div>
        <div className='h-full '>
          <Badge.Ribbon text="Lowest" className='!bg-yellow-600'/>
          <div className='h-full bg-white rounded-2xl'>

          </div>

        </div>
      </section>

      <footer className='h-[60px] bg-red-300 w-full absolute bottom-0'></footer>
      <Modal open={open} footer={null} title="Add New Task" onCancel={handleClose}>
        <Form >
          <Form.Item name='title' rules={[{required : true}]}>
            <Input placeholder='Enter task Name' size='large'/>
          </Form.Item>

          <Form.Item name='description' rules={[{required : true}]}>
            <Input.TextArea placeholder='Add description here ' rows={5} />
          </Form.Item>
          
          <Form.Item>
            <Button htmlType='submit' className='!bg-blue-500 !text-white active:scale-95!'>Submit</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default App