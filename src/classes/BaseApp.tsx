
// @ts-nocheck

import { IFiber } from 'fre-godot'

import AppTitleBar from './AppTitleBar'

interface FreNode {
   _render: () => IFiber
}



export default class App extends godot.Panel implements FreNode {

   //fre
   fiber: IFiber = null;
   children = [];
   renderOnEnter = false;

   constructor() {
      super();
   }

   _enter_tree() {
      this.closeWindow = this.closeWindow.bind(this);
      this.minimizeWindow = this.minimizeWindow.bind(this);
   }

   // Called when the node enters the scene tree for the first time.
   _ready() {

   }

   closeWindow() {
      godot.Engine.get_main_loop().quit();
   }

   minimizeWindow() {
      godot.OS.set_window_minimized(true)
   }

   _render() {
      return (
         <vbox
            seperation={0}
            anchor={15}
            name={'vtop'}
         >
            <AppTitleBar
               style={{
                  rect_min_size: new godot.Vector2(0, 50)
               }}
               title={'Calculator'}
            >
               <hbox name={'A'} >
                  <hbox name={'Htop'}>
                     <button
                        style={{
                           rect_min_size: new godot.Vector2(40, 0),
                           mouse_default_cursor_shape: 2,
                        }}
                        text={'_'}
                        on_pressed={this.minimizeWindow}
                     />
                     <button
                        style={{
                           rect_min_size: new godot.Vector2(40, 0),
                           mouse_default_cursor_shape: 2,
                        }}
                        text={'X'}
                        on_pressed={this.closeWindow}
                     />

                  </hbox>
               </hbox>

            </AppTitleBar >
            <panel>
               <panel />
               <gridcontainer >
                  {this.fiber.props.children}
               </gridcontainer>
            </panel>
         </vbox>
      )
   }

}


godot.register_property(App, 'renderOnEnter', false);