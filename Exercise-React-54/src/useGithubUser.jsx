import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const useGithubUser = (username) => {
  const shouldFetch = username !== null && username !== undefined;

  const { data, error, mutate } = useSWR(
    shouldFetch ? `https://jsonplaceholder.typicode.com/posts` : null,
    fetcher
  );

  const refetch = () => {
    mutate();
  };

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    refetch: refetch,
  };
}

export default useGithubUser;