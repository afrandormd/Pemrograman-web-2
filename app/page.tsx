"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faTrashCan,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { getData, setUpdateStatus } from "./models/mahasiswa";

// Fungsi untuk dialog hapus
async function setDelete(npm: string, nama: string) {
  // alert("Hapus Data");
  if (confirm(`Data Mahasiswa dengan NPM: ${npm} - ${nama} ingin dihapus?`)) {
    alert(`Data Mahasiswa dengan NPM: ${npm} - ${nama} Berhasil Dihapus`); // Tambahkan logika hapus data di sini
    await setUpdateStatus(npm);
    //  reload otomatis
    location.reload();
  }
  // else {
  //   alert("Penghapusan dibatalkan.");
  // }
}

export default function Rootpage() {
  // Hook untuk menyimpan data mahasiswa
  // getValue = digunakan untuk menampilkan data yang telah di proses
  // setValue = digunakan untuk menyimpan & memproses data
  const [getValue, setValue] = useState<any[]>([]);

  // Fungsi untuk mengambil data
  async function fetchData() {
    try {
      const data = await getData();
      if (Array.isArray(data)) {
        setValue(data);
      } else {
        console.error("Data yang diterima bukan array:", data);
        setValue([]); // Fallback ke array kosong
      }
    } catch (error) {
      console.error("Gagal memuat data:", error);
      setValue([]); // Fallback ke array kosong
    }
  }

  // Hook untuk memuat data saat komponen pertama kali dirender
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <title>View Data Mahasiswa</title>
      <nav className="text-center flex justify-end mb-4">
        <Link href={"/add"} className="btn btn-outline btn-accent">
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          Tambah Data Mahasiswa
        </Link>
      </nav>
      {/* Tampilkan data mahasiswa */}
      <table className="w-full border-collapse border border-slate-500">
        <thead>
          <tr className="bg-teal-100 h-12">
            <th className="w-10% border border-slate-500">NPM</th>
            <th className="w-1/2 border border-slate-500">Nama</th>
            <th className="w-30% border border-slate-500">Prodi</th>
            <th className="w-10% border border-slate-500">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {getValue.length > 0 ? (
            getValue.map((data, index) => (
              <tr key={index}>
                <td className="border border-slate-500 p-2.5 text-center">
                  {data?.npm || "-"}
                </td>
                <td className="border border-slate-500 p-2.5 text-justify">
                  {data?.nama || "-"}
                </td>
                <td className="border border-slate-500 p-2.5 text-center">
                  {data?.prodi || "-"}
                </td>
                <td className="border border-slate-500 p-2.5 text-center">
                  {/* Tombol Edit */}
                  <Link href={`/edit/${btoa(data?.npm || "")}`}>
                    <FontAwesomeIcon
                      icon={faPencil}
                      className="bg-blue-500 text-white p-2 mr-1 rounded-full hover:bg-blue-700"
                      title="Ubah Data"
                    />
                  </Link>
                  {/* Tombol Delete */}
                  <button
                    onClick={() => setDelete(data?.npm, data?.nama || "")}
                    className="bg-red-500 text-white p-2 ml-1 rounded-full hover:bg-red-700"
                    title="Hapus Data"
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center p-4">
                Tidak ada data yang tersedia
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
