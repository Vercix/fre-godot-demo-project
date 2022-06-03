export default class DomTreeViewerNode extends godot.PanelContainer {


	// Declare member variables here. Examples:
	info = {}
	infoContainer = null;

	constructor() {
		super();
	}

	// Called when the node enters the scene tree for the first time.
	_ready() {
		console.log('hello?????')
		this.infoContainer = this.$('Panel/VBoxContainer')
	}


	addInfo(id, data) {
		this.info[id] = data
		var newLabel = new godot.Label();
		newLabel.set_text(String(data));
		this.infoContainer.addChild(newLabel);
	}




	// Called every frame. 'delta' is the elapsed time since the previous frame.
	_process(delta) {

	}
}
