import React from 'react';
import Header from './components/Header/Header';
import PieChart from './components/Charts/PieChart';
import './index.css';
import RevenueCard from './components/DataCards/RevenueCard';
import CustomersCard from './components/DataCards/CustomersCard';
import SalesCard from './components/DataCards/SalesCard';
import LineGraph from './components/Charts/LineGraph';
import BarChart from './components/Charts/BarChart';
import SalesByCountry from './components/Charts/SalesByCountry';
import TopSellingProducts from './components/Charts/TopSellingProducts';
import SettingsButton from './components/Footer/SettingsButton';
import Layout from './components/Sidebar/Layout';


import './App.css';

function App() {
  return (

    <div className="app-main-container">
      <Layout />
      <SettingsButton />
      <div className = 'main-container'>
        <Header />
        <div className="card-container" >
          <SalesCard />
          <CustomersCard />
          <RevenueCard />
        </div>
        <div className="chart-container">
          <div className="piechart-chart-container">
            <PieChart />
          </div>
          <div className="linegraph-chart-container">
            <LineGraph />
          </div>
        </div>

        <div className="countrysales-container">
            <div className='bar-chart-container'>
              <BarChart />
            </div>
            <div className='countrysales-chart-container'>
              <SalesByCountry />
            </div>
          </div>
        <div className="top-selling-container">
        <TopSellingProducts />
        </div>
        
          
      </div>
    </div>
  );
}

export default App;
