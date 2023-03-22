import { useNavigate } from 'react-router-dom';


const Easy2 = () => {
    const navigate = useNavigate();
    const goEasy3 = () => {
        navigate('/easy3');
    };
    const goFail = () => {
        navigate('/fail');
    };
    return (
        <div>
            <h1>다음 중 옳은 것을 고르시오</h1>
            <ul>
                <li>
                    <button style={{width:200 , height: 50, fontWeight:'bolder' , background:"Aqua" , marginTop:20 }}    onClick={goFail}>div 태그는 열린 상태로 사용해도 된다.</button> 
                </li>
                <li>
                    <button style={{width:200 , height: 70, fontWeight:'bolder' , background:"Aqua", marginTop:20 }}    onClick={goFail}>br 태그는 열려 있는 상태로 사용할 수 없기 때문에 닫아줘야한다.</button> 
                </li>
                <li>
                    <button style={{width:200 , height: 70, fontWeight:'bolder' , background:"Aqua", marginTop:20 }}    onClick={goEasy3}>컴포넌트에서 동적인 값을 상태를 만들어주기 위해 usestate 함수를 사용한다.</button> 
                </li>
            </ul>
        </div>
    );
};

export default Easy2;