

export default function Counter() {
    const [num, setNum] = Spark.useState(0)
    const [num2, setNum2] = Spark.useState(0)

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

