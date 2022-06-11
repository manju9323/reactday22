
import './App.css';
import { Header } from './header';
import Man from './man'
import Footer from './footer';
import React,{ useState } from "react";

const data=[
  {pic:"https://i.picsum.photos/id/104/3840/2160.jpg?hmac=Rv0qxBiYb65Htow4mdeDlyT5kLM23Z2cDlN53YYldZU",name:"Fancy product",price:"$40.00-$80.00",option:"Add to cart"},
{pic:"https://i.picsum.photos/id/1047/3264/2448.jpg?hmac=ksy0K4uGgm79hAV7-KvsfHY2ZuPA0Oq1Kii9hqkOCfU",name:"Special item",price:"$40.00-$80.00",option:"Add to cart"},
{pic:"https://i.picsum.photos/id/1070/5472/3648.jpg?hmac=oFxAwLeGJmas45_yf5NdpeQzexAF-tMVL6q9JwvSuo0",name:"Sale item",price:"$40.00-$80.00",option:"Add to cart"},{pic:"https://i.picsum.photos/id/1077/3000/1995.jpg?hmac=gx_KF_cdQtv7ilOSaN8YEsNKkhcwRQ507UB7qZ4RutI",name:"Popular item",price:"$40.00-$80.00",option:"Add to cart"},{pic:"https://i.picsum.photos/id/104/3840/2160.jpg?hmac=Rv0qxBiYb65Htow4mdeDlyT5kLM23Z2cDlN53YYldZU",name:"Fancy product",price:"$40.00-$80.00",option:"Add to cart"},
{pic:"https://i.picsum.photos/id/1047/3264/2448.jpg?hmac=ksy0K4uGgm79hAV7-KvsfHY2ZuPA0Oq1Kii9hqkOCfU",name:"Special item",price:"$40.00-$80.00",option:"Add to cart"},
{pic:"https://i.picsum.photos/id/1070/5472/3648.jpg?hmac=oFxAwLeGJmas45_yf5NdpeQzexAF-tMVL6q9JwvSuo0",name:"Sale item",price:"$40.00-$80.00",option:"Add to cart"},{pic:"https://i.picsum.photos/id/1077/3000/1995.jpg?hmac=gx_KF_cdQtv7ilOSaN8YEsNKkhcwRQ507UB7qZ4RutI",name:"Popular item",price:"$40.00-$80.00",option:"Add to cart"}]

function App() {

  const[add,setadd]=useState([])
  function carter(val){
    setadd([...add,val])
  }


  return (
  
    <div className="App">
     <Header m={add}></Header>
     <div className="ma" >{data.map((x)=>( 
     <Man det={x} carter={carter} ></Man>))}
     </div>
     <Footer/>
    </div>
  );
}

export default App;
