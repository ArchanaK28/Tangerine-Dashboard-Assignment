import React from 'react'
import '../../styles/TopSellingProducts.css'
import Nikeshoe from '../../assets/nike-shoe-image.jpg'

function TopSellingProducts() {
  return( 
     <div className="top-selling-products-section">
          <div className="top-selling-products">
            <h2>Top Selling Products</h2>
            <table>
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>VALUE</th>
                  <th>ADS SPENT</th>
                  <th>REFUNDS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="product-info">
                      <img src={Nikeshoe} alt="Nike" />
                      <span className='nike-product-name'>Nike v22 Running<span className='positive-order'>8.232 <span className='positive-order-i'>orders</span></span></span>
                    </div>
                  </td>
                  <td>$130.992</td>
                  <td>$9,500</td>
                  <td>13<span className='upward-arrow'>^</span></td>                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
 );
}
export default TopSellingProducts
