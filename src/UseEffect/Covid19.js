import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React, {
  useEffect,
  useState,
} from 'react';

export const Covid19 = () => {

    const [data,SetData] =  useState([]);

    const getCovidData = async () => {
      const res=  await fetch("https://data.covid19india.org/data.json");
      const ActualData =  await res.json();
      SetData(ActualData.statewise);
    }
    
    useEffect( ()=> {
        getCovidData();
    },[]);
  return (
    <>
        <div className='container-fluid mt-5'>
            <div className='main-heading'>
                <h1 className='text-center mb-5'>India Covid19 Dashboard </h1>
            </div>

            <div className='table-responsive '>
                <table className='table table-hover'>
                    <thead className='thead-dark bg-primary'>
                        <tr>
                            <th>States</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            data.map( (currentEle, index) => {
                                return ( 
                                    <tr key={index}>
                                        <th>{currentEle.state}</th>
                                        <td>{currentEle.confirmed}</td>
                                        <td>{currentEle.recovered}</td>
                                        <td>{currentEle.deaths}</td>
                                        <td>{currentEle.active}</td>
                                        <td>{currentEle.lastupdatedtime}</td>
                                    </tr> 
                                )
                            })
                        }
                       
                    </tbody>
                </table>
            </div>

        </div>
    </>
  )
}

