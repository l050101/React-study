import { useEffect, useState } from "react";
import { Route,Routes } from "react-router-dom";
import Detail from "./view/Detail";
import Api from "./view/Api";
import Home from "./view/Home";
import Todo from "./view/todo";
import Product from "./view/product"
import Museum from "./view/Museum";
function App() {

    return(
        
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/detail" element={<Detail/>} />
            <Route path="/api" element={<Api/>} />
            <Route path="/todo" element={<Todo/>} />
            <Route path="/api/:productId" element={<Product/>}/>
            <Route path="/museum" element={<Museum/>}/>
        </Routes>
    )
  
}

export default App;
