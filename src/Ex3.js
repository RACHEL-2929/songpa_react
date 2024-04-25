function Name() {
    return ( 
        <div>
            <p>이름</p>
            <p>나이</p>
            <p>주소</p>
        </div>
     );
}

export default Name;

//map사용해서
const Name2 = () => {
    let array = ['이메일','핸드폰'];
    return ( 
        array.map((item) => <p>{item}</p>)
     );
}
 
// export default Name2;

//한꺼번에 출력하게
const Name3 = () => {
    let array2 = ['이름','나이','주소','이메일','핸드폰'];
    return ( 
        array2.map((item) => <p>{item}</p>)
     );
}
 
// export default Name3;

// 다르게
const Name4 = () => {
    let array = ['이름','주소','나이'];
    let arrays = array.map((item)=> <p>{item}</p>)
    return ( arrays );
}
 
// export default Name4;
