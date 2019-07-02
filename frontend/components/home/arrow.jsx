import React from 'react'

export const Arrow = ({ direction, clickFunction }) => (
    <div 
        className={`slide-arrow ${direction}`}
        onClick={clickFunction}></div>
)

