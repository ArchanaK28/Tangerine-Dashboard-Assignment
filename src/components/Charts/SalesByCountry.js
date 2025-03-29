import React from 'react'
import '../../styles/SalesByCountry.css'
import USFlag from '../../assets/flags/US-flag.png';
import Germany from '../../assets/flags/Germany-flag.png';
import Britain from '../../assets/flags/Britain-flag.png';
import Brasil from '../../assets/flags/Brasil-flag.png';
import Australia from '../../assets/flags/Australia-flag.png';

function SalesByCountry() {
    const countriesData = [
      { name: 'United State', flag: USFlag, sales: 2500, percentage: 29.7 },
      { name: 'Germany', flag: Germany, sales: 3500 , percentage: 40.22 },
      { name: 'Great Britain', flag: Britain, sales: 1400, percentage: 23.44 },
      { name: 'Brazil', flag: Brasil, sales: 562, percentage: 36.16 },
      { name: 'Australia', flag: Australia, sales: 480, percentage: 56.28 }
    ];
  
    return (
        <div className='sales-country-data'>
      <div className="sales-by-country-container">
        <h3>Sales by Country</h3>
        <table className="sales-country-table">
        
          
          <tbody>
          {countriesData.map((country, index) => (
           
            <tr key={index}>
              <td className="country-cell">
                <img 
                  src={country.flag} 
                  alt={`${country.name} flag`} 
                  className="country-flag" 
                />
                <span className="country-name"><th>Country:</th>{country.name}</span>
              </td>
              
              <td className="">
                <span className="country-name"><th>Sales:</th>{country.sales.toLocaleString()}</span>
              </td>
              
              <td  className="">
                <span  className="country-name"><th>Business%:</th>{country.percentage}%</span>
                </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
      </div>
    );
  }

export default SalesByCountry
