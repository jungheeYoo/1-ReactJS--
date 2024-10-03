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

// 7-4. Movie App
// 컴포넌트 폴더 생성, 리액트 앱에서 페이지 전환을 위한 라우터 폴더 생성

function App() {
  return null;
}

export default App;
