const states1 = [
  { name: "Alabama", capital: "Montgomery" },
  { name: "Arizona", capital: "Phoenix" },
  { name: "Arkansas", capital: "Little Rock" },
];

for (const state of states1) {
  console.log(state.capitol);
}

const states2 = [
  { name: "Alabama", capitol: "Montgomery" },
  { name: "Arizona", capitol: "Phoenix" },
  { name: "Arkansas", capitol: "Little Rock" },
];

for (const state of states2) {
  // 타입스크립트는 초기값에서 오타가 난건지 아닌지 알 수 없음
  // 따라서 아래 제시되는 해결책은 잘못된 해결책임
  console.log(state.capital);
}

const states3 = [
  { name: "Alabama", capitol: "Montgomery" },
  { name: "Arizona", capital: "Phoenix" },
  { name: "Arkansas", capitol: "Little Rock" },
];

for (const state of states3) {
  // 초기값에 capital, capitol 이 모두 있어 에러 나지 않음
  console.log(state.capital);
  // 이럴 경우 타입 선언을 통해 원래 코드의 의도를 명확히 할 수 있음
}

interface State {
  name: string;
  capital: string;
}

const states4: State[] = [
  { name: "Alabama", capital: "Montgomery" },
  { name: "Alaska", capitol: "Juneau" },
  { name: "Arizona", capital: "Phoenix" },
  { name: "Arkansas", capital: "Little Rock" },
];
