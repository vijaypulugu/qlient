import React from 'react';

import '../layout.css';
import { Label } from '@fluentui/react';
import GridContainer from '../components/GridContainer';

const BusinessUnitSummary: React.FC = () => {
  return (
    <div>
      <GridContainer/>
      {/* <div style={{textAlign:'left'}}>
      <Label style={{fontSize:25}}>Business Unit Summary</Label>
      </div>

    <div className='row'>
      <div className='box'>
        <div className='container'>
          <text className='text'>Total Clients</text>
          <text className='text'>2500</text>
        </div>
      </div>
      <div className='box'>Business Unit Summary</div>
      <div className='box'>Business Unit Summary</div>
      <div className='box'>Business Unit Summary</div>
    </div>
    <div className='row'>
      <div className='box'>Business Unit Summary</div>
      <div className='box'>Business Unit Summary</div>
    </div> */}
    </div>
    
  );
}

  export default BusinessUnitSummary;