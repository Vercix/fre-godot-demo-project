export default class DomTreeViewer extends godot.Control {


	nodes = {}

	constructor() {
		super();
	}

	// Called when the node enters the scene tree for the first time.
	_ready() {

	}


	setElementWidths(node){

		var num = 1;


		node.get_children().forEach((child) => {
			node.set_meta('self_tree_width', this.setElementWidths(child))
		})
		

		return num + node.get_children().length
	}

	setSubWidths(node){
		node.get_children().forEach((child) => {
			this.setSubWidths(child)
			node.set_meta('self_tree_width', 1 + child.get_meta('self_tree_width'))
		})

		return 1 + child.get_meta('self_tree_width')
	}

	render() {
		Object.values(this.nodes)
		this.addNode(this, Object.values(this.nodes)[Object.values(this.nodes).length - 1])

		this.setElementWidths(this.get_children()[0])
		console.log(this.get_children()[0].get_meta('self_tree_width'))
	}
	
	addNode(parent, node) {
		var newLabel = new godot.Label
		newLabel.set_text('FRED')
		Object.values(node.children).forEach((child) => {
			this.addNode(newLabel, child)
		})
		parent.add_child(newLabel)
	}

	clearChildren(){
		this.nodes = {}
	}

	setNodes(nodes) {
		this.clearChildren()
		this.nodes = nodes;
		this.render()
	}

	// Called every frame. 'delta' is the elapsed time since the previous frame.
	_process(delta) {

	}
}
