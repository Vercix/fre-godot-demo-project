import { render } from "./fre-godot";
import {jsx} from "./fre-godot/jsx-runtime"

import ToDoList from "./components/ToDoList"
import TestComp from "./components/TestComp"


export default class GodotReact extends godot.Control {
	app = jsx(TestComp, {});
	constructor() {
		super();
	}
	
	// Called when the node enters the scene tree for the first time.
	_ready() {
		console.log('_____Ready______');
		
		render(this.app, this)
		console.log("~~~~~~~~~~~~~~~~~~~~~~~")
		//Spark.workLoop()
	}
	
	// Called every frame. 'delta' is the elapsed time since the previous frame.
	_process(delta) {
		//Spark.workLoop()
	}
	
	
}


//godot
godot.register_class(GodotReact, 'GodotFre')