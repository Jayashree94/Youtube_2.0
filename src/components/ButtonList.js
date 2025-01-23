import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const buttons = ["All", "Cricket","JavaScript","Valentines","2025 News","Mainframe","ARR","Chakra UI", "BiggBoss" ]
  return (
    <div className='flex'>
       { buttons.map((btns,index) => <Button key={index} name={btns}/>)}
        <Button name="All"></Button>

    
    </div>
  )
}

export default ButtonList