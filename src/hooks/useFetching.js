import { useState } from "react"

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState('');
    const [error, setError] = useState('');

    const fetching = async (...argc) => {
        try {
            setIsLoading(true)
            await callback(...argc)
        } catch (e) {
            setError(e.message);
        }finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}