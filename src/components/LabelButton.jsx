
import { useState, useEffect } from "../fre-godot";
import CLOSEICON from 'res://cross.png';


export default function LabelButton({ text, onRemove, rect_position }) {
   const [labelText, setLabelText] = useState(text);

   return (
      <hbox rect_position={rect_position} rect_min_size={new godot.Vector2(0, 25)}>
         <button
            onPressed={onRemove}
            icon={CLOSEICON}
         />
         <label text={labelText} />
      </hbox>
   )
}

