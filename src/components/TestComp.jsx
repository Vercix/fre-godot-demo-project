
// @ts-nocheck

import { useState, useRef, useEffect } from "../fre-godot";
import LineEdit from "./LineEdit";

import fetch from '../utils/fetch'


export default function TestComp() {
   const rootRef = useRef(null)
   const titleBarRef = useRef(null)

   const [posts, setPosts] = useState([])
   const [hasReceivedPosts, setHasReceivedPosts] = useState(false)
   const [searchPath, setSearchPath] = useState('/posts')
   
   const [following, setFollowing] = useState(false)
   const [draggingStartPosition, setDraggingStartPosition] = useState(new godot.Vector2())
   
   function receivedPosts(newPosts) {
      console.log('---- received posts----')
      setPosts(newPosts)
      setHasReceivedPosts(true)
   }

   function onTitleBarGuiInput(event) {
      if (event instanceof godot.InputEventMouseButton) {
         if (event.get_button_index() == 1) {
            setFollowing(!following)
            setDraggingStartPosition(titleBarRef.current.get_local_mouse_position())
         }
      }
   }

   function onGuiInput(e) {
      console.log(e)
      console.log(e instanceof godot.InputEventMouseMotion)
   }

   function onTextChanged(newText) {
      setSearchPath(newText)
   }

   useEffect(() => {
      console.log('draggingStartPosition changed')
   }, [draggingStartPosition])

   useEffect(() => {
      console.log('posts changed')
   }, [posts])

   useEffect(() => {
      console.log('search path changed')
      console.log(searchPath)


   }, [searchPath])

   useEffect(() => {
      console.log('hasReceivedPosts')
      console.log(hasReceivedPosts)
   }, [hasReceivedPosts])

   async function makeRequest() {
      try {
         let response = await fetch({ path: searchPath })
         response = JSON.parse(response)
         if (!Array.isArray(response)) {
            throw new Error('Response is not an array')
         }
         setPosts(response)

      } catch (err) {
         console.log(err)
         setPosts([])
      }
   }

   useEffect(() => {
      setPosts([])
      //makeRequest()
      return;
   }
      , [searchPath])

   function test(delta){
      console.log(
      'this is a process test'
      )
   }

   return (
      <panel anchor={15}>

         <vbox seperation={0} anchor={15}>
            <panelcontainer
               style={{
                  rect_min_size: new godot.Vector2(0, 50),
                  mouse_default_cursor_shape: 2,
               }}
               ref={titleBarRef}
               on_gui_input={onTitleBarGuiInput}
               _process={test}
            >
               <panel mouse_filter={2}>
                  <hbox anchor={15} mouse_filter={2}>
                     <button
                        style={{
                           rect_min_size: new godot.Vector2(40, 0),
                           mouse_default_cursor_shape: 2,
                        }}
                        text={'_'}
                     />
                     <button
                        style={{
                           rect_min_size: new godot.Vector2(40, 0),
                           mouse_default_cursor_shape: 2,
                        }}
                        text={'X'}
                     />
                  </hbox>
               </panel>
            </panelcontainer >
            <panelcontainer size={{ height: 3 }}>
               <panel >
                  <vbox anchor={15} size={{ width: 3 }}>
                     <hbox size={{ width: 3 }}>
                        <LineEdit
                           text={searchPath}
                           on_text_changed={onTextChanged}
                           style={{
                              rect_min_size: new godot.Vector2(0, 50),
                              mouse_default_cursor_shape: 2,
                           }}
                           size={{ width: 3 }}
                        />
                        <button size={{ width: 0 }} text={`SEARCH`} />
                     </hbox>
                     <scrollcontainer size={{ height: 3, width: 3 }} anchor={15} >
                        <vbox anchor={15} size={{ height: 3, width: 3 }}>


                           {posts.map((el, i) => (
                              <panelcontainer >
                                 <panel
                                    style={{
                                       rect_min_size: new godot.Vector2(0, 50),
                                       mouse_default_cursor_shape: 2,
                                    }}
                                 //on_gui_input={onGuiInput}
                                 >
                                    <vbox anchor={15}>
                                       <label size={{ height: 3 }} key={el.id} text={el.title || el.name} />
                                       <button size={{ width: 0 }} text={`Read`} />
                                    </vbox>
                                 </panel>
                              </panelcontainer>

                           ))}

                        </vbox>
                     </scrollcontainer>
                  </vbox>
               </panel>
            </panelcontainer>
         </vbox>
      </panel>
   )
}

