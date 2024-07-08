import React, { useEffect, useState } from 'react';
import PvhSinhVienList from './component/PvhSinhVienList';
import axios from './api/PvhApi';
function PvhApp() {
  const [Pvhliststudent,setPvhliststudent] = useState([]);
  const PvhGetAllStudent = async ()=>{
    const Pvhrespone = await axios.get("pvhsinhvien");
    setPvhliststudent(Pvhrespone.data)
  }
  useEffect(()=>{
    PvhGetAllStudent();
    console.log("State Data:",Pvhliststudent);
  },[])
  return (
    <div className="container border my-3">
        <h1>Pvh-cntt2-baikiemtra</h1>
        <PvhSinhVienList renderPvhSinhVienList={Pvhliststudent}/>
    </div>
  );
}
export default PvhApp;