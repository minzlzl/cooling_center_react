import {Link, useNavigate} from 'react-router-dom';
import main from '../main.png';
import React, { useEffect,useState, useRef } from 'react';
import axios from 'axios';

const {kakao} = window;

function Sub1() {
  const [data, setData] = useState([]);
  const [listdata, setListdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const mapContainer = useRef(null);
  const [selectedAddress, setSelectedAddress] = useState(null); // 선택한 주소를 저장
  const [markers, setMarkers] = useState([]); // 마커 배열

  useEffect(() => {
    // JSON 파일을 가져오는 요청
    axios
      .get('/db/data.json')
      .then((res) => {
        setData(res.data.DATA);
        //setListdata(res.data.DATA);
        setLoading(false);
      })
      .catch((error) => {
        console.error('JSON 파일 가져오기 오류:', error);
        setLoading(false);
      });
  }, []);

  function kakaomap(la,lo){
    if (!loading) {
      // Kakao Maps JavaScript SDK 스크립트를 동적으로 로드
      const script = document.createElement('script');
      script.async = true;
      script.src =
        '//dapi.kakao.com/v2/maps/sdk.js?appkey=2cc8f8e0e29ad22f71de232b226463d2';
      script.onload = () => {
        // Kakao 지도 API 로드 완료 후 실행되는 부분
        const container = mapContainer.current; // 지도를 담을 영역의 DOM 레퍼런스

        if (container) {
          const options = { // LA,LO
            center: new window.kakao.maps.LatLng(la, lo),
            level: 3,
          };

          const map = new window.kakao.maps.Map(container, options);

          const newMarkers = []; // 새로운 마커 배열

          

              

          data.forEach((item) => {
              const markerPosition = new kakao.maps.LatLng(item.la, item.lo);
              const marker = new kakao.maps.Marker({ position: markerPosition, });
              marker.setMap(map);


              kakao.maps.event.addListener(marker, 'click', () => {
                // 클릭한 마커에 대한 처리
                setListdata( data.filter(n=> n.r_seq_no === item.r_seq_no) )
              });

              
          });

          // 새로운 마커 배열을 상태 변수로 설정
          setMarkers(newMarkers);
        }
      };

      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }

  useEffect(() => {
    kakaomap(37.576985, 127.009813)
  }, [data, loading]);

  const handleAddressClick = (address) => {
    // 주소를 클릭하면 해당 주소의 마커를 찾아서 표시
    const marker = markers.find(
      (marker) => marker.getPosition().toString() === address
    );
    if (marker) {
      // 선택한 주소의 마커를 하이라이트 처리할 수 있는 로직 추가
      // 예: 다른 마커는 기본 스타일로, 선택한 마커는 다른 스타일로 표시
      // 또는 마커를 클릭했을 때 정보를 표시하는 모달 창을 열 수 있음
      // 이 부분은 원하는 동작에 맞게 수정하셔야 합니다.
    }
  };

  return (
    <div className='sub1_wrap'>
      <div className='sub1'>
        <header>
          <nav>
            <ul>
              <li><Link to="/">무더위 쉼터</Link></li>
              <li><Link to="/main"><img src={main} alt="Main" /></Link></li>
            </ul>
          </nav>
        </header>

        <div className='sub1_content'>
          <p>더운 여름! 가까운<br/>무더위 쉼터를 찾아보세요!</p>
          <div
            id="map"
            style={{ width: '440px', height: '280px', margin: '0 auto 25px' }}
            ref={mapContainer}
          ></div>
          <div className='sub2_con'>
            <div className='con_txt_top'>
              <ul>
                <li>쉼터<br/>명칭</li>
                <li>도로명<br/>주소</li>
                <li>운영<br/>시작일</li>
                <li>운영<br/>종료일</li>
              </ul>
            </div>
            <div className='con_txt'>
              {listdata.map((item) => (
                <ul key={item.r_seq_no}
                onClick={() => kakaomap(item.la,item.lo)}>
                  <li>{item.r_area_nm}</li>
                  <li>{item.r_detl_add}</li>
                  <li>{item.dt_start}</li>
                  <li>{item.dt_end}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sub1;
