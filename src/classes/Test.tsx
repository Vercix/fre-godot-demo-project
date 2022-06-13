import { IFiber } from 'fre-godot'
import { render } from '../fre-godot'


interface FreNode {
    _render: () => IFiber
}

export default class TestClass extends godot.Control implements FreNode {

    //fre
    fiber: IFiber = null;
    children = [];
    renderOnEnter = false;

    constructor() {
        super();
    }

    _enter_tree() {
        if(this.renderOnEnter){
            render(this._render(), this)
        }
    }

    // Called when the node enters the scene tree for the first time.
    _ready() {

    }

    _render() {
        return (
            <vbox>
                <label text="Test Class Comp" ></label>
                <label text="Test Class Comp" ></label>
                {this.children}
            </vbox>
        )
    }

}

godot.register_property(TestClass, 'renderOnEnter', false);