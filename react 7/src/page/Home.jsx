import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../componen/Navbar";
import { Link } from "react-router-dom";



const Home = () => {
    const [data, setData] = useState ([]);

    const getMenulist = () => {
        axios
        .get(`https://api.mudoapi.tech/menus?`)
        .then((res) => {
          console.log(res?.data?.data.Data)
          setData(res.data.data.Data);
    
         
          setData(response);
        })
        .catch((err) => {
          console.log(err?.response?.status);
          // setError(err?.response?.status.toString());
        });
      };
    useEffect(() =>{
        getMenulist();
        
    }, []);

    return (
        <div>
            <Navbar/>
            {data.map((item) => (
       <div>
        <Link to={`menu/${item?.id}`}>
        <h1>{item?.name}</h1>
        <p>{item?.type}</p>
        <h2>{item?.price}</h2>
        </Link>
       </div>
      ))}
        </div>
    )
} 
export default Home;