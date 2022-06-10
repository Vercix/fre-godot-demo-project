import { IFiber } from 'fre-godot'
import { render } from '../fre-godot'

import AppTitleBar from './AppTitleBar'

interface FreNode {
    _render: () => IFiber
}

export default class TestClass extends godot.PanelContainer implements FreNode {

    children: [] = []

    constructor() {
        super();
    }

    _enter_tree() {
        render(this._render(), this)
    }

    // Called when the node enters the scene tree for the first time.
    _ready() {

    }


    _render() {
        return (
            <vbox>
                <label text="Test Class Comp" ></label>
                <AppTitleBar/>
                {this.children}
            </vbox>
        )
    }

}


