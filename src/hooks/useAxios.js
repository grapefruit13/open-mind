import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
//외부에서 path, data method, trigger 호출할 때 method, path, data 변경할 수 있도록.
//옵션으로 shouldfetch

const defaultInstance = axios.create({
  baseURL: 'https://openmind-api.vercel.app/2-2/',
  timeout: 6000,
  headers: {
    common: {
      'Content-Type': 'application/json',
    },
  },
});

defaultInstance.interceptors.response.use(
  response => {
    console.log('axios config : ', response);
    return response;
  },
  error => {
    console.log('axios config : ', error);
    return Promise.reject(error);
  },
);

const useAxios = (
  { path = '', method = 'GET', data = {} },
  shouldFetch = true,
) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);

  const fetchData = async () => {
    try {
      const response = await defaultInstance({
        method,
        url: path,
        data,
      });

      setState(state => ({
        ...state,
        loading: false,
        data: response.data.results,
      }));
      console.log(`resolve됨${state.data}`);
      console.dir(response.data?.results[0]);
    } catch (error) {
      setState(state => ({
        ...state,
        loading: false,
        error,
      }));

      console.log(`reject됨${state.error}`);
    }
  };

  const triggerFetch = useCallback(() => {
    fetchData();
  }, [path, method, data]);

  useEffect(() => {
    if (shouldFetch) {
      triggerFetch();
    }
  }, [shouldFetch, trigger]);

  const refetch = ({
    newPath = path,
    newMethod = method,
    newData = data,
  } = {}) => {
    setState(state => ({
      ...state,
      loading: true,
    }));
    setTrigger(() => Date.now());
    fetchData({
      path: newPath,
      method: newMethod,
      data: newData,
    });
  };

  return { ...state, refetch };
};

export default useAxios;

// function HomePage() {
//   const { data, loading, error, refetch } = useAxios({
//     path: '/subjects/',
//     method: 'GET',
//     data: {},
//   });

//   // refetch 함수를 호출할 때 새로운 path, method, data를 전달하여 요청을 보낼 수 있습니다.
//   const handleRefetch = () => {
//     refetch({
//       path: '/subjects/',
//       method: 'POST',
//       data: { name: '강영훈', team: '2-2' }, // 변경된 data
//     });
//   };
//   console.dir(data)
//   return (
//     <div>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//       {data && <p>Data: {`${data[0].name}`}</p>}

//       <button onClick={handleRefetch}>Refetch with Updated Data</button>
//     </div>
//   );
// }
