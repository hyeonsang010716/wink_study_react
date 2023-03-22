import { useNavigate } from 'react-router-dom';


const Hard1 = () => {
    const navigate = useNavigate();
    const goHard2 = () => {
        navigate('/hard2');
    };
    const goFail = () => {
        navigate('/fail');
    };
    return (
        <div>
            <h1>const [inputs, setInputs] = useState() 를 정확하게 서술한 것을 고르시오.</h1>
            <ul>
                <li>
                    <button style={{width:200 , height: 80, fontWeight:'bolder' , background:"Aqua" , marginTop:20 }}    onClick={goHard2}>컴포넌트에서 동적인 값을 상태를 useState를 통해서 inputs의 값을 바꿀 수 있습니다.</button> 
                </li>
                <li>
                    <button style={{width:200 , height: 80, fontWeight:'bolder' , background:"Aqua", marginTop:20}}    onClick={goFail}>컴포넌트에게 전달되는 props 는 파라미터를 통하여 조회 할 수 있습니다.</button> 
                </li>
                <li>
                    <button style={{width:200 , height: 80, fontWeight:'bolder' , background:"Aqua", marginTop:20 }}    onClick={goFail}>컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리하는 용도로 사용됩니다.</button> 
                </li>
            </ul>
        </div>
    );
};

export default Hard1;