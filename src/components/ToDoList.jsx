// @ts-nocheck
import { useState, useEffect } from "../fre-godot";

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

   useEffect(() => {
      console.log('LABELS WERE CHANGED')


   }, [labels])

   function handleClick() {
      console.log('clicking button')
      setLabels([...labels, makeid(5)])
   }

   function handleShowClick() {
      console.log('clicking show button')
      setShow(!show)
   }

   function addNum(x) {
      setNum(num + x)
   }

   function handleTextChange(text) {
      console.log('sdasd')
      console.log(text)
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

   function makeid(length) {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
         result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
      }
      return result;
   }

   return (
      <panel anchor={15} rect_min_size={new godot.Vector2(200, 200)}>
         <vbox anchor={15}>

            <lineedit
               placeholder_text={'Type....'}
               text={text}
               onText_changed={(e) => { handleTextChange(e) }}
               rect_min_size={new godot.Vector2(0, 50)}
            />
            <label text={`${text}`} />

            <hseperator />

            {labels.map((el, i) => (
               //<label key={el} text={`${i}: ${el}-${i}`} />
               <LabelButton key={el} text={`${i}: ${el}-${i}`} onRemove={() => { onRemoveElement(i) }} />
            ))}
            {labels.length > 2 && <label text={'SHOW LABEL SIZE'} />}
            <button name={'add button'} text={'Add To Do'} onPressed={handleClick} />

            <hseperator />

            <label text={`${num}`} />
            <progressbar value={num} />
            <hslider onValue_changed={handleSliderChange} />


            <hseperator />

            {show && <label text={'SHOW LABEL'} />}
            <button name={'Show Button'} text={'Toggle'} onPressed={handleShowClick} />
         </vbox>
      </panel>
   )
}

