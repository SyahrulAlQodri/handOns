import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {
const [data, setData] = useState ([]);
const [error, setError] = useState("");
const [pagination, setPagination] = useState({
  currentPage: 1
});

const getMenulist = () => {
    axios
    .get(`https://api.mudoapi.tech/menus?perPage=5&page=${pagination?.currentPage}`)
    .then((res) => {
      console.log(res?.data?.data.Data)
      const response = res.data.data.Data;
      setData(res.data.data.Data);

      const pagination = {
        total: res.data.data.total,
        perPage: res.data.data.perPage,
        currentPage: res.data.data.currentPage,
        nextPage: res.data.data.nextPage,
      };
      setData(response);
      setPagination(pagination);
    })
    .catch((err) => {
      console.log(err?.response?.status);
      setError(err?.response?.status.toString());
    });
  };

  // const getUserDetail = () => {
  //   axios.get('https://reqres.in/api/users/2')
  //   .then ((res) => {
  //     console.log("res detail", res?.data?.data);
  //     const response = res?.data?.data;
  //     setUserDetail(response);
  //   })
  //   .catch((err) => console.log(err));
  // };
  useEffect(() =>{
    getMenulist();
    
  }, []);
  useEffect(() =>{
    getMenulist();
    
  }, [pagination.currentPage]);
  const handleNext = () => {
    setPagination({
      ...pagination,
      currentPage: pagination?.currentPage + 1,})
    
  }
  // useEffect(() => {
  //   axios
  //   .get('https://fakestoreapi.com/users')
  //   .then((res) => {
  //     console.log(res?.data)
  //     const response = res?.data;
  //     setData(response);
  //   })
  //   .catch((err) => console.log(err));
  // }, []);
  //   setCar([
  //     // {
  //     //   id: 1,
  //     //   company: 'toyota',
  //     //   brand: 'sigra'
  //     // },
  //     // {
  //     //   id: 2,
  //     //   company: 'toyota',
  //     //   brand: 'agya'
  //     // },
  //     // {
  //     //   id: 3,
  //     //   company: 'honda',
  //     //   brand: 'supra'
  //     // },
  //     // {
  //     //   id: 4,
  //     //   company: 'honda',
  //     //   brand: 'civic'
  //     // },
  //   ]);
  // },[]);
  // console.log(car);
  return (
    <div>
      {data.map((item) => (
       <div>
        <h1>{item?.name}</h1>
        <p>{item?.type}</p>
        <h2>{item?.price}</h2>
       </div>
      ))}
      <div>
        <button>back</button>
        <button disabled={!pagination?.nextPage} onClick={handleNext}>
          next
        </button>
      </div>
    </div>
    
  );
};

export default App;