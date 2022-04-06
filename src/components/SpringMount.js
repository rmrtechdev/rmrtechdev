import './App.css'
import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import SkillsRow from './components/SkillRow';



const App = () => {
    const [items, setItems] = useState([]);
    const transition = useTransition(items, {
        from: { x: -100, y: 800, opacity: 0, width: 11, height: 11 },
        //enter now accepts argument/attribute as a callback! not an object...
        enter: item => async (next) => {
            await next({ y: item.y, opacity: 1, delay: item.delay });
            await next({ x: 0, width: 100, height: 100 });
        }
    });
    return (
        <div className="app">
            <button onClick={() => {
                setItems(v => v.length ? [] : [
                    // below are the "callback" values for ^next 'enter' positioning
                    { y: -100, delay: 336 },
                    { y: 0, delay: 666 },
                    { y: 100, delay: 1100 }]);
            }}>{items.length ? 'un-mount' : 'mount'}</button>
            <div className='container'>
                {transition((style, item) =>
                    item ? <animated.div style={style} className="item" /> : ''
                )}
            </div>
        </div>
    );
}
export default App; 