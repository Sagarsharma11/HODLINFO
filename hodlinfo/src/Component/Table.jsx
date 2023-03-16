import React, { useEffect,useState } from 'react'
import axios from 'axios' 

const Table = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/data')
    .then((res)=>{
        let newarr = []
        Object.keys(res.data[0]).map((x,i)=>{
          if(i<10)
            newarr.push(res.data[0][x])
        })
      
      setData([...newarr])     
    })
    .catch(console.log)
  },[])
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">Last</th>
                <th scope="col">Buy/Sell Price</th>
                <th scope="col">volume</th>
                <th scope="col">base_unit</th>
              </tr>
            </thead>
            <tbody>
              {
                data.length?
                data.map((e,i)=>{
                  return   <tr >
                  <td scope="row">{i+1}</td>
                  <td>{e['name']}</td>
                  <td>{e['last']}</td>
                  <td>{e['buy']}/{e['sell']}</td>
                  <td>{e['volume']}</td>
                  <td>{e['base_unit']}</td>
                </tr>
    
              
                })
                :''
              }
          
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Table