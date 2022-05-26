import React, {useState} from 'react';


const Generate = () => {

    const [amount, setAmount] = useState();
    const generateCsv = async () => {
        window.location = (`/api/csvupload/generatecsv?amount=${amount}`)
    };
    return (
        <div className="d-flex vh-100" style={{ marginTop: -70 }}>
            <div className="d-flex w-100 justify-content-center align-self-center">
              <div className="row">
                  <input type="text" className="form-contyrol-lg" placeholder='Amount' value={amount} onChange={e => setAmount(e.target.value)}/>
              </div>
              <div className='row'>
                  <div className="col-md-4">
                        <button className='btn btn-primary btn-lg' onClick={generateCsv}>Generate</button>
                  </div>
                </div>
            </div>
        </div>
        )
};
export default Generate;