import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function useGithubUser(username) {
  const shouldFetch = username !== null && username !== undefined;
  const { data, error } = useSWR(
    shouldFetch ? `https://jsonplaceholder.typicode.com/posts` : null,
    fetcher
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useGithubUser;
