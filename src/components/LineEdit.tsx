import { useEffect, useRef } from "../fre-godot";

export default function LineEdit(props) {
   const { text, placeholder_text = 'Path...', on_text_changed,  ...passThroughProps } = props;
   const ref = useRef(null)
   const cursorRef = useRef(0)

   useEffect(() => {
      const lineedit = ref.current;
      lineedit.set_cursor_position(cursorRef.current);
   }, [text])

   function onTextChanged(newText) {
      const lineedit = ref.current;
      cursorRef.current = lineedit.get_cursor_position();
      on_text_changed(newText);
   }

   return (
      <lineedit
         ref={ref}
         placeholder_text={placeholder_text}
         text={text}
         on_text_changed={onTextChanged}
         {...passThroughProps}
      />
   )
}