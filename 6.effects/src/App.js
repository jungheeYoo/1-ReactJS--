// 6-0. Introduction

// 이 코드들은 state를 변경할 때 모든 code들이 다시 항상 실행 됨.
// 가끔은 이게 괜찮지만, 처음 딱 한번만 실행되고 다시는 실행되지 않도록 하고 싶을 때가 있다.
// 그럴 때 useEffect 사용

import { useState } from 'react';

function App() {
  // create react app을 사용하기 때문에 React.useState()에서 useState만 써도 됨
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log('call an api');
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
