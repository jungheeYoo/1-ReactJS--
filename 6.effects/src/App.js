// // 6-0. Introduction

// // 이 코드들은 state를 변경할 때 모든 code들이 다시 항상 실행 됨.
// // 가끔은 이게 괜찮지만, 처음 딱 한번만 실행되고 다시는 실행되지 않도록 하고 싶을 때가 있다.
// // 그럴 때 useEffect 사용

// import { useState } from 'react';

// function App() {
//   // create react app을 사용하기 때문에 React.useState()에서 useState만 써도 됨
//   const [counter, setValue] = useState(0);
//   const onClick = () => setValue((prev) => prev + 1);
//   console.log('call an api');
//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick={onClick}>Click me</button>
//     </div>
//   );
// }

// export default App;

/////////////////////////////////////////////////////////
// 6-1. useEffect

// ✨ useEffect는 두 개의 argument를 가지는 function
// 첫 번째 argument는 우리가 딱 한 번만 실행하고 싶은 코드

// 처음 딱 한 번만 실행 되고, 다시는 실행되지 않도록 하고 싶을 때
// 첫 번째 component render에서만 실행되고 그 뒤로는 실행되지 않게 하고 싶을 때
// 예를 들면 api 데이터 불러오고 그 다음에 계속 render가 되지 않도록
// 나중에 state가 변화해도, 그 코드는 다시 실행되지 않게

import { useEffect, useState } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log('i run all the time'); // 클릭할 때마다(state가 변할 때 마다) 매번 실행
  // ✅ 코드 한 번만 실행.
  useEffect(() => {
    console.log('I run only once');
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
