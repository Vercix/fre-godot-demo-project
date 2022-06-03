import { render } from "./fre-godot";
import ToDoList from "./components/ToDoList"

export default class GodotReact extends godot.Control {

	constructor() {
		super();
	}

	// Called when the node enters the scene tree for the first time.
	_ready() {
		console.log('_____Ready______');

		render(ToDoList, this)
		console.log("~~~~~~~~~~~~~~~~~~~~~~~")
		//Spark.workLoop()
	}

	// Called every frame. 'delta' is the elapsed time since the previous frame.
	_process(delta) {
		//Spark.workLoop()
	}


}
