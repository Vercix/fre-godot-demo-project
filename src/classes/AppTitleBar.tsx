import { IFiber } from 'fre-godot'
import { render, update, useState } from '../fre-godot'


import ToDoList from '../components/ToDoList'
import Calculator from '../components/Calculator'




interface FreNode {
  _render: () => IFiber
}


function Test() {
  const [text, setText] = useState("Test Func Comp")

  function test(){
    console.log("~~~~~PRESSED~~~~~")
    setText('HELLO?')
  }

  return (
    <vbox>
      <label text={text} />
      <button on_pressed={test} text="Test Func Comp" />
    </vbox>
  )
}

export default class AppTitleBar extends godot.PanelContainer implements FreNode {
  //app = jsx(TestComp, {})
  following = false;
  dragging_start_position = new godot.Vector2();
  title = 'TEST TITLE'

  //fre
  fiber: IFiber = null;
  children = [];

  constructor() {
    super();
    this.testPress = this.testPress.bind(this);
    //this.is_connected()
  }

  _enter_tree() {
    //render(this._render(), this)
  }

  // Called when the node enters the scene tree for the first time.
  _ready() {

  }

  _gui_input(event) {
    if (event instanceof godot.InputEventMouseButton) {
      if (event.get_button_index() == 1) {
        this.following = !this.following;
        this.dragging_start_position = this.get_local_mouse_position();
      }
    }
  }

  // Called every frame. 'delta' is the elapsed time since the previous frame.
  _process(delta) {
    if (this.following) {
      // @ts-ignore: can add vectors
      godot.OS.set_window_position(godot.OS.window_position + this.get_global_mouse_position() - this.dragging_start_position)
    }
  }

  testPress() {
    console.log('pressed')
    this.fiber.props.title = 'PRESSED___test__'
    update(this.fiber)
  }

  _render() {
    return (
      <hbox name={'A'} >
        <hbox size={{ width: 3 }} name={'B'}>
          <label text={this.fiber.props.title} />
        </hbox>
        {this.fiber.props.children}
      </hbox>
    )
  }

}

//godot
godot.register_class(AppTitleBar, 'AppTitleBar');

