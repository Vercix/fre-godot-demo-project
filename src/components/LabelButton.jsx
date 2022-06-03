import Spark from "../GodotRenderer";


import CLOSEICON from 'res://cross.png';


export default function LabelButton({ text, onRemove }) {
   const [labelText, setLabelText] = Spark.useState(text);

   return (
      <hbox rect_min_size={new godot.Vector2(0, 25)}>
         <button
            onPressed={onRemove}
            icon={CLOSEICON}
         />
         <label text={labelText} />
      </hbox>
   )
}

