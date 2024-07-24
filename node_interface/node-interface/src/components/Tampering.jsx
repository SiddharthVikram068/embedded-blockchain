import React from 'react'
import styles, {layout} from '../style'
import { Link } from 'react-router-dom'

const Tampering = () => {
  return (
    <div className={`flex-col`}>
      <div className={`flex flex-row p-6 rounded-[20px] feature-card`}>
        <div className="flex-1 flex flex-col ml-3">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
            <Link to="/tamp">Tampering</Link>
          </h4>
          <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
            Get street light tampering <br></br> events
          </p>
        </div>

      </div>
    </div>
  )
}

export default Tampering