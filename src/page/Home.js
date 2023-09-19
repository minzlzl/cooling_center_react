import React from 'react';
import bg from '../bg.png';
import { useNavigate } from 'react-router-dom';

function Home() {
  const nevi = useNavigate();
  const center = function(){
    nevi('./main')
  }

  return (
    <div className='home_wrap'>
      <div className='home'>
        <figure><img src={bg}/></figure>
        <div className='home_txt'>
          <p>무더위<br/>쉼터</p>
          <span onClick={center}>쉼터 확인하기</span>
        </div>
      </div>
    </div>
  )
}

export default Home