import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllCars } from '../redux/actions/carsActions'
import {Button,Row,Col} from 'antd';
import Spinner from '../components/Spinner';
function Home()
{
    const {cars}=useSelector(state=>state.carsReducer)
    const {loading}=useSelector(state=>state.alertsReducer)
    const dispatch=useDispatch()

    useEffect(()=>{ 
        dispatch(getAllCars())

    },[])
    return(
        
        <DefaultLayout>
            
            {loading==true && (<Spinner/>)}
            
           


              <Row justify='center' gutter={16} className='mt-5'>
                {
                    cars.map(car=>
                    {
                        return <Col lg={5} sm={24} xs={24}>
                        <div className="car p-3 bs1 ">
                            <img src={car.image} className="carimg"/>

                            <div className="car-content d-flex align-items-center justify-content-between">

                                <div className='text-left pl-2'>
                                    <p>{car.name}</p>
                                 </div>

                            <div>
                                <button className="btn1 mr-2">book now</button>
                            </div>

                            </div>
                        </div>
                    </Col>
                })}

                </Row>
        </DefaultLayout>
    )
}

export default Home