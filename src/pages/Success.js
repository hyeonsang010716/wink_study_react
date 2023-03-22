import { useNavigate } from 'react-router-dom';


const Fail = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    };
    return (
        <div>
            <h2>리액트 마스터가 된 것을 축하드립니다!!</h2>
            <button style={{width:200 , height: 50, fontWeight:'bolder' , background:"Aqua" }}    onClick={goHome}>여기를 절대 누르지 마시오.</button> 
        </div>
    );
};

export default Fail;