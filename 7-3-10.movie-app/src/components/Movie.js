// // 7-4. Movie App
// // 컴포넌트 폴더 생성, 리액트 앱에서 페이지 전환을 위한 라우터 폴더 생성

// import PropTypes from 'prop-types';

// function Movie({ coverImg, title, summary, genres }) {
//   return (
//     <div>
//       <img src={coverImg} alt={title} />
//       <h2>{title}</h2>
//       <p>{summary}</p>
//       <ul>
//         {genres.map((g) => (
//           <li key={g}>{g}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // 어떤 props를 갖고 있는지 알면 좋다
// Movie.propTypes = {
//   coverImg: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
// };
// export default Movie;

////////////////////////////////////////////////////////////
// // 7-5. React Router

// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// function Movie({ coverImg, title, summary, genres }) {
//   return (
//     <div>
//       <img src={coverImg} alt={title} />
//       <h2>
//         <Link to="/movie">{title}</Link>
//       </h2>
//       <p>{summary}</p>
//       <ul>
//         {genres.map((g) => (
//           <li key={g}>{g}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // 어떤 props를 갖고 있는지 알면 좋다
// Movie.propTypes = {
//   coverImg: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// export default Movie;

// // ✅ Link
// // 한 Route에서 다른 Route로 이동하는 방법
// // 영화 제목을 클릭하면, 화면 전체가 재실행 되는데
// // Link는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트이다
// // Link는 원하는 곳 어디에든 사용할 수 있다

////////////////////////////////////////////////////////////
// // 7-6. Parameters

// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// function Movie({ id, coverImg, title, summary, genres }) {
//   return (
//     <div>
//       <img src={coverImg} alt={title} />
//       <h2>
//         <Link to={`/movie/${id}`}>{title}</Link>
//       </h2>
//       <p>{summary}</p>
//       <ul>
//         {genres.map((g) => (
//           <li key={g}>{g}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // 어떤 props를 갖고 있는지 알면 좋다
// Movie.propTypes = {
//   id: PropTypes.number.isRequired,
//   coverImg: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// export default Movie;

////////////////////////////////////////////////////////////
// 7-9. Styles

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';

function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img}></img>
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres?.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// 어떤 props를 갖고 있는지 알면 좋다
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
