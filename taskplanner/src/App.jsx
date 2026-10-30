import React, { useEffect, useState } from 'react'
import {Badge , Tag , Card , Select ,Modal ,Form , Input, Button, DatePicker } from 'antd'

import { Plus } from 'lucide-react'
import { set } from '@rc-component/util'
import { usePlanner } from './store/usePlanner'

const App = () => {
  const [open, setOpen] = useState(false)
  const [currentTime ,setCurrentTime] = useState(new Date().toLocaleTimeString())
  const {tasks , setTasks , deleteTask} = usePlanner()
  
  const createTask = (value)=> {
    value.status = "pending"
    value.id = Date.now()
    console.log(value)
    setTasks(value)

  }
  const handleClose = ()=> {
    setOpen(false)
  }
  useEffect(()=>{
    const  tem = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)
    // release Memory
    return ()=>{
      clearInterval(tem)
    }
  },[])
  return (
    <div className='bg-green-100 h-screen relative'>
      <nav className=' h-[60px] bg-[linear-gradient(141deg,#aee785,#d11bac)] top-0 fixed w-full flex justify-between items-center rounded px-7'>
        <div>
          {/* <div><img src="logo.jpg" alt="" /></div> */}
          <button className='h-12 w-12 bg-[radial-gradient(circle,#14b7cd,#5832be)] text-xl font-bold rounded-full m-auto '>PL</button>
          <span className='text-2xl'>anner</span>
        </div>

        <div className='flex gap-5 items-center'>
          <DatePicker size="large"/>
        <div className='text-2xl font-bold'>{currentTime}</div>
        <button onClick={()=>setOpen(true)} className='bg-blue-500 text-white hover:bg-green-700 active:scale-95 flex py-1 px-3 rounded'>
          <Plus size={25} color="#ffffff" strokeWidth={0.95} />
            Add Task
        </button>
        </div>
      </nav>

      <section className='h-[calc(100%-120px)]  fixed top-[60px] w-full bg-[linear-gradient(54deg,#2a254a,#21fe39)] lg:grid lg:grid-cols-3 gap-3 p-4 overflow-auto'>
        <div className='h-full min-h-0 my-3 lg:my-0 '>
          <Badge.Ribbon text="Highest" className='!bg-pink-600 z-10'/>

          <div className=' bg-white rounded-2xl p-4 overflow-auto h-full min-h-0'>

            <div className='my-3'>
              {tasks.filter((item)=>item.priority === 'highest').map((elem,idx)=>(
              <Card hoverable className='my-4!' key={idx}>
                <Card.Meta title={elem.title} description={elem.description}/>
             

              <div className='flex justify-between mt-3'>

              <div className='flex gap-4'>
                <Tag className='!flex items-center' >{elem.status}</Tag>
                <Tag className='!bg-rose-500 hover:bg-rose-600! active:scale-95! !text-white !flex !items-center !py-1 !px-2' onClick={()=>deleteTask(elem.id)}>Delete</Tag>
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
        <div className='h-full min-h-0 my-3 lg:my-0 '>
          <Badge.Ribbon text="Medium" className='!bg-blue-600 z-10'/>

            <div className=' bg-white rounded-2xl p-4 overflow-auto h-full min-h-0'>

              <div className='my-3'>
                {tasks.filter((item)=>item.priority === 'medium').map((elem,idx)=>(
                   <Card hoverable className='my-4!' key={idx}>
                     <Card.Meta title={elem.title} description={elem.description}/>
             

                      <div className='flex justify-between mt-3'>

              <div className='flex gap-4'>
                <Tag className='!flex items-center' >{elem.status}</Tag>
                <Tag className='!bg-rose-500 hover:bg-rose-600! active:scale-95! !text-white !flex !items-center !py-1 !px-2' onClick={()=>deleteTask(elem.id)}>Delete</Tag>
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

        <div className='h-full min-h-0 my-3 lg:my-0 '>
          <Badge.Ribbon text="Lowest" className='!bg-amber-500 z-10'/>

            <div className=' bg-white rounded-2xl p-4 overflow-auto h-full min-h-0'>

              <div className='my-3'>
                {tasks.filter((item)=>item.priority === 'lowest').map((elem,idx)=>(
                   <Card hoverable className='my-4! ' key={idx}>
                     <Card.Meta title={elem.title} description={elem.description}/>
             

                      <div className='flex justify-between mt-3'>

              <div className='flex gap-4'>
                <Tag className='!flex items-center' >{elem.status}</Tag>
                <Tag className='!bg-rose-500 hover:bg-rose-600! active:scale-95! !text-white !flex !items-center !py-1 !px-2' onClick={()=>deleteTask(elem.id)}>Delete</Tag>
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
      </section>

      <footer className='h-[60px] bg-red-300 w-full absolute bottom-0 flex items-center justify-between px-5 bg-[linear-gradient(141deg,#d11bac,#aee785)]'>
        <div className='font-bold text-3xl'>Total - 23</div>
        <div className='text-gray-700'>made by <span className='text-fuchsia-600 font-medium'>Dipak Sah</span></div>
      </footer>
      <Modal open={open} footer={null} title="Add New Task" onCancel={handleClose}>
        <Form onFinish={createTask}>
          <Form.Item name='title' rules={[{required : true}]}>
            <Input placeholder='Enter task Name' size='large'/>
          </Form.Item>

          <Form.Item name='description' rules={[{required : true}]}>
            <Input.TextArea placeholder='Add description here ' rows={5} />
          </Form.Item>

          <Form.Item name='priority' rules={[{required : true}]}>
            <Select placeholder="Select Priority">
              <Select.Option value='highest' >highest</Select.Option>
              <Select.Option value='medium'>medium</Select.Option>
              <Select.Option value='lowest'>lowest</Select.Option>
            </Select>
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