import { useState } from "../fre-godot";

export default function Counter() {
    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(0)

    return (
        <vbox>
            <label text={String(num)} />
            <label text={String(num2)} />
            <button text={'add'} onPressed={() => {
                setNum(c => c + 1)
                setNum2(c => c - 1)
            }} />
        </vbox>
    )
}