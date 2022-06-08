import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux"
import CatList from "./CatList";
import { fetchCats } from "./catsSlice";

function Cats() {
  const catPics = useSelector(state => (state.entities))
  const dispatch = useDispatch()
  
  useEffect(() =>{
    dispatch(fetchCats())
  }, [])
  
  console.log(catPics)

  const renderCats = catPics.map(pic => <CatList key={pic.id} props={pic}/>)

  return (
    <div>
      <h1>CatBook</h1>
      {renderCats}
    </div>
  );
}

export default Cats;
