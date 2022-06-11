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
  following = false;
  dragging_start_position = new godot.Vector2();
  title = 'TEST TITLE'

  //fre
  fiber: IFiber = null;
  children = [];

  constructor() {
    super();
    this.testPress = this.testPress.bind(this);
    console.log('_________________NEW CLASS________________________')
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
    console.log(this.fiber)
    this.title = 'PRESSED'
    console.log(this.fiber.node == this)
    console.log(this.children)
    console.log(this.children?.type)
    console.log(this.children?.props?.name)
    console.log('______________')
    this.fiber.props.title = 'PRESSED___test__'
    update(this.fiber)
  }

  _render() {
    return (
      <hbox name={'A'} >
        <hbox size={{ width: 3 }} name={'B'}>
          <label text={this.fiber.props.title} />
          <button on_pressed={this.testPress} text={this.title} />
          <Calculator />
        </hbox>
        {this.fiber.props.children}
      </hbox>
    )
  }

}

//godot
godot.register_class(AppTitleBar, 'AppTitleBar');

