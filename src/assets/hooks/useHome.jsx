import { useEffect, useState } from "react";


const useHomes = () => {

    const [homes, setHomes] = useState([]);
    const [loading, setLoading] = useState(true);

    // Data load
    useEffect(() => {
        fetch('homeList.json')
            .then(res => res.json())
            .then(data => {
                setHomes(data);
                setLoading(false); 
            });
    }, []);
    return [homes, loading]
};

export default useHomes;