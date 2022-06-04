
// @ts-nocheck
import { useState, useEffect } from "../fre-godot";

export default function TestComp() {
   const [num, setNum] = useState(0);
   const arr = [1, 2, 3, 4, 5]
   const test = false

   function handleClick(x) {
      console.log('clicking button')
      setNum(num + x)
   }

   useEffect(() => {
      console.log('yeehaa be a cowboy')
   } 
   ,[])

   return (
      <control>
         {test && <label rect_position={new godot.Vector2(25, 150)} text={`I SHOULD NOT SHOW`}/>}
         {!test && <label rect_position={new godot.Vector2(25, 150)} text={`I SHOULD SHOW`}/>}
         {
            arr.map((el) => ( 
               <label rect_position={new godot.Vector2(10, num * 5 + el * 15)} text={`${el}`}/>
            ))
         }
         <button rect_position={new godot.Vector2(25, 25)} onPressed={() => handleClick(1)} text={`+ ${num} +`} />
         <button rect_position={new godot.Vector2(25, 50)} onPressed={() => handleClick(-1)} text={`- ${num} -`} />
      </control>
   )
}

