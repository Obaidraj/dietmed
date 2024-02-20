import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { decrement, increment } from './redux/slices/common/common'

const App = () => {
  const {value} =useSelector((state) => state.counter)
  const dispatch=useDispatch()
  return (
    <div className='bg-green-500'>
      {value}
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default App