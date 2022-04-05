import '/Users/leviieathan/rmrtechdev/src/App.css'
import { useState } from 'react';
import { useTransition , animated } from 'react-spring';

const Trans = () =>  {
    const [isVisible, setIsVisible] = useState(false);
    const transition = useTransition(isVisible, {
        from: {x: -100, y: 800, opacity: 0, height: 0},
        to: { x: 0, y: 0, opacity: 1 }
        })
return (
    <div className="app">
        <button onClick={() => {
            setIsVisible(v => !v);
            //
        }}>
            {isVisible ? 'un-mount' : 'mount'}</button>
        <div className='container'>
            {transition((style, item) =>
            item ? <div style={style} className="item" /> : ' '
            )}
        </div>
    </div>
);
}
export default Trans; 