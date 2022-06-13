// @ts-nocheck
import { useState } from "../fre-godot";

import LineEdit from './LineEdit'

export default function Calculator() {
   const [expression, setExpression] = useState('');
   const [result, setResult] = useState('');

   function handleTextChange(text) {
      setExpression(text)
   }

   function keyPressed(x) {
      setExpression(expression + String(x))
   }

   function evaluate() {
      const evaluateExpression = new godot.Expression()
      evaluateExpression.parse(expression)
      const result = evaluateExpression.execute();
      console.log(result)
      setResult(String(result))
   }

   return (
      <panelcontainer theme={{}}>
         <panel anchor={15} />
         <vbox anchor={15}>
            <LineEdit
               placeholder_text={'Type....'}
               text={expression}
               on_text_changed={(e) => { handleTextChange(e) }}
            />
            <label text={`${result}`} />
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
            <hbox>
               <control rect_min_size={new godot.Vector2(30, 30)} />
               <button rect_min_size={new godot.Vector2(30, 30)} text={'0'} on_pressed={() => { keyPressed(0) }} />
               <control rect_min_size={new godot.Vector2(30, 30)} />
            </hbox>
            <hbox>
               <button rect_min_size={new godot.Vector2(30, 30)} text={'+'} on_pressed={() => { keyPressed('+') }} />
               <button rect_min_size={new godot.Vector2(30, 30)} text={'-'} on_pressed={() => { keyPressed('-') }} />
               <button rect_min_size={new godot.Vector2(30, 30)} text={'*'} on_pressed={() => { keyPressed('*') }} />
               <button rect_min_size={new godot.Vector2(30, 30)} text={'='} on_pressed={evaluate} />
            </hbox>
            <hbox>
            </hbox>

         </vbox>
      </panelcontainer>
   )
}