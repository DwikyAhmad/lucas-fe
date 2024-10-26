import React from 'react'

const summary = () => {
  return (
    <div className='bg-primaryBlueNavy h-full w-full'>
      <div className="summary-title font-poppins font-bold text-2xl">SUMMARY ORDER</div>
      <div className="content">
        <div className="left-content items-detail"></div>
        <div className="right-content courier-address">
          <div className="courier"></div>
          <div className="address"></div>
        </div>
      </div>
      <div className="transaction-summary">
        <div className="title"></div>
        <div className="summary-content"></div>
        <div className="caution"></div>
        <div className="button"></div>
      </div>
    </div>
  )
}

export default summary
