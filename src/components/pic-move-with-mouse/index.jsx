import { useEffect, useRef, useState } from 'react';
import dogPic from '../../assets/example.png';
import './index.css';

function PicMoveWithMouse() {

  // 下面是普通版本的做法
  // 可提升的点：
  // 最好不要直接操作原生的dom，通过ref操控会更好
  // 高频事件（如 mousemove）可使用节流（Throttle）限制触发频率
  // useEffect(() => {
  //   window.addEventListener('mousemove', (event) => {
  //     let dog = document.getElementById('dog');
  //     let x = event.x
  //     let y = event.y
  //     if (x < 10 || x > (document.documentElement.clientWidth - dog.offsetWidth)) {
  //       x = -300
  //     }
  //     if (y < 10 || y > (document.documentElement.clientHeight - dog.offsetHeight)) {
  //       y = -300
  //     }
  //     dog.style.left = (x || 0) + 'px'
  //     dog.style.top = (y || 0) + 'px'
  //   })
  // }, []);

  const dog = useRef(null)
  const handleMouseMove = (event) => {
    if (dog.current) {
      let x = event.x
      let y = event.y
      if (x < 10 || x > (document.documentElement.clientWidth - dog.offsetWidth)) {
        x = -300
      }
      if (y < 10 || y > (document.documentElement.clientHeight - dog.offsetHeight)) {
        y = -300
      }
      dog.current.style.left = `${x}px`
      dog.current.style.top = `${y}px`
    }
  }
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div>
        <img src={dogPic} id="dog" width='50px' ref={dog} />
      </div>
    </>
  )
}

export default PicMoveWithMouse
