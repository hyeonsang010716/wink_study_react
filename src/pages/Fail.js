import { useNavigate } from 'react-router-dom';


const Fail = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    };
    return (
        <div>
            <h2>당신은... 우리와 함께 할 수 없습니다..</h2>
            <button style={{width:200 , height: 50, fontWeight:'bolder' , background:"Aqua" }}    onClick={goHome}>다시 리액트 마스터에 도전하시겠습니까?</button> 
        </div>
    );
};

export default Fail;