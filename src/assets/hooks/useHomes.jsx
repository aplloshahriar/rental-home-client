import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useHomes = () => {
  //   const [homes, setHomes] = useState([]);
  //   const [loading, setLoading] = useState(true);

  // Data load
  // http://https://home-server-92rd97e6z-shahriars-projects-839da871.vercel.app:5000/home
  // homeList.json
  // useEffect(() => {
  //     fetch('http://https://home-server-92rd97e6z-shahriars-projects-839da871.vercel.app:5000/home')
  //         .then(res => res.json())
  //         .then(data => {
  //             setHomes(data);
  //             setLoading(false);
  //         });
  // }, []);

  const {
    data: homes = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["homes"],
    queryFn: async () => {
      const res = await fetch("https://home-server-theta.vercel.app/home");
      return res.json();
    },
  });
  return [homes, loading, refetch];
  //   return [homes, loading];
};

export default useHomes;
