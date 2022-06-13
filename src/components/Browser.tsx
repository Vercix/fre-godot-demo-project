
// @ts-nocheck

import { useState, useRef, useEffect } from "../fre-godot";
import LineEdit from "./LineEdit";

import useFetch from '../hooks/useFetch'
import AppTitleBar from '../classes/AppTitleBar'

export default function TestComp() {
   const titleBarRef = useRef(null)

   const [posts, setPosts] = useState([])
   const [show, setShow] = useState(true)
   const [hasReceivedPosts, setHasReceivedPosts] = useState(false)
   const [searchPath, setSearchPath] = useState('/posts')
   const resp = useFetch(searchPath)

   function receivedPosts(newPosts) {
      console.log('---- received posts----')
      setPosts(newPosts)
      setHasReceivedPosts(true)
   }

   function onTextChanged(newText) {
      setSearchPath(newText)
   }

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

   function closeWindow() {
      titleBarRef.current.get_tree().quit();
   }
   function minimizeWindow() {
      godot.OS.set_window_minimized(true)
   }

   useEffect(() => {
      if (!resp) return;
      try {
         const parsedResponse = JSON.parse(resp)
         if (!Array.isArray(parsedResponse)) {
            throw new Error('Response is not an array')
         }
         setPosts(parsedResponse)

      } catch (err) {
         console.log(err)
         setPosts([])
      }
   }
      , [resp])

   function toggleShow() {
      console.log('toggleShow')
      console.log(show)
      setShow(!show)
   }

   return (
      <control anchor={15}>

         <vbox seperation={0} anchor={15} name={'vtop'}>
            <AppTitleBar
               style={{
                  rect_min_size: new godot.Vector2(0, 50)
               }}
               ref={titleBarRef}
               title={searchPath}
            >
               <hbox name={'A'} >
                  <hbox name={'Htop'}>
                     <button
                        style={{
                           rect_min_size: new godot.Vector2(40, 0),
                           mouse_default_cursor_shape: 2,
                        }}
                        text={'_'}
                        on_pressed={minimizeWindow}
                     />
                     <button
                        style={{
                           rect_min_size: new godot.Vector2(40, 0),
                           mouse_default_cursor_shape: 2,
                        }}
                        text={'X'}
                        on_pressed={closeWindow}
                     />

                  </hbox>
               </hbox>

            </AppTitleBar >
            <panelcontainer size={{ height: 3 }}>
               <panel >
                  <vbox anchor={15} size={{ width: 3 }}>

                     <hbox size={{ width: 3 }}>
                        <LineEdit
                           text={searchPath}
                           on_text_changed={onTextChanged}
                           style={{
                              rect_min_size: new godot.Vector2(0, 50),
                              mouse_default_cursor_shape: 1,
                           }}
                           size={{ width: 3 }}
                        />
                        <button size={{ width: 0 }} text={`SEARCH`} />
                     </hbox>
                     <scrollcontainer size={{ height: 3, width: 3 }} anchor={15} >
                        <vbox anchor={15} size={{ height: 3, width: 3 }}>

                           {posts.map((el, i) => (
                              <panelcontainer key={el.id}>
                                 <panel
                                 >
                                 </panel>
                                 <vbox >
                                    <label size={{ height: 3 }} text={el.title || el.name} />
                                    <button size={{ width: 0 }} text={`Read`} />
                                 </vbox>
                              </panelcontainer>

                           ))}

                        </vbox>
                     </scrollcontainer>
                  </vbox>
               </panel>
            </panelcontainer>
         </vbox>
      </control>
   )
}