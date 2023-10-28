import React from 'react';
import { useEffect,useState } from 'react';
import './HelloUserExp.scss';

const HelloUserExp = () => {
 
  const [animationClass, setAnimationClass] = useState('');
  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationClass('fin');
    }, 250);
  }, []);

  return (
    <div id="container" className={animationClass}>
      <svg
        id="hello-svg"
        data-name="hello"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 582 197"
      >
        <title>Hello</title>
        <path
          className="path path-1"
          d="M208,338c38-16.67,73.74-45.72,97.33-66,21.33-18.33,32.67-35.67,37.33-52.67C347.12,203.12,344,192,332,192c-11,0-21,10.33-24.94,27.68-4.52,19.89-22.06,107.82-29.39,149,15.67-72.33,36.33-81.33,53.67-81.33,22.33,0,24.67,18.67,19.42,39-5.43,21.07-7.42,44.32,17.91,44.32,18,0,35.53-8.17,52.67-20,14-9.67,23-24,23-40,0-13.42-8-23.33-20.67-23.33s-24.33,12-24.33,33.33c0,27,16.33,48,44,48,25.67,0,47.67-19.67,62-44.67,13.61-23.74,30.67-64.67,33.33-92.67s-5.33-36-18.67-36-24.67,17.33-28.67,43.33S486,302,491.33,330s28,37.67,46,37.67,38.17-15.67,52-37c16.54-25.51,35.87-67.45,38.67-102,2-24.67-8.67-33.33-20-33.33-14.67,0-23.33,13.33-28,38-4.5,23.81-8,64-2,94,4.64,23.21,25.33,40.33,44.67,40.33s32.67-19,36.67-42.33"
          transform="translate(-199 -183)"
        />
        <path
          className="path path-2"
          d="M697.33,287.33C672,287.33,661.33,305,659,327c-2.81,26.54,10.33,41.67,29.67,41.67,22,0,34.54-20.78,36.67-40.67,2-18.67-7.39-39.13-28-40.67"
          transform="translate(-199 -183)"
        />
        <path
          className="path path-3"
          d="M714.8,295.12c12.11,12.26,43.53,9.55,56.53-5.79"
          transform="translate(-199 -183)"
        /> 
        <line
          className="path path-4"
          x1="561"
          y1="181.67"
          x2="561"
          y2="181.67"
        />        
      </svg>
    </div>
  );
};
export default HelloUserExp;