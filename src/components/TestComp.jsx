
export default function TestComp() {
   return (
      <hbox rect_min_size={new godot.Vector2(0, 25)}>
         <control>
            <label text={'test'} />
            <label text={'test'} />
         </control>
         <label text={'test'} />
      </hbox>
   )
}

