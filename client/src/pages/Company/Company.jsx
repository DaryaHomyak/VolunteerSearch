import { useCallback } from 'react';
import {useRef, useState} from 'react'
import Button from "../components/Button/Button"

export function CompanyPage() {
  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const [state, setState] = useState(0)

  const randomDigit = useCallback(() => {
    const a = firstInput.current.value;
    const b = secondInput.current.value;
    return Math.floor(Math.random() * (Number(b) - Number(a)) + Number(a));
  },[])

  return (
    <div>
            <Button onClick={() => {
        setState(randomDigit());
      }}>
      <p1>01.01.2023</p1>
      <h2>Форум и выставка "Безопасность и охрана труда"</h2>
      <h2>Благотворительная акция "Добрая ёлка"</h2></Button>
      <h2>{state}</h2>
      {/* <input placeholder="От" ref={ firstInput } />
      <input placeholder="До" ref={secondInput} /> */} 
      <br />
      <br/>
    </div>
  )
}


