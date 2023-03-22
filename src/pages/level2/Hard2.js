import { useNavigate } from 'react-router-dom';


const Hard2 = () => {
    const navigate = useNavigate();
    const goSucess = () => {
        navigate('/success');
    };
    const goFail = () => {
        navigate('/fail');
    };
    return (
        <div>
            <h1>다음 중 옳은 것을 고르시오.</h1>
            <ul>
                <li>
                    <button style={{width:200 , height: 80, fontWeight:'bolder' , background:"Aqua" , marginTop:20 }}    onClick={goFail}>Link를 사용하지 않고 페이지를 이동시켜주려면 Outlet을 사용해야 한다.</button> 
                </li>
                <li>
                    <button style={{width:200 , height: 80, fontWeight:'bolder' , background:"Aqua", marginTop:20 }}    onClick={goFail}>Route path="/" 는 path 경로를 제대로 표기해주지 않았기 때문에 오류가 발생한다. </button> 
                </li>
                <li>
                    <button style={{width:200 , height: 100, fontWeight:'bolder' , background:"Aqua", marginTop:20 }}    onClick={goSucess}>NavLink 컴포넌트는 링크에서 사용하는 경로가 현재 라우트의 경로와 일치하는 경우 특정 스타일 또는 CSS 클래스를 적용하는 컴포넌트이다.</button> 
                </li>
            </ul>
        </div>
    );
};

export default Hard2;