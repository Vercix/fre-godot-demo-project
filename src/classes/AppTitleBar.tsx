import { IFiber } from 'fre-godot'
import { render, update } from '../fre-godot'


import ToDoList from '../components/ToDoList'
import Calculator from '../components/Calculator'

function Test() {
  return <label text="Test Func Comp" ></label>
}

interface FreNode {
  _render: () => IFiber
}

export default class AppTitleBar extends godot.PanelContainer implements FreNode {
  //app = jsx(TestComp, {})
  fiber: IFiber = null;
  following = false;
  dragging_start_position = new godot.Vector2();
  children = [];
  title = 'TEST TITLE'


  constructor() {
    super();
    this.testPress = this.testPress.bind(this);

  }

  _enter_tree() {
    render(this._render(), this)
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
    console.log(this.fiber)
    this.title = 'pressed'
    console.log(this.fiber.node == this)
    update(this.fiber)
  }

  _render() {
    return (
      <hbox >
        <hbox>
          <label text={this.title} />
          <button on_pressed={this.testPress} text={this.title} />
        </hbox>
        {this.children}
      </hbox>
    )
  }

}

//godot
godot.register_class(AppTitleBar, 'AppTitleBar');

