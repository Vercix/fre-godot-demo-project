
import { useState, useEffect } from "../fre-godot";
import CLOSEICON from 'res://cross.png';


export default function LabelButton({ text, on_remove }) {
   const [labelText, setLabelText] = useState(text);

   return (
      <hbox rect_min_size={new godot.Vector2(0, 25)}>
         <button
            on_pressed={on_remove}
            icon={CLOSEICON}
         />
         <label text={labelText} />
      </hbox>
   )
}

