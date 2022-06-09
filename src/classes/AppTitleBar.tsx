

function Test() {
    return <label text="Test Func Comp" ></label>
}

export default class AppTitleBar extends godot.PanelContainer {
    //app = jsx(TestComp, {})
    following = false;
    dragging_start_position = new godot.Vector2();
    children = [];

    constructor() {
        super();
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

    _render() {
        return (
            <hbox >
                <hbox size={{ width: 3 }}>
                    <Test />
                    <label text={this.title || "NOT FOUND"} />
                </hbox>
                {this.children}
            </hbox>
        )
    }

}

//godot
godot.register_class(AppTitleBar, 'AppTitleBar');

