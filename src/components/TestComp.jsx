
// @ts-nocheck
import { useState, useEffect, useRef } from "../fre-godot";
import LabelButton from "./LabelButton";
import CLOSEICON from "res://cross.png";
import SECONDSCENE from "res://second.tscn";

function MenuButton({ options = [], text = 'menu', }) {
   const ref = useRef(null)

   useEffect(() => {
      const menu = ref.current;
      options.forEach((el) => {
         if (typeof el === 'object') {
            menu.get_popup().add_item(el.name)
         } else {
            menu.get_popup().add_item(el)
         }
      })

      menu.get_popup().connect('index_pressed', (i) => {
         options?.[i]?.onPressed ? options[i].onPressed() : null
      })

      return () => {
         menu.get_popup().clear()
      }

   }
      , [options])




   return (
      <menubutton switch_on_hover={true} ref={ref} text={text} />
   )

}

export default function TestComp() {
   const rootRef = useRef(null)

   const [options, setOptions] = useState( [
      {
         name: "Test",
      },
      {
         name: "Test",
      },
      {
         name: "Test",
      },
   ])

   function handleClick() {
      rootRef.current.get_tree().change_scene_to(SECONDSCENE)
   }

   function addOption() {
      setOptions([...options, {name:'button test', onPressed: handleClick}])
   }

   return (
      <panelcontainer anchor={15} rect_min_size={new godot.Vector2(200, 200)}>
         <panel ref={rootRef}>
            <vbox anchor={15}>
               <panelcontainer>
               </panelcontainer>
               <button text={'add option'} onPressed={addOption} />
               <hbox>
                  <MenuButton
                     text={'Test'}
                     options={options}
                  />
               </hbox>
            </vbox>
         </panel>
      </panelcontainer>
   )
}

