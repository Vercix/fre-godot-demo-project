import { useState } from "../fre-godot";

export default function Counter() {
    const [num, setNum] = useState(0)

    return (
        <hbox>
            <button text={'-'} on_pressed={() => {
                setNum(num - 1)
            }} />
            <label text={String(num)} />
            <button text={'+'} on_pressed={() => {
                setNum(num + 1)
            }} />
        </hbox>
    )
}