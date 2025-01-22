import React from 'react';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import HomeView from './Views/HomeView';
import AboutView from './Views/AboutView';

const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />}/>
        <Route path='/about' element={<AboutView />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;


// BrowserRouter : 라우팅 적용하기 위한 컴포넌트. App 컴포넌트를 감싸서 라우팅 설정을 적용할 수 있는 태그.
// Routes : 라우터들을 정의하는 컨테이너. 명령어들을 전부 가지고 있다고 보면 됨.
// <Route path='/' element={<HomeView />}/> :  '/' 경로에 해당하는 <HomeView /> 컴포넌트를 랜더링하는 태그.