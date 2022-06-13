import { useRef, useEffect } from "../fre-godot";

export default function MenuButton({ options = [], text = 'menu', }) {
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