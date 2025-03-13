import { useEffect, useState } from 'react';
import dog from '../../assets/example.png';
import './index.css';

function PicMoveWithMouse() {

  // 下面是普通版本的做法
  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      let dog = document.getElementById('dog');
      let x = event.x
      let y = event.y
      if (x < 10 || x > (document.documentElement.clientWidth - dog.offsetWidth)) {
        x = -300
      }
      if (y < 10 || y > (document.documentElement.clientHeight - dog.offsetHeight)) {
        y = -300
      }
      dog.style.left = (x || 0) + 'px'
      dog.style.top = (y || 0) + 'px'
    })
  }, []);

  return (
    <>
      <div>
        <img src={dog} id="dog" width='50px' />
      </div>
    </>
  )
}

export default PicMoveWithMouse
