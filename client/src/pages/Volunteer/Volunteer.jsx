import {useState} from 'react'
import Button from "../components/Button/Button"

export function VolunteerPage() {
  const [postName, setPostName] = useState("");
  const [postInf, setPostInf] = useState("");
  return (
    <div>
      <h1>Опубликовать набор</h1>
      <h2>{postName}</h2>
      <p2>{postInf}</p2>
      <br />
      <br />
      <br />
      <br />
      <input placeholder='Название' onChange={(e) => {
        setPostName(e.target.value)
      }} />
      <br />
      <input placeholder='Информация' onChange={(e) => {
        setPostInf(e.target.value)
      }} />
      <br />
      <br />
      <Button onClick={() => {
        setPostInf(publicPost(postInf))
      }}>Опубликовать</Button>
    </div>
  )
}


function publicPost(n) {
   let info = n;
   return info;
}