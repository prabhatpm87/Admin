import React from 'react'
import LineChart from './LineChart'
import Piechart from './Piechart'

const Home = () => {
  return (
    <div className='p-3 bg-light'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='  col-12 col-sm-6 col-md-4 col-lg-3 p-3  bg-light'>
            <div className='d-flex justify-content-between py-4 px-3 align-items-center border-secondary shadow-sm p-3 bg-white border'>
              <i className='bi bi-currency-dollar text-success fs-1'></i>
              <div>
                <span>sales</span>
                <h2>234</h2>
              </div>
            </div>
          </div>
          <div className='  col-12 col-sm-6 col-md-4 col-lg-3 p-3  bg-light'>
            <div className='d-flex justify-content-between py-4 px-3 align-items-center border-secondary shadow-sm p-3 bg-white border'>
              <i className='bi bi-truck fs-1 text-primary'></i>
              <div>
                <span>Delivery</span>
                <h2>240</h2>
              </div>
            </div>
          </div>
          <div className='  col-12 col-sm-6 col-md-4 col-lg-3 p-3  bg-light'>
            <div className='d-flex justify-content-between py-4 px-3 align-items-center border-secondary shadow-sm p-3 bg-white border'>
              <i className='bi bi-graph-up fs-1 text-danger'></i>
              <div>
                <span>Increase</span>
                <h2>20%</h2>
              </div>
            </div>
          </div>
          <div className='  col-12 col-sm-6 col-md-4 col-lg-3 p-3  bg-light'>
            <div className='d-flex justify-content-between py-4 px-3 align-items-center border-secondary shadow-sm p-3 bg-white border'>
              <i className='bi bi-truck fs-1 text-warning'></i>
              <div>
                <span>Delivery</span>
                <h2>240</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
        <div className='col-12 col-md-8 p-3'>
         <LineChart/>
        </div>
        <div className='col-12 col-md-4 p-3'>
         <Piechart/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home
