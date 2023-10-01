

//talk to uni sa



import React, { useEffect, useState } from 'react';
import './Services.css';

import Tvimg from '../img/TVimgnum2.png';
import chartdataimg from '../img/chartdataimg.png';

const Services = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isAnimated2, setIsAnimated2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500 && window.scrollY <= 1200) {
        setIsAnimated(true);
      } else {
        setIsAnimated(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1200 && window.scrollY <= 3000) {
        setIsAnimated2(true);
      } else {
        setIsAnimated2(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='Services'>
      <div className='DigitalFinancehas'>
        <h1 className='animate__animated animate__slideInLeft animate__slower animate__delay-500ms'>
          Digital Finance has
        </h1>
      </div>
      <div className='neverbeenmoreeasier'>
        <h1 className='animate__animated animate__slideInLeft animate__slower animate__delay-500ms'>
          never been easier.
        </h1>
      </div>

      <div
  className={`gradient-title animate__animated ${
    isAnimated ? ' animate__fadeIn' : ' animate__fadeOut'
  }`}
  style={{
    opacity: isAnimated ? 1 : 0,
    transition: 'opacity 0.5s',
  
  }}
>
  <div className='custom-gradient-title'>Income Management</div>
</div>




      <div className='grid-container'>
        <div
          className={`grid-item ${
            isAnimated
              ? 'animate__animated animate__zoomIn animate__slower animate__delay-500ms'
              : 'animate__animated animate__zoomOut animate__slower animate__delay-500ms'
          }`}
          style={{ opacity: isAnimated ? 1 : 0, transition: 'opacity 0.5s' }}
        >
          Automated Transfers: Easily allocate funds for savings, investments, or debt repayment with automated transfers.
        </div>
        <div
          className={`grid-item ${
            isAnimated
              ? 'animate__animated animate__zoomIn animate__slower animate__delay-500ms'
              : 'animate__animated animate__zoomOut animate__slower animate__delay-500ms'
          }`}
          style={{ opacity: isAnimated ? 1 : 0, transition: 'opacity 0.5s' }}
        >
          Income Analysis: Gain insights and statistics into your income patterns for better planning.
        </div>
        <div
          className={`grid-item ${
            isAnimated
              ? 'animate__animated animate__zoomIn animate__slower animate__delay-500ms'
              : 'animate__animated animate__zoomOut animate__slower animate__delay-500ms'
          }`}
          style={{ opacity: isAnimated ? 1 : 0, transition: 'opacity 0.5s' }}
        >
          Personalized Budgeting: Create customized budgets to track your income and expenses, providing a clear financial picture.
        </div>
        <div
          className={`grid-item ${
            isAnimated
              ? 'animate__animated animate__zoomIn animate__slower animate__delay-500ms'
              : 'animate__animated animate__zoomOut animate__slower animate__delay-500ms'
          }`}
          style={{ opacity: isAnimated ? 1 : 0, transition: 'opacity 0.5s' }}
        >
          Expense Tracking: Categorize and automate expense tracking to identify cost-saving opportunities.
        </div>
      </div>

      <div
        className={`gradient-title2 animate__animated ${
          isAnimated2 ? ' animate__fadeIn' : ' animate__fadeOut'
        }`}
        style={{
          opacity: isAnimated2 ? 1 : 0,
          transition: 'opacity 0.5s',
        
        }}
      >
        <div className='custom-gradient-title2'>Trade The Markets</div>
      </div>

      
      <div className={`cover animate__animated ${
    isAnimated2 ? ' animate__fadeIn' : ' animate__fadeOut'
  }`}
  style={{
    opacity: isAnimated2 ? 1 : 0,
    transition: 'opacity 0.5s',
  
  }}
>
  <div className='TV-container'>
    <img  src={Tvimg}/>

       
        
        
      </div>
</div>

      <div className='grid-container' style={{ marginTop: '510px' }}>
        <div
          className={`grid-item ${
            isAnimated2
              ? 'animate__animated animate__zoomIn animate__slower animate__delay-500ms'
              : 'animate__animated animate__zoomOut animate__slower animate__delay-500ms'
          }`}
          style={{ opacity: isAnimated2 ? 1 : 0, transition: 'opacity 0.5s' }}
        >
          Diverse Asset Selection: Access a wide range of cryptocurrencies and traditional stocks for diversified investments.
        </div>
        <div
          className={`grid-item ${
            isAnimated2
              ? 'animate__animated animate__zoomIn animate__slower animate__delay-500ms'
              : 'animate__animated animate__zoomOut animate__slower animate__delay-500ms'
          }`}
          style={{ opacity: isAnimated2 ? 1 : 0, transition: 'opacity 0.5s' }}
        >
          User-Friendly Interface: Enjoy an intuitive platform for both beginners and experienced traders.
        </div>
        <div
          className={`grid-item ${
            isAnimated2
              ? 'animate__animated animate__zoomIn animate__slower animate__delay-500ms'
              : 'animate__animated animate__zoomOut animate__slower animate__delay-500ms'
          }`}
          style={{ opacity: isAnimated2 ? 1 : 0, transition: 'opacity 0.5s' }}
        >
          Real-Time Data: Stay informed with real-time market information and price charts.
        </div>
        <div
          className={`grid-item ${
            isAnimated2
              ? 'animate__animated animate__zoomIn animate__slower animate__delay-500ms'
              : 'animate__animated animate__zoomOut animate__slower animate__delay-500ms'
          }`}
          style={{ opacity: isAnimated2 ? 1 : 0, transition: 'opacity 0.5s' }}
        >
          Secure Trading: Benefit from robust security measures to safeguard your assets and information.
        </div>
      </div>
    </div>
  );
};

export default Services;
