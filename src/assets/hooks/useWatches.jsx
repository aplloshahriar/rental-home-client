import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const useWatches = () => {
  const { user } = useContext(AuthContext);
  // const token = localStorage.getItem('Access-Token')

  // tanStack/react query applied
  const { refetch, data: watches = [] } = useQuery({
    queryKey: ["watches", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/watch?email=${user?.email}`
      );
      return response.json();
    },
  });
  return [watches, refetch];
};
export default useWatches;
