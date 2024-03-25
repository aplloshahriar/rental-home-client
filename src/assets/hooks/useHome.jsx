import { useEffect, useState } from "react";


const useHomes = () => {

    const [homes, setHomes] = useState([]);
    const [loading, setLoading] = useState(true);

    // Data load
    // http://localhost:5000/home
    // homeList.json
    useEffect(() => {
        fetch('http://localhost:5000/home')
            .then(res => res.json())
            .then(data => {
                setHomes(data);
                setLoading(false); 
            });
    }, []);
    return [homes, loading]
};

export default useHomes;