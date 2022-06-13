import { useState } from "../fre-godot";


import TestClass from '../classes/Test'
import AppTitleBar from '../classes/AppTitleBar'

const Counter = () => {
   const [count, setCount] = useState(0);

   function counter() {
      console.log('++++++')
      setCount(count + 1)
   }

   return (
      <hbox>
         <label text={String(count)} />
         <button text={'+1'} on_pressed={counter} />
      </hbox>
   );
};

const DoubleCounter = () => {

   function test() {
      console.log('B')
   }

   return <hbox><button text={'BUTTON B'} on_pressed={test} /></hbox>;
};

export default function App() {
   const [show, setShow] = useState(false)

   function toggleShow() {
      setShow(!show)
   }
   return (

      <vbox>
         <vbox>
            <Counter />
            <button text={'Toggle'} on_pressed={toggleShow} />
            {show && <hbox><label text={'HELL OWORLD'} /></hbox>}
         </vbox>
         <hbox>
            <AppTitleBar>

               <Counter />
            </AppTitleBar>
         </hbox>
      </vbox>
   )

}
