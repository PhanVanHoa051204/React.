import React from 'react'

export default function PvhSinhVienList({renderPvhSinhVienList}) {
    console.log("PvhSinhVienList",renderPvhSinhVienList);
    let PvhElementUser = renderPvhSinhVienList.map((PvhSinhVien,index)=>{
        return(
            <>
                <tr key={index}>
                    <td>{PvhSinhVien.MaSV}</td>
                    <td>{PvhSinhVien.HoSV}</td>
                    <td>{PvhSinhVien.TenSV}</td>
                    <td>{PvhSinhVien.Phai}</td>
                    <td>{PvhSinhVien.NgaySinh}</td>
                    <td>{PvhSinhVien.NoiSinh}</td>
                    <td>{PvhSinhVien.MaKH}</td>
                    <td>{PvhSinhVien.HocBong}</td>
                    <td>{PvhSinhVien.DiemTrungBinh}</td>     
                </tr>
            </>
        )
    })

  return (
    <div className='row'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>pvhMaSV</th>
                    <th>pvhHoSV</th>
                    <th>pvhTenSV</th>
                    <th>pvhPhai</th>
                    <th>pvhNgaySinh</th>
                    <th>pvhNoiSinh</th>
                    <th>pvhMaKH</th>
                    <th>pvhHocBong</th>
                    <th>pvhDiemTrungBinh</th>
                    
                </tr>
            </thead>
            <tbody>
                {PvhElementUser}
            </tbody>
        </table>

    </div>
  )
}