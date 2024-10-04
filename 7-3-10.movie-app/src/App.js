// 영화 리스트 API
// https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year

/* 
✅ 목표 : 영화 보여주기
1. 영화 정보 간결히 보여주기
2. 영화 클릭하면 링크 연결해서 자세히 보여주기

✅ 필요한 것 
1. 영화 API 가져오기
별점이 8.5점 이상, 최신연도순으로 영화 전체 보여주기
2. 로딩 중 보여주고, 로딩이 끝나면 영화 보이기
*/

// // 7-3. Movie App
// // 영화 정보 API 가져와서 보여주기

// import { useEffect, useState } from 'react';

// function App() {
//   // ✅ 로딩 함수
//   const [loading, setLoading] = useState(true);
//   // ✅ 영화 API 가져와서 한 번만 실행
//   const [movies, setMovies] = useState([]);
//   // 🔸 async-await를 사용하기 위해서 여기에 getMovies라는 함수 만듦
//   // 👍 요즘은 then보다는 async-await을 사용한다.
//   const getMovies = async () => {
//     // const response = await fetch(
//     //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
//     // );
//     // const json = await response.json();
//     // setMovies(json.data.movies);
//     // setLoading(false);

//     // 🔼 위의 짧은 버전
//     const json = await (
//       await fetch(
//         `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
//       )
//     ).json();
//     setMovies(json.data.movies);
//     setLoading(false);
//   };
//   // 코드 한 번만 작동
//   useEffect(() => {
//     // 🔸 fetch..then
//     // fetch(
//     //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
//     // )
//     //   .then((response) => response.json())
//     //   .then((json) => {
//     //     setMovies(json.data.movies);
//     //     setLoading(false); // 로딩을 끝냈기 때문에 true에서 false로 바꿔줌
//     //   });
//     getMovies();
//   }, []);
//   // console.log(movies);

//   // ✅ 화면에 보여주기
//   // ✨ 리스트 보여주기 map 사용
//   // key는 React.js 에서만, map안에서 component들을 render할 때 사용함
//   return (
//     <div>
//       {loading ? (
//         <h1>Loading...</h1>
//       ) : (
//         <div>
//           {movies.map((movie) => (
//             // 여기서부터
//             <div key={movie.id}>
//               <img src={movie.medium_cover_image} />
//               <h2>{movie.title}</h2>
//               <p>{movie.summary}</p>
//               <ul>
//                 {movie.genres.map((g) => (
//                   <li key={g}>{g}</li>
//                 ))}
//               </ul>
//             </div>
//             // 여기까지 잘라서 Movie 컴포넌트를 만들어서 보냄
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

////////////////////////////////////////////////////////////
// // 7-4. Movie App
// // 컴포넌트 폴더 생성, 리액트 앱에서 페이지 전환을 위한 라우터 폴더 생성

// function App() {
//   return null;
// }

// export default App;

////////////////////////////////////////////////////////////
// // 7-5. React Router
// // npm i react-router-dom@5.3.0 버전 사용

// 라우팅: 웹 애플리케이션에서 다른 페이지나 뷰로 사용자를 네비게이션하는 프로세스

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Detail from './routes/Detail';
// import Home from './routes/Home';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/movie">
//           <Detail />
//         </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App;

// // ✅ react-router-dom 컴포넌트 사용법
// // 유저가 해당 경로에있으면 라우터를 렌더링 해줌
// // 해당 라우터 함수를 import 해주면 됨

// // path="/" 홈화면 가기
// // 누군가 우리 웹사이트의 '/' url에 있다면, Home 컴포넌트를 보여줌
// // react-router-dom의 컴포넌트를 가져다 씀
// // 아래 컴포넌트들이 하는 일은 url을 바라봄
// // url이 바뀌면 어떤 것을 보여줄지 결정함
// // 즉, 유저가 '/movie' path에 있다면 Detail컴포넌트를 보여주라고 하면 됨

// // Switch가 하는 일은 Route를 찾는 것
// // Route는 /movies/123 이런 URL을 의미함
// // 그리고 Route를 찾으면 컴포넌트를 렌더링 함
// // 한 번에 하나의 Route만 렌더링 하기 위해 Switch를 씀

////////////////////////////////////////////////////////////
// 7-6. Parameters

// React Router는 다이나믹(동적) url을 지원해줌
// 다이나믹하다는 건 url에 변수를 넣을 수 있다는 의미이다

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

// 변수 만들어주고 이름은 맘대로 할 수 있음
// 부모인 여기서 Movie 컴포넌트를 렌더링 하고 있으니 id를 Movie.js 앱에 넘겨줘야함
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
