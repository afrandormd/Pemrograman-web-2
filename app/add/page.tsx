import React from "react";

export default function AddPage() {
  return (
    <>
      <title>Tambah Data Mahasiswa</title>
      <div className="grid grid-cols-10 gap-4 items-center">
        <div className="">NPM</div>
        <div className="col-span-4">
          <input
            type="text"
            placeholder="Ketikkan NPM anda"
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </div>
        <div className="col-start-1">Nama</div>
        <div className="col-span-4">
          <input
            type="text"
            placeholder="Ketikkan nama anda"
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </div>
        <div className="col-start-1">Program Studi</div>
        <div className="col-span-4">
          <select className="select select-accent w-full max-w-xs">
            <option disabled selected>
              Pilih program studi
            </option>
            <option>Informatika</option>
            <option>Sistem Informasi</option>
            <option>Teknik Komputer</option>
            <option>Teknik Elektro</option>
            <option>Teknik Sipil</option>
          </select>
        </div>
        <div className="col-start-2 col-span-4">
          <button className="btn btn-primary mr-5X w-28">Simpan</button>
          <button className="btn btn-neutral ml-5X w-28">Batal</button>
        </div>
      </div>
    </>
  );
}
