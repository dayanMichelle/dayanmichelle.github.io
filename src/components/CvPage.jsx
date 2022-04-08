import React from 'react'
import {CardComponent} from './CardComponent'
import InfoPage from './InfoPage'

const CvPage = () => {
  return (
    <div
    style={{
        display:'flex',
        maxWidth: '90%',
        margin: '0px auto',
        paddingTop:'20px',
        gap:'30px',
        flexWrap:'wrap',
    }}>
        <CardComponent />
        <InfoPage />
    </div>
  )
}

export default CvPage