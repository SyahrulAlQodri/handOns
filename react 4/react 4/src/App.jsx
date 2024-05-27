import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {
const [data, setData] = useState ([]);
const [error, setError] = useState("");
const [userDetail, setUserDetail] = useState({});

const getUser = () => {
    axios
    .get('https://fakestoreapi.com/users')
    .then((res) => {
      console.log(res?.data)
      const response = res?.data;
      setData(response);
    })
    .catch((err) =>{
      console.log(err?.response?.status);
      setError(err?.response?.status.toString());
    });
  };

  const getUserDetail = () => {
    axios.get('https://reqres.in/api/users/2')
    .then ((res) => {
      console.log("res detail", res?.data?.dta);
      const response = res?.data?.data;
      setUserDetail(response);
    })
    .catch((err) => console.log(err));
  };
  useEffect(() =>{
    getUser();
    getUserDetail();
  }, []);
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
      <h1>{userDetail?.first_name}</h1>
      <img src={userDetail?.Avatar}/>
      {error.length ? (
        <h1>{error}</h1>
      ) : (
      data.map((item) => (
       <div>
        <h1>{item?.email}</h1>
        <p>{item?.password}</p>
       </div>
      ))
    )}
    </div>
  );
};

export default App;