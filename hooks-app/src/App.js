import React, { useState, useMemo } from 'react';

const getAverage = (numbers) => {
  console.log('평균 값 계산중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
};

const App = () => {
  return (
    <div>
      <button onClick={getAverage([1, 2, 3])}>클릭</button>
    </div>
  );
};

export default App;
