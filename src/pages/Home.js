import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const goEasy = () => {
        navigate('/easy1');
    };
    const goHard = () => {
        navigate('/hard1');
    };
    const goAbout = () => {
        navigate('/about');
    };
    const goArticle = () => {
        navigate('/article');
    };
    return (
        <div>
            <h1>미로를 탐험할 준비가 되었나요?</h1>
            <p style={{fontWeight:'bolder'}}>규칙은 간단합니다. 보기에 맞는 정답을 골라주시면 됩니다.</p>
            <p style={{marginLeft:110,fontWeight:'bolder'}}> |난이도|</p>
            <ul>
                <li>
                    <button style={{width:200 , height: 50, fontWeight:'bolder' , background:"Aqua" , marginTop:20  }}    onClick={goEasy}>EASY 모드</button> 
                </li>
                <li>
                    <button style={{width:200 , height: 50, fontWeight:'bolder' , background:"Aqua" , marginTop:20  }}    onClick={goHard}>Hard 모드</button> 
                </li>
                <li>
                    <button style={{width:200 , height: 50, fontWeight:'bolder' , background:"Aqua" , marginTop:20  }}    onClick={goAbout}>API..?</button>
                </li>
                <li>
                    <button style={{width:200 , height: 50, fontWeight:'bolder' , background:"Aqua" , marginTop:20  }}    onClick={goArticle}>환경설정</button>
                </li>
            </ul>
        </div>
    );
};

export default Home;