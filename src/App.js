import './App.css';
import HeaderPage from './component/Header';
import SliderPage from './component/Slider';
import SubSlider from './component/SubSlider'
import SubSlider1 from './component/SubSlider1';
import SubSlider2 from './component/SubSlider2';
import SubSlider3 from './component/SubSlider3';
import SubSlider4 from './component/SubSlider4';
function App() {
  return (
    <div > 
        <HeaderPage/>
        <SliderPage/>
        <SubSlider />
        <SubSlider1 />
        <SubSlider2 />
        <SubSlider3 />
        <SubSlider4 />
    </div>
  );
}

export default App;
