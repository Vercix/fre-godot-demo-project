
// @ts-nocheck

import { useState, useRef, useEffect } from "../fre-godot";

import TestClass from "../classes/Test";

export default function TestComp() {

   function onPressed() {
      console.log('pressed')
   }

   return (
      <TestClass>
         
      </TestClass>
   )
}

