import React from 'react'
import styles from '../style'

const Coming_soon = () => {
  return (
    <div className={`flex-col mt-10`}>
      <div className={`flex flex-row p-6 rounded-[20px] feature-card`}>
        <div className="flex-1 flex flex-col ml-3">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
            Coming Soon...
          </h4>
          <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
            Feature under development
          </p>
        </div>

      </div>
    </div>
  )
}

export default Coming_soon