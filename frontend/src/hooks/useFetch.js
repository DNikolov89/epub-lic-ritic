import { useEffect, useState } from "react";

export default function useFetch(method, url, data) {

    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);

        let options = {
            method: method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };

        if (method === 'GET' || method === null) {
            fetch(url)
                .then(res => setResult(res))
                .catch(err => setError(err))
                .finally(setLoading(false))
        } else {
            fetch(url, options)
                .then(res => setResult(res))
                .catch(err => setError(err))
                .finally(setLoading(false))
        };

    }, [method, url, data]);

    return { result, error, loading };

};