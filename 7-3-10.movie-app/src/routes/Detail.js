// // 7-4. Movie App
// // 컴포넌트 폴더 생성, 리액트 앱에서 페이지 전환을 위한 라우터 폴더 생성

// function Detail() {
//   return <h1>Deatail</h1>;
// }
// export default Detail;

////////////////////////////////////////////////////////////
// 7-6. Parameters

import { useEffect } from 'react';
import { useParams } from 'react-router';

// ✅ useParams 함수
// React Router에서 제공하는 함수
// url에 있는 값을 반환해주는 함수, 변경되는 값, url에 있는 변수 값

function Detail() {
  // React Router에 이 url이 변수를 받을거라고 말해주기만 하면 됨
  const { id } = useParams();
  // console.log(id);
  // 받은 id를 갖고 API에 요청 보냄
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  // 컴포넌트가 처음 mount 할 때만 코드 실행
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Deatail</h1>;
}
export default Detail;
