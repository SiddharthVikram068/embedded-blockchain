import React from 'react';
import styles, {layout} from '../style';
import { Link } from 'react-router-dom';

// <div className={`${styles.flexCenter} w-[250px] h-[150px] ${styles.roundedCorners}`}
// style={{margin: '30px', borderRadius: '20px', backgroundColor: '#234EDB', boxShadow:'0px 6px 12px rgba(0, 0, 0, 0.4)'}}>
// <span style={{textAlign: 'center', color:'white', fontSize: '25px', fontWeight: 'bold'}}> <Link to="/mal">Malfunction</Link></span>
// </div>

const Malfunction = () => {
  return (
    <div className={`flex-col`}>
      <div className={`flex flex-row p-6 rounded-[20px] feature-card`}>
        <div className="flex-1 flex flex-col ml-3">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
            <Link to="/mal">Malfunction</Link>
          </h4>
          <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
            Get street light malfunction <br></br>events
          </p>
        </div>

      </div>
    </div>
  )
}

export default Malfunction
