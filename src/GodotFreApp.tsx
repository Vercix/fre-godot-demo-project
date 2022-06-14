import { render } from "./fre-godot";

import App from "./classes/BaseApp";
import Calculator from './components/Calculator'


const rootTheme = {
	VBoxContainer:
	{
		constant: {
			seperation: 1
		}
	},
	Label:
	{
		color: {
			font_color: new godot.Color(0, 1, 0)
		}
	},
	Button:
	{
		color: {
			font_color: new godot.Color(1, 0, 0),
			font_color_hover: new godot.Color(0, 0, 1),
			font_color_pressed: new godot.Color(0, 1, 1)
		}
	}
}

export default class GodotFreApp extends godot.Control {
	app: string;

	constructor() {
		super();
	}

	_enter_tree() {
	}

	// Called when the node enters the scene tree for the first time.
	async _ready() {
		console.log("_____Ready______");
		render(
			<App
				anchor={15}
				theme={rootTheme}
			>
				<Calculator />
				<ToDoList />
			</App>,
			this
		);
	}

	// Called every frame. 'delta' is the elapsed time since the previous frame.
	_process(delta) {

	}

}

//godot
godot.register_class(GodotFreApp, 'GodotFreApp');