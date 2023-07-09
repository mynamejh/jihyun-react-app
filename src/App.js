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


  const [기본,b] = useState('남자코트 추천');
  const [기본2,b2] = useState('강남우동 맛집');
  const [기본3,b3] = useState('파이썬 독학');

  const [글제목,글제목변경] = useState(['여자코트 추천','강남우동 맛집','파이썬 독학'])
  const [logo] = useState('ReactBlog');

  // const [따봉,따봉변경] = useState(0); //따봉 = 0;
  // const [따봉2,따봉변경2] = useState(0); //따봉 = 0;
  // const [따봉3,따봉변경3] = useState(0); //따봉 = 0;
  let [따봉, 따봉변경] = useState([0,0,0]);
  const [modal,SetModal]  = useState(false); // 스위치 역할임.
  const [title,SetTitle]= useState(0);

  // # map 함수 사용 법
  // 1. array 자료 갯수만큼 함수 안의 코드 실행해줌.
  // 2. 콜백함수 안의 파라미터는 array 안의 있던 자료임.
  // 3. return 에 뭐 적으면 array로 담아줌

  [1,2,3].map(function(a){
    return '123123123123'
  })

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
        //원본 손상되지 않게 사용하는 방법. 
        // [...] 괄호 벗겨준다는 의미!! 
        let copy =[...글제목]; 
        copy[0] ='남자코트 추천';
        글제목변경(copy);
        }}>글 수정</button>



      {/* <div className='list'>
        <h4>{글제목[0]}<span onClick={()=>{따봉변경(따봉+1)}}>❤️</span>{따봉}</h4>
        <p> 7월 9일 발행 </p>
      </div>

      <div className='list'>
        <h4>{기본2}</h4>
        <p> 7월 9일 발행 </p>
      </div>

      <div className='list'>
        <h4 onClick={()=>{SetModal(true)}}>{기본3}</h4>
        <p> 7월 9일 발행 </p>
      </div> */}

        {
          글제목.map(function(a, i){
            return (
            <div className='list'>
             <h4 onClick={()=>{SetModal(true); SetTitle(i)}}>{글제목[i]}
            <span onClick={()=>{
                const copy = [...따봉]; // array 자료일때, 복사부터 하기
                copy[i]+=1;
                따봉변경(copy)}}>❤️
            </span>{따봉[i]}
             </h4>
            <p> 7월 9일 발행 </p>
          </div>)
          })
        }



      {/* <h4>{post}  state 공부중 </h4> */}

     {/* # 컴포넌트 만드는 법 = 함수(컴포넌트)
     1. function 만들기_ 위치가 중요함. function 중괄호 안에 사용하면 안된다.
     2. return() 안에 html 담기
     3. <함수명></함수명> 쓰기 
     4. function 안에서 만들면 안됨, 그리고 첫글자는 대문자로!*/}
    
    {/* # 컴포넌트로 만들면 좋은 상황?
    1. 반복적인 html 축약할때
    2. 큰 페이지들
    3. 자주 변경되는 것들 
    = 단점은 state 가져다쓸때 문제가 생김. b함수에서 맘대로 가져다 쓸 수없음.
    */}


    

    {/* 중괄호 안에는 조건문 if문 사용 못함. 
    대신 아래처럼 삼항 연산자 사용 해야된다.  
    ex) modal(state) 가 true 라면 modal 창 실행: 아니라면 보여주지 말기(null) */}
   
    <button onClick={()=>{SetTitle(0)}}>글제목0</button>
    <button onClick={()=>{SetTitle(1)}}>글제목1</button>
    <button onClick={()=>{SetTitle(2)}}>글제목2</button>
   {
     modal==true ? <Modal title={title} 글제목 ={글제목}/> : null
   }
    
    </div>
  );
}


// # 동적 UI 만드는 방법_누를때마다 데이터 바뀜!!
// 1. html css로 미리 디자인 완성
// 2. UI의 현재 상태를 state로 저장
// 3. state에 따라 UI가 어떻게 보일지 작성





// # props 사용법_상속! (부모가 자식에게 state 전송하는 법)
// 1. 부모 내부에 있는 <자식 컴포넌트 state이름={state이름}> 생성
// 2. 자식 컴포넌트를 만든 곳에서 파라미터 추가(props)
// 3. state 전송. 부모꺼.props자식컴포넌트에서 state이름

function Modal(props){ 
  return(
    <>
      <div className='modal' style={{background:props.color}}>
        {/* 부모꺼.props자식컴포넌트에서 작성한.작명 */}
        <h4> {props.글제목[props.title]} </h4>  
        <p>날짜</p>
        <p>상세내용</p>
        <button>글 수정</button>
      </div>
    </>
  )

}





export default App;
