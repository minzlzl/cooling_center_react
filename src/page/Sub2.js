import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import main from '../main.png';

function Sub2() {
  const [activeDistrict, setActiveDistrict] = useState('강남구');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // JSON 파일을 가져오는 요청
    axios
      .get('/db/data.json') // JSON 파일의 경로를 지정
      .then((res) => {
        setData(res.data.DATA);
        setLoading(false); // 데이터 로딩이 완료되면 로딩 상태를 false로 설정
      })
      .catch((error) => {
        console.error('JSON 파일 가져오기 오류:', error);
        setLoading(false); // 에러 발생 시에도 로딩 상태를 false로 설정
      });
  }, []);

  const sub2_btn = function (e) {
    // console.log(e);
    setActiveDistrict(e);
  };

  // activeDistrict에 해당하는 데이터만 필터링
  const filteredData = data.filter((item) => item.r_detl_add.includes(activeDistrict));
  // console.log(data);

  return (
    <div className="sub2_wrap">
      <div className="sub2">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">무더위 쉼터</Link>
              </li>
              <li>
                <Link to="/main">
                  <img src={main} alt="Main" />
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <div className="sub2_tab">
          <ul>
            <li>
              <button className={activeDistrict === '강남구' ? 'active' : ''}
                onClick={()=> { sub2_btn('강남구') }}>
                강남구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '강동구' ? 'active' : ''}
                onClick={()=> { sub2_btn('강동구') }}>
                강동구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '강북구' ? 'active' : ''}
                onClick={()=> { sub2_btn('강북구') }}>
                강북구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '강서구' ? 'active' : ''}
                onClick={()=> { sub2_btn('강서구') }}>
                강서구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '관악구' ? 'active' : ''}
                onClick={()=> { sub2_btn('관악구') }}>
                관악구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '광진구' ? 'active' : ''}
                onClick={()=> { sub2_btn('광진구') }}>
                광진구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '구로구' ? 'active' : ''}
                onClick={()=> { sub2_btn('구로구') }}>
                구로구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '금천구' ? 'active' : ''}
                onClick={()=> { sub2_btn('금천구') }}>
                금천구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '노원구' ? 'active' : ''}
                onClick={()=> { sub2_btn('노원구') }}>
                노원구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '도봉구' ? 'active' : ''}
                onClick={()=> { sub2_btn('도봉구') }}>
                도봉구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '동대문구' ? 'active' : ''}
                onClick={()=> { sub2_btn('동대문구') }}>
                동대문구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '동작구' ? 'active' : ''}
                onClick={()=> { sub2_btn('동작구') }}>
                동작구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '마포구' ? 'active' : ''}
                onClick={()=> { sub2_btn('마포구') }}>
                마포구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '서대문구' ? 'active' : ''}
                onClick={()=> { sub2_btn('서대문구') }}>
                서대문구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '서초구' ? 'active' : ''}
                onClick={()=> { sub2_btn('서초구') }}>
                서초구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '성동구' ? 'active' : ''}
                onClick={()=> { sub2_btn('성동구') }}>
                성동구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '성북구' ? 'active' : ''}
                onClick={()=> { sub2_btn('성북구') }}>
                성북구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '송파구' ? 'active' : ''}
                onClick={()=> { sub2_btn('송파구') }}>
                송파구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '양천구' ? 'active' : ''}
                onClick={()=> { sub2_btn('양천구') }}>
                양천구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '영등포구' ? 'active' : ''}
                onClick={()=> { sub2_btn('영등포구') }}>
                영등포구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '용산구' ? 'active' : ''}
                onClick={()=> { sub2_btn('용산구') }}>
                용산구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '은평구' ? 'active' : ''}
                onClick={()=> { sub2_btn('은평구') }}>
                은평구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '종로구' ? 'active' : ''}
                onClick={()=> { sub2_btn('종로구') }}>
                종로구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '중구' ? 'active' : ''}
                onClick={()=> { sub2_btn('중구') }}>
                중구
              </button>
            </li>
            <li>
              <button className={activeDistrict === '중랑구' ? 'active' : ''}
                onClick={()=> { sub2_btn('중랑구') }}>
                중랑구
              </button>
            </li>
          </ul>
        </div>
        <div className="sub2_con">
          <div className="con_txt_top">
            <ul>
              <li>쉼터<br/>명칭</li>
              <li>도로명<br/>주소</li>
              <li>운영<br/>시작일</li>
              <li>운영<br/>종료일</li>
            </ul>
          </div>
          <div className="con_txt">
            {
            filteredData.map((item) => (
              <ul key={item.r_seq_no}>
                <li>{item.r_area_nm}</li>
                <li>{item.r_detl_add}</li>
                <li>{item.dt_start}</li>
                <li>{item.dt_end}</li>
              </ul>
            ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sub2;
