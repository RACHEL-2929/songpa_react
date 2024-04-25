// ffc - Function Component
function Print() {
    return (
        <div>it에오신것을 환영합니다.</div>
    );
}
//ff: Printc:export
//ctrl+shift+r :파일찾기
// export default Print;

//       sfc - Stateless Function Component (Arrow function)
const Print2 = () => {
    return (
        <div>
            화살표는 펑션이다
            안녕하세요 반가워요
        </div>
    );
}

// //기본 export default 출력할 함수, 펑션, 메소드
export default Print2;