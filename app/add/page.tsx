"use client";
import React, { useState } from "react";

export default function AddPage() {
  // buat hook (usestate)
  const [getNPM, setNPM] = useState("");
  const [getNama, setNama] = useState("");
  const [getProdi, setProdi] = useState("");

  // buat fungsi simpan data
  const setSaveData = () => {
    if (getNPM == "" || getNama == "" || getProdi == "") {
      alert("Lengkapi Seluruh Data !");
    } else {
      alert("OK");
    }
  };

  return (
    <>
      <title>Tambah Data Mahasiswa</title>
      <div className="grid grid-cols-10 gap-4 items-center">
        <div className="">NPM</div>
        <div className="col-span-4">
          <input
            type="text"
            placeholder="Ketikkan NPM anda"
            className="input input-bordered input-accent w-full"
            onChange={(e) => {
              setNPM(e.target.value);
            }}
          />
        </div>
        <div className="col-start-1">Nama</div>
        <div className="col-span-4">
          <input
            type="text"
            placeholder="Ketikkan nama anda"
            className="input input-bordered input-accent w-full"
            onChange={(e) => {
              setNama(e.target.value);
            }}
          />
        </div>
        <div className="col-start-1">Program Studi</div>
        <div className="col-span-4">
          <select
            defaultValue={""}
            className="select select-accent w-full"
            onChange={(e) => {
              setProdi(e.target.value);
            }}
          >
            <option value={""} disabled>
              Pilih program studi
            </option>
            <option value={"Informatika"}>Informatika</option>
            <option value={"Sistem Informasi"}>Sistem Informasi</option>
            <option value={"Teknik Komputer"}>Teknik Komputer</option>
            <option value={"Teknik Elektro"}>Teknik Elektro</option>
            <option value={"Teknik Sipil"}>Teknik Sipil</option>
          </select>
        </div>
        <div className="col-start-2 col-span-4">
          <button className="btn btn-primary mr-5X w-28" onClick={setSaveData}>
            Simpan
          </button>
          <button className="btn btn-neutral ml-5X w-28">Batal</button>
        </div>
      </div>
    </>
  );
}
