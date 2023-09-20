import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import main from '../main.png';
import icon01 from '../icon01.png';
import icon02 from '../icon02.png';

function Main() {
  const nevi = useNavigate();
  const icon1 = function(){
    nevi('/main/sub1')
  }
  const icon2 = function(){
    nevi('/main/sub2')
  }

  return (
    <div className='main_wrap'>
      <div className='main'>
        <header>
          <nav>
            <ul>
              <li><Link to="/">무더위 쉼터</Link></li>
              <li><Link to="/main"><img src={main}/></Link></li>
            </ul>
          </nav>
        </header>

        <div className='main_con'>
          <ul>
            <li onClick={icon1}>
              <figure><img src={icon01}/></figure>
              <p>카카오 맵으로<br/>확인하기</p>
            </li>
            <li onClick={icon2}>
              <figure><img src={icon02}/></figure>
              <p>구별로<br/>확인하기</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Main