import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const goHome = () => {
        navigate('/');
    };


    return (
        <div>
            <header style={{ background: 'blue' ,padding: 16, fontSize: 50 ,textAlign: 'center' }}>
                <h1 style={{fontSize:30}}>~리액트를 이용한 미로 찾기~</h1>
                <button style={{width:200 , height: 50 , marginLeft:10, marginRight:200 , fontWeight:'bolder', background:"Aqua"}}    onClick={goBack}>이전 문제</button>
                <button style={{width:200 , height: 50, fontWeight:'bolder' , background:"Aqua" }}    onClick={goHome}>홈</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;