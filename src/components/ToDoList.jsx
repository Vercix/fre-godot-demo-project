// @ts-nocheck
import { useState } from "../fre-godot";

import LabelButton from "./LabelButton";

function Text({ text }) {
   return <label autowrap={true} text={text} />
}

export default function ToDoList() {
   const margin = 5;
   // const [labels, setLabels] = Spark.useState([]);
   const [num, setNum] = useState(0);
   const [text, setText] = useState('------------');
   const [show, setShow] = useState(true);

   const [labels, setLabels] = useState([])

   function onReady() {
      console.log('to do list entered the scene')
   }

   function handleClick() {
      console.log('clicking button')
      setLabels([...labels, text])
   }

   function handleShowClick() {
      console.log('clicking show button')
      setShow(!show)
   }

   function addNum(x) {
      setNum(num + x)
   }

   function handleTextChange(text) {
      setText(text)
   }

   function handleSliderChange(x) {
      setNum(x)
   }

   function onRemoveElement(index) {
      console.log('-----index-----')
      console.log(index)
      console.log(labels)
      console.log(labels.slice(0, index).concat(labels.slice(index + 1)))
      console.log('-----index-----')
      setLabels(labels.slice(0, index).concat(labels.slice(index + 1)))
   }

   return (
      <vbox anchor={15} onReady={onReady}>
         <lineedit
            placeholder_text={'Type....'}
            text={text}
            onText_changed={(e) => { handleTextChange(e) }}
         />


         {labels.map((el, i) => (
            <LabelButton key={i} text={`${i}: ${text}-${i}`} onRemove={() => { onRemoveElement(i) }} />
         ))}



         <label text={text} />
         {/* {labels.length > 2 && <label text={'SHOW LABEL SIZE'} />} */}
         <button name={'add button'} text={'Add To Do'} onPressed={handleClick} />



         {show && <label text={'SHOW LABEL'} />}
         <button name={'Show Button'} text={'Toggle'} onPressed={handleShowClick} />
      </vbox>
   )
}

