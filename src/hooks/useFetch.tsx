import { useState, useEffect } from '../fre-godot';
import fetch from '../utils/fetch'

export default function useFetch(url) {
    const [response, setResponse] = useState(null);

    async function makeRequest() {
        try {
            let response = await fetch({ path: url })
            setResponse(response)
        } catch (err) {
            console.log(err)
            setResponse(null)
        }
    }

    useEffect(() => {
        makeRequest()
    }, [url]);

    return response;
}