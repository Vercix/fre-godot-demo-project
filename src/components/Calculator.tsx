// @ts-nocheck
import { useState } from "../fre-godot";

import LineEdit from './LineEdit'

export default function Calculator() {
   const [text, setText] = useState('xxx');

   function handleTextChange(text) {
      keyPressed('~~~~handleTextChange')
      keyPressed(text)
      setText(text)
   }

   function keyPressed(x){
      setText(String(x))
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
               <button rect_min_size={new godot.Vector2(30, 30)} text={'1'} on_pressed={() => { keyPressed(1) }} />
               <button rect_min_size={new godot.Vector2(30, 30)} text={'2'} on_pressed={() => { keyPressed(2) }} />
               <button rect_min_size={new godot.Vector2(30, 30)} text={'3'} on_pressed={() => { keyPressed(3) }} />
            </hbox>
            <hbox>
               <button rect_min_size={new godot.Vector2(30, 30)} text={'4'} on_pressed={() => { keyPressed(4) }} />
               <button rect_min_size={new godot.Vector2(30, 30)} text={'5'} on_pressed={() => { keyPressed(5) }} />
               <button rect_min_size={new godot.Vector2(30, 30)} text={'6'} on_pressed={() => { keyPressed(6) }} />
            </hbox>
            <hbox>
               <button rect_min_size={new godot.Vector2(30, 30)} text={'7'} on_pressed={() => { keyPressed(7) }} />
               <button rect_min_size={new godot.Vector2(30, 30)} text={'8'} on_pressed={() => { keyPressed(8) }} />
               <button rect_min_size={new godot.Vector2(30, 30)} text={'9'} on_pressed={() => { keyPressed(9) }} />
            </hbox>

         </vbox>
      </panel>
   )
}

