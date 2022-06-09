import { render } from "./fre-godot";


export default class GodotFreApp extends godot.Control {
	app : string;
	
	
	constructor() {
		super();	
	}
	
	async _enter_tree() {
		console.log("~~~~~~~~~~~~~~~~~~~~~~~");
	}
	
	// Called when the node enters the scene tree for the first time.
	async _ready() {
		console.log("_____Ready______");
		var test = (await import(`res://dist/components/${this.app}.jsx`))
		render(<test.default/>, this);
	}
	
	// Called every frame. 'delta' is the elapsed time since the previous frame.
	_process(delta) {
		
	}
	
	
}

//godot
godot.register_class(GodotFreApp, 'GodotFreApp');
godot.set_script_icon(GodotFreApp, 'res://cross.png');
godot.register_property(GodotFreApp, 'app', 'ToDoList');

