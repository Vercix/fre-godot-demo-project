// @ts-nocheck
import { useState, useEffect } from "../fre-godot";
import LineEdit from './LineEdit'

import LabelButton from "./LabelButton";

export default function ToDoList() {
   const [text, setText] = useState('');
   const [labels, setLabels] = useState([])

   useEffect(() => {
      console.log('LABELS WERE CHANGED')
   }, [labels])

   function handleClick() {
      setLabels([...labels, text])
      setText('')
   }

   function onRemoveElement(index) {
      setLabels(labels.slice(0, index).concat(labels.slice(index + 1)))
   }

   function handleTextChange(text) {
      setText(text)
   }

   return (
      <panel anchor={15} rect_min_size={new godot.Vector2(200, 200)}>
         <vbox
            anchor={15}
         >
            <LineEdit
               placeholder_text={'Type....'}
               text={text}
               on_text_changed={handleTextChange}
            />
            <label text={`${text}`} />

            <hseperator />

            {labels.map((el, i) => (
               <LabelButton key={el} text={`${i}: ${el}`} on_remove={() => { onRemoveElement(i) }} />
            ))}
            <button name={'add button'} text={'Add To Do'} on_pressed={handleClick} />
         </vbox>
      </panel>
   )
}