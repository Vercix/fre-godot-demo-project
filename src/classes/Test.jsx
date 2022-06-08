

export default class TestClass extends godot.PanelContainer {
    //app = jsx(TestComp, {})
    constructor() {
        super();
    }

    // Called when the node enters the scene tree for the first time.
    _ready() {
        console.log('I entered the tree')
        this.text = 'TESTING'
    }

    _gui_input(event){
        if (event instanceof godot.InputEventMouseButton) {
            if (event.get_button_index() == 1) {
               console.log('clicked')
            }
         }
    }

    // Called every frame. 'delta' is the elapsed time since the previous frame.
    _process(delta) {
    }


}

//godot
godot.register_class(TestClass, 'TestClass');

