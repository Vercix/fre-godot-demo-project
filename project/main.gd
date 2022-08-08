extends Control

var Test = preload('res://dist/classes/Test.jsx') 


# Declare member variables here. Examples:
# var a = 2
# var b = "text"


# Called when the node enters the scene tree for the first time.
func _ready():
	var x = Test.new(true)
	print(x.renderOnEnter)
	add_child(x)


# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass
