import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Easy1 from './pages/level1/Easy1';
import Easy2 from './pages/level1/Easy2';
import Easy3 from './pages/level1/Easy3';
import Hard1 from './pages/level2/Hard1';
import Hard2 from './pages/level2/Hard2';
import Fail from './pages/Fail';
import Success from './pages/Success';
import Home from './pages/Home';
import Article from './pages/Article';
import Layout from './Layout';
import NotFound from './pages/NotFound';
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/easy1" element={<Easy1 />} />
                <Route path="/easy2" element={<Easy2 />} />
                <Route path="/easy3" element={<Easy3 />} />
                <Route path="/hard1" element={<Hard1 />} />
                <Route path="/hard2" element={<Hard2 />} />
                <Route path="/about" element={<About />} />
                <Route path="/article" element={<Article />}>
            </Route>
            <Route path="/fail" element={<Fail/>} />
            <Route path="/success" element={<Success/>} />
            
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
