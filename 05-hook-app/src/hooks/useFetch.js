import { useEffect, useState } from "react"

const localCache = {};

export const useFetch = ( url ) => {
  const [ state, setState ] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    errorMessage: null
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      errorMessage: null
    });
  }

  const getFetch = async () => {
    if (localCache[url]) {
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        errorMessage: null
      });

      return;
    }

    setLoadingState();
    const resp = await fetch(url);

    if (!resp.ok) {
      setState({
        dara: null,
        isLoading: false,
        hasError: true,
        error: resp.statusText
      });
      return;
    }

    const data = await resp.json();
    setState({
      data,
      isLoading: false,
      hasError: false,
      errorMessage: null
    });

    localCache[url] = data;
  }
  
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: setState.hasError,
  }
}
