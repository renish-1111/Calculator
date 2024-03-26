import { useState } from 'react'
import './App.css'

function App() {

  const [flag, setFlag] = useState(false)
  const [equation, setEquation] = useState('')
  const [result, setResult] = useState('')

  const handleDisplay = (e) => {
    setFlag(false)
    if (result == 0 || result == 'Error') {
      setResult('')
      setEquation('')
    }
    setEquation(equation + e.target.value)
  }
  const handleEqual = (e) => {
    setFlag(true)
    try {

      if (eval(equation) === 0) {
        setResult(eval(equation))
        setEquation('')
      }
      else if (eval(equation) === Infinity) {
        setResult(eval(equation))
        setEquation('')
      }
      else if (eval(equation) === -Infinity) {
        setResult(eval(equation))
        setEquation('')
      }
      else {
        setResult(eval(equation))
        setEquation(eval(equation))
      }

    } catch (err) {
      setResult('Error')
      setEquation('')
    }
  }
  const handleClean = (e) => {
    setFlag(true)
    setEquation('')
    setResult(0)
  }

  return (

    <div className=' container  flex justify-center mt-7'>


      <div className="cal bg-black text-white h-[38rem] w-[23rem] rounded-xl">
        <div className="name text-[3rem] text-center">Calculator</div>
        <div className='display flex items-center pl-3 text-black bg-white h-[6rem] w-[21rem] m-4 rounded-lg'>

          {flag ? <div className='text-black text-3xl'>{result}</div> : <div className='text-black'><div className='text-black text-3xl'>{equation}</div></div>}

        </div>

        <div className="btnsec flex justify-between  gap-3 px-5 py-2">

          <input type="button" value="+" className='bg-yellow-500 rounded-full  font-medium h-[4rem] w-[4rem] text-3xl hover:cursor-pointer transition-all duration-100 active:bg-yellow-600' onClick={handleDisplay} />
          <input type="button" value="-" className='bg-yellow-500 rounded-full font-medium h-[4rem] w-[4rem] text-3xl hover:cursor-pointer transition-all duration-100 active:bg-yellow-600' onClick={handleDisplay} />
          <input type="button" value="*" className='bg-yellow-500 rounded-full font-medium h-[4rem] w-[4rem] text-3xl hover:cursor-pointer transition-all duration-100 active:bg-yellow-600' onClick={handleDisplay} />
          <input type="button" value="/" className='bg-yellow-500 rounded-full font-medium h-[4rem] w-[4rem] text-3xl hover:cursor-pointer transition-all duration-100 active:bg-yellow-600' onClick={handleDisplay} />
        </div>
        <div className="btnsec flex justify-between  gap-3 px-5 py-2">

          <input type="button" value="7" className='bg-gray-500 rounded-full font-medium h-[4rem] w-[4rem] text-3xl hover:cursor-pointer transition-all duration-100 active:bg-gray-600' onClick={handleDisplay} />
          <input type="button" value="8" className='bg-gray-500 rounded-full font-medium h-[4rem] w-[4rem] text-3xl hover:cursor-pointer transition-all duration-100 active:bg-gray-600' onClick={handleDisplay} />
          <input type="button" value="9" className='bg-gray-500 rounded-full font-medium h-[4rem] w-[4rem] text-3xl hover:cursor-pointer transition-all duration-100 active:bg-gray-600' onClick={handleDisplay} />
          <input type="button" value="%" className='bg-yellow-500 rounded-full font-medium h-[4rem] w-[4rem] text-3xl hover:cursor-pointer transition-all duration-100 active:bg-yellow-600' onClick={handleDisplay} />
        </div>

        <div className="btnsec flex justify-between  gap-3 px-5 py-2">

          <input type="button" value="4" className='bg-gray-500 rounded-full font-medium h-[4rem] w-[4rem] text-3xl hover:cursor-pointer transition-all duration-100 active:bg-gray-600' onClick={handleDisplay} />
          <input type="button" value="5" className='bg-gray-500 rounded-full font-medium h-[4rem] w-[4rem] text-3xl hover:cursor-pointer transition-all duration-100 active:bg-gray-600' onClick={handleDisplay} />
          <input type="button" value="6" className='bg-gray-500 rounded-full font-medium h-[4rem] w-[4rem] text-3xl hover:cursor-pointer transition-all duration-100 active:bg-gray-600' onClick={handleDisplay} />
          <input type="button" value="(" className='bg-yellow-500 rounded-full font-medium h-[4rem] w-[4rem] text-3xl hover:cursor-pointer transition-all duration-100 active:bg-yellow-600' onClick={handleDisplay} />
        </div>
        <div className="btnsec flex justify-between  gap-3 px-5 py-2">

          <input type="button" value="1" className='bg-gray-500 rounded-full font-medium h-[4rem] w-[4rem] text-3xl hover:cursor-pointer transition-all duration-100 active:bg-gray-600' onClick={handleDisplay} />
          <input type="button" value="2" className='bg-gray-500 rounded-full font-medium h-[4rem] w-[4rem] text-3xl hover:cursor-pointer transition-all duration-100 active:bg-gray-600' onClick={handleDisplay} />
          <input type="button" value="3" className='bg-gray-500 rounded-full font-medium h-[4rem] w-[4rem] text-3xl hover:cursor-pointer transition-all duration-100 active:bg-gray-600' onClick={handleDisplay} />
          <input type="button" value=")" className='bg-yellow-500 rounded-full font-medium h-[4rem] w-[4rem] text-3xl hover:cursor-pointer transition-all duration-100 active:bg-yellow-600' onClick={handleDisplay} />
        </div>
        <div className="btnsec flex justify-between  gap-3 px-5 py-2">

          <input type="button" value="AC" className='bg-red-700 rounded-full font-medium h-[4rem] w-[4rem] text-3xl hover:cursor-pointer transition-all duration-100 active:bg-red-500' onClick={handleClean} />
          <input type="button" value="0" className='bg-gray-500 rounded-full font-medium h-[4rem] w-[4rem] text-3xl hover:cursor-pointer transition-all duration-100 active:bg-gray-600' onClick={handleDisplay} />
          <input type="button" value="." className='bg-gray-500 rounded-full font-medium h-[4rem] w-[4rem] text-3xl hover:cursor-pointer transition-all duration-100 active:bg-gray-600' onClick={handleDisplay} />
          <input type="button" value="=" className='bg-green-600 rounded-full font-medium h-[4rem] w-[4rem] text-3xl hover:cursor-pointer transition-all duration-100 active:bg-green-500' onClick={handleEqual} />
        </div>

      </div>

    </div>

  )
}

export default App
