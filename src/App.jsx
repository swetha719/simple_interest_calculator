
import { Button,Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react';



function App() {
// usestate
  const [principle,setPrinciple]=useState(0)
  const [interestRate,setInterest]=useState(0)
  const [year,setYear]=useState(0)
  console.log(principle);
  // create state to store calculated value

  const [simpleInterest,setSimpleInterest]=useState(0)
  
  // to validate 
  const [isInvalidPrinciple,setIsInvalidPrinciple]=useState(false)
  const [isInvalidinterest,setIsInvalidInterest]=useState(false)
  const [isInvalidYear,setIsInvalidYear]=useState(false)

  
  // to check input valid
    const  validateUserInput=(tag)=>{
      const {name,value}=tag
      
      console.log(name,value);
      console.log(typeof value);
      console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
      if(!!value.match(/^[0-9]*.?[0-9]+$/)){
        if(name=='principle'){
          setPrinciple(value)
          setIsInvalidPrinciple(false)

        }
        else if(name=='interest'){
          setInterest(value)
          setIsInvalidInterest(false)
        }
        else{
          setYear(value)
          setIsInvalidYear(false)
        }

      }
      else{
        if(name=='principle'){
          setIsInvalidPrinciple(true)
        }
        else if(name=='interest'){
          setIsInvalidInterest(true)
        }
        else{
          setIsInvalidYear(true)
        }
      }

    }
  

  const handleCalculate=(e)=>{
    console.log("button clicked");
    e.preventDefault()

    if(principle && interestRate && year){

      setSimpleInterest(principle*interestRate*year/100)

    }
    else{
      alert("Enter the field completely")
    }
    
  }

  // reset button
  const handleReset=()=>{
    setPrinciple(0)
    setInterest(0)
    setYear(0)
    setSimpleInterest(0)
    setIsInvalidPrinciple(false)
    setIsInvalidInterest(false)
    setIsInvalidYear(false)
  }

  return (
    <>
    <div className='bg-dark d-flex align-items-center justify-content-center' style={{minHeight:'100vh',minWidth:'100%'}}>
           <div className='bg-light rounded p-5 ' style={{width:'550px'}}>
               <h2>Simple Interest Calculator</h2>
                  <p className='text-danger'>Calculate your Simple Interest Easily</p>
                  <div className=' d-flex align-items-center justify-content-center rounded bg-warning text-light flex-column' style={{height:'150px'}}>
                  
                     <h1 >₹&nbsp;{simpleInterest}</h1>
                    
                     
                     <p>Total Simple Interest</p>
                  

                  </div>
                  <form className='mt-5'>
                    <div className="mb-3">
                     <TextField name='principle' onChange={e=>validateUserInput(e.target)}  value={principle|| ""} className='w-100' id="outlined-basic" label="₹&nbsp;Principle amount" variant="outlined" />
                    </div>
                     
                     {
                      isInvalidPrinciple &&

                      <p className='text-danger'>Invalid principle amount</p>
                     }


                    <div className="mb-3">
                     <TextField name='interest' onChange={e=>validateUserInput(e.target)} value={interestRate || ""} className='w-100' id="outlined-basic" label="Rate of interest(p.a)%" variant="outlined" />
                    </div>

                    {
                       isInvalidinterest &&

                      <p className='text-danger'>Invalid Interest</p>
                    }



                    <div className="mb-3">
                     <TextField name='year' onChange={e=>validateUserInput(e.target)} value={year || ""} className='w-100' id="outlined-basic" label="Time Period(Yr)" variant="outlined" />
                    </div>

                    {
                      isInvalidYear &&

                       <p className='text-danger'>Invalid Year</p>
                     }

                    <Stack direction="row" spacing={2}>
                    <Button type='submit' disabled={isInvalidPrinciple || isInvalidinterest || isInvalidYear} onClick={handleCalculate} variant="contained" style={{backgroundColor:'black',width:'50%',height:'40px'}}>CALCULATE</Button>
                    <Button variant="outlined" onClick={handleReset} style={{width:'50%',height:'40px'}}>RESET</Button>
                   </Stack>
                  </form>

           </div>
    </div>
    </>
  )
}

export default App
