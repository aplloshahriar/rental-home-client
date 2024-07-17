import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useWatches = () => {
  // const { user } = useContext(AuthContext);
  const { user, loading } = useAuth();
  // const token = localStorage.getItem("Access-Token");
  const [axiosSecure] = useAxiosSecure();

  // tanStack/react query applied
  const { refetch, data: watches = [] } = useQuery({
    queryKey: ["watches", user?.email],
    enabled: !loading,

    queryFn: async () => {
      const res = await axiosSecure(`/watch?email=${user?.email}`);
      // console.log(response);
      return res.data;
    },
  });
  return [watches, refetch];
};
export default useWatches;
