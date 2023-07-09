// eslint-disable


import './App.css';
import { useState } from 'react';


//메인 페이지! 
function App() {
  const post = '우동 맛집';
  //자료 잠깐 저장하고, 사용하려면 [a,b] 변수 지정해야함!
  //useState('보관할 자료') = 'a' 를 의미;
  // [a,b] => b는 state를 변경해주는 함수! (변경 함수_ 써야지 state가 자동 랜더링잘됨.) 
  // state 는 자동랜더링 됨! (html에 자동으로 데이터랜더링 굳이 수정 안될때 ! )
  // 자주 변경될 데이터는 state로 빼서 저장하기.
  // state 변경값 사용하려면!!! 변경 함수 써야함! 



  //state 변경함수의 특징 
  // 기존state == 신규state 의 경우 변경 안해줌!!!!!

  // array/ object 의 특징
  // 

  const [기본,b] = useState('남자코트 추천');
  const [기본2,b2] = useState('강남우동 맛집');
  const [기본3,b3] = useState('파이썬 독학');

  const [글제목,글제목변경] = useState(['여자코트 추천','강남우동 맛집','파이썬 독학'])
  const [logo,setLogo] = useState('ReactBlog');
  const [따봉,따봉변경] = useState(0); //따봉 = 0;

  //onclick은 (함수만 가능): 코드 적으면 안된다!
  function 함수(){
      console.log(1);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>{logo}</h4>
      </div>

      <button onClick={()=>{
        // [...] 괄호 벗겨준다는 의미!! 
        let copy =[...글제목]; //원본 손상되지 않게 사용하는 방법. 
        copy[0] ='남자코트 추천';
        글제목변경(copy);
        }}>글 수정</button>



      <div className='list'>
        <h4>{글제목[0]}<span onClick={()=>{따봉변경(따봉+1)}}>❤️</span>{따봉}</h4>
        <p> 7월 9일 발행 </p>
      </div>

      <div className='list'>
        <h4>{기본2}</h4>
        <p> 7월 9일 발행 </p>
      </div>

      <div className='list'>
        <h4>{기본3}</h4>
        <p> 7월 9일 발행 </p>
      </div>
      <h4>{post}  state 공부중 </h4>
    </div>
  );
}

export default App;
