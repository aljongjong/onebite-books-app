// loading.tsx
// 1. 현재 경로에 있는 페이지 컴퍼넌트 뿐만 아니라 layout처럼 해당 경로 아래에 있는 모든 비동기(async) 컴퍼넌트들을 스트리밍되도록 설정된다.
// 2. async가 붙은 컴퍼넌트만 ! 동기적 컴퍼넌트엔 스트리밍이 적용되지 않는다.
// 3. loading.tsx 컴퍼넌트로는 page 컴퍼넌트만 스트리밍이 적용가능하다.
// 4. 쿼리스트링만 변경되는 상황에서는 스트리밍이 동작하지 않는다.
export default function Loading() {
  return <div>Loading ...</div>;
}
