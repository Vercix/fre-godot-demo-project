// @ts-nocheck
import { useState } from "../fre-godot";

import LineEdit from './LineEdit'

export default function ToDoList() {
   const [text, setText] = useState('xxx');

   function handleTextChange(text) {
      console.log('~~~~handleTextChange')
      console.log(text)
      setText(text)
   }


   return (
      <panel anchor={15} rect_min_size={new godot.Vector2(200, 200)}>
         <vbox anchor={15}>

            <LineEdit
               placeholder_text={'Type....'}
               text={text}
               on_text_changed={(e) => { handleTextChange(e) }}
            />
            <label text={`${text}`} />
            <hseperator />
            <hbox>
               <button rect_min_size={new godot.Vector2(30, 30)} text={'1'} on_pressed={() => { console.log(1) }} />
               <button rect_min_size={new godot.Vector2(30, 30)} text={'2'} on_pressed={() => { console.log(2) }} />
               <button rect_min_size={new godot.Vector2(30, 30)} text={'3'} on_pressed={() => { console.log(3) }} />
            </hbox>
            <hbox>
               <button rect_min_size={new godot.Vector2(30, 30)} text={'4'} on_pressed={() => { console.log(4) }} />
               <button rect_min_size={new godot.Vector2(30, 30)} text={'5'} on_pressed={() => { console.log(5) }} />
               <button rect_min_size={new godot.Vector2(30, 30)} text={'6'} on_pressed={() => { console.log(6) }} />
            </hbox>
            <hbox>
               <button rect_min_size={new godot.Vector2(30, 30)} text={'7'} on_pressed={() => { console.log(7) }} />
               <button rect_min_size={new godot.Vector2(30, 30)} text={'8'} on_pressed={() => { console.log(8) }} />
               <button rect_min_size={new godot.Vector2(30, 30)} text={'9'} on_pressed={() => { console.log(9) }} />
            </hbox>

         </vbox>
      </panel>
   )
}

