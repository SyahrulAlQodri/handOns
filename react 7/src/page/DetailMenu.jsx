import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const DetailMenu = () => {
const param = useParams ();
const [data, setData] = useState({})
const menuDetail = () => {
    axios
        .get(`https://api.mudoapi.tech/menu/${param.id}`)
        .then((res) => {
          console.log(res)
          setData(res.data.data);
    
         
        //   setData(response);
        })
    } 
    useEffect(() => {
        menuDetail()
    },[]


    )
    return (
        <div>
            <h1>detail menu</h1>
            <img src={data.imageUrl}/>
            <p>{data.price}</p>
            <p>{data.name}</p>
        </div>
    )
}

export default DetailMenu;