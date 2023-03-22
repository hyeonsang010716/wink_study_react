import { useNavigate } from 'react-router-dom';


const Easy2 = () => {
    const navigate = useNavigate();
    const goSucess = () => {
        navigate('/success');
    };
    const goFail = () => {
        navigate('/fail');
    };
    return (
        <div>
            <h1>동적인 배열을 렌더링해야 할 때 써야 되는 함수를 고르시오.</h1>
            <ul>
                <li>
                    <button style={{width:200 , height: 50, fontWeight:'bolder' , background:"Aqua" , marginTop:20 }}    onClick={goFail}>spread()</button> 
                </li>
                <li>
                    <button style={{width:200 , height: 70, fontWeight:'bolder' , background:"Aqua", marginTop:20 }}    onClick={goFail}>useRef()</button> 
                </li>
                <li>
                    <button style={{width:200 , height: 70, fontWeight:'bolder' , background:"Aqua", marginTop:20 }}    onClick={goSucess}>map()</button> 
                </li>
            </ul>
        </div>
    );
};

export default Easy2;