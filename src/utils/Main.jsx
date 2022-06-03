import DOM from '../GodotRenderer/dom'


export default class Main extends godot.Control {

	 app = null;
	 treeViewer = null;

	 constructor() {
		  super();
	 }
	 
	 // Called when the node enters the scene tree for the first time.
	 _ready() {
		  console.log('_____main ready____')
		 
		  console.log('_____here____')
		  this.treeViewer = this.$('TabContainer/HSplitContainer/Panel2/ScrollContainer/Control')
		  console.log('TreeViewer: ', this.treeViewer)
		  
		  console.log('_____here____')
		  this.app = this.$('TabContainer/HSplitContainer/Panel/App')
		  console.log('App: ', this.app)

		  console.log(JSON.stringify(this.app.getLocalDom()));
		  this.treeViewer.setNodes(this.app.getLocalDom())
	 }
	 
	 // Called every frame. 'delta' is the elapsed time since the previous frame.
	 _process(delta) {
		  
	 }
}
