import { IFiber } from 'fre-godot'

export default class TestClass extends godot.Control {

    //fre
    fiber: IFiber = null;

    constructor() {
        super();
    }

    _enter_tree() {
    }

    _ready() {
    }

    _render() {
        return (
            <vbox>
                <label text="Test Class Comp" ></label>
                {this.fiber.props.children}
            </vbox>
        )
    }

}