import { useNavigate } from 'react-router-dom';


const Easy1 = () => {
    const navigate = useNavigate();
    const goEasy2 = () => {
        navigate('/easy2');
    };
    const goFail = () => {
        navigate('/fail');
    };
    return (
        <div>
            <h1>리액트 프로젝트를 만드는 명령어를 고르시오</h1>
            <ul>
                <li>
                    <button style={{width:200 , height: 50, fontWeight:'bolder' , background:"Aqua" , marginTop:20 }}    onClick={goFail}>1.yarn make react-app king-god-wink</button> 
                </li>
                <li>
                    <button style={{width:200 , height: 50, fontWeight:'bolder' , background:"Aqua", marginTop:20}}    onClick={goEasy2}>1.yarn create react-app king-god-wink</button> 
                </li>
                <li>
                    <button style={{width:200 , height: 50, fontWeight:'bolder' , background:"Aqua", marginTop:20 }}    onClick={goFail}>1.yarn mkdir react-app king-god-wink</button> 
                </li>
            </ul>
        </div>
    );
};

export default Easy1;