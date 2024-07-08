import React from 'react'

export default function PvhSinhVienAddOrEdit() {
  return (
    <div className="border">
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Mã Sinh viên</span>
            <input type="text" class="form-control" 
                   name='id' value={PvhMaSV} onChange={(ev)=>setpvhmasv(ev.target.value)}
            placeholder="id" aria-label="id" aria-describedby="id"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Họ Sinh Viên</span>
            <input type="text" class="form-control" 
                   name='id' value={PvhHoSV} onChange={(ev)=>setpvhhosv(ev.target.value)}
            placeholder="id" aria-label="id" aria-describedby="id"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Tên Sinh Viên</span>
            <input type="text" class="form-control" 
                   name='id' value={PvhTenSV} onChange={(ev)=>setpvhtensv(ev.target.value)}
            placeholder="id" aria-label="id" aria-describedby="id"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Phái</span>
            <input type="text" class="form-control" 
                   name='id' value={PvhPhai} onChange={(ev)=>setpvhphai(ev.target.value)}
            placeholder="id" aria-label="id" aria-describedby="id"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Ngày Sinh</span>
            <input type="text" class="form-control" 
                   name='id' value={PvhNgaySinh} onChange={(ev)=>setpvhngaysinh(ev.target.value)}
            placeholder="id" aria-label="id" aria-describedby="id"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Nơi Sinh</span>
            <input type="text" class="form-control" 
                   name='id' value={PvhNoiSinh} onChange={(ev)=>setpvhnoisinh(ev.target.value)}
            placeholder="id" aria-label="id" aria-describedby="id"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Mã Khoa</span>
            <input type="text" class="form-control" 
                   name='id' value={PvhMaKH} onChange={(ev)=>setpvhmakh(ev.target.value)}
            placeholder="id" aria-label="id" aria-describedby="id"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Học Bổng</span>
            <input type="text" class="form-control" 
                   name='id' value={PvhHocBong} onChange={(ev)=>setpvhhocbong(ev.target.value)}
            placeholder="id" aria-label="id" aria-describedby="id"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Điểm Trung Bình</span>
            <input type="text" class="form-control" 
                   name='id' value={PvhDiemTrungBinh} onChange={(ev)=>setpvhdiemtrungbinh(ev.target.value)}
            placeholder="id" aria-label="id" aria-describedby="id"/>
        </div>
    </div>
  )
}
