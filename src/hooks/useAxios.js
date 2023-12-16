import { useState, useEffect } from 'react';
import axios, { HttpStatusCode, isAxiosError } from 'axios';
// 외부에서 path, data method, trigger 호출할 때 method, path, data 변경할 수 있도록.
// 옵션으로 shouldfetch

const defaultInstance = axios.create({
  baseURL: 'https://openmind-api.vercel.app/2-2/',
  timeout: 6000,
});

defaultInstance.interceptors.request.use(
  req => {
    console.log('axios request config : ', req);
    if (req.data && req.data instanceof Object) {
      req.headers['Content-Type'] = 'application/json';
    }
    return req;
  },
  err => {
    console.log('axios config : ', err);
    if (isAxiosError(err)) {
      if (err.status === HttpStatusCode.BadRequest) {
        throw new Error('400 Badrequest');
      }
      if (err.status === HttpStatusCode.NotFound) {
        throw new Error('404 NotFound');
      }
    }
    return Promise.reject(err);
  },
);

defaultInstance.interceptors.response.use(
  res => {
    console.log('axios response config : ', res);
    return res;
  },
  err => {
    console.log('axios config : ', err);
    if (isAxiosError(err)) {
      if (err.status === HttpStatusCode.InternalServerError) {
        throw Error('서버 이상');
      }
    }
    return Promise.reject(err);
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

  const fetchData = async ({
    newPath = path,
    newMethod = method,
    newData = data,
  } = {}) => {
    try {
      setState(prev => ({
        ...prev,
        loading: true,
      }));

      const response = await defaultInstance({
        method: newMethod,
        url: newPath,
        data: newData,
      });

      setState(prev => ({
        ...prev,
        loading: false,
        data: response.data,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error,
      }));
    }
  };

  useEffect(() => {
    if (shouldFetch) {
      fetchData();
    }
  }, []);

  return { ...state, fetchData };
};

export default useAxios;

// function HomePage() {
//   const { data, loading, error, refetch } = useAxios({
//     path: '/subjects/',
//     method: 'GET',
//     data: {},
//   });

//   const handleRefetch = () => {
//     refetch({
//       path: '/subjects/',
//       method: 'POST',
//       data: { name: '강영훈', team: '2-2' }, //
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
