"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { getData, setUpdateStatus } from "./models/mahasiswa";

// buat fungsi untuk dialog hapus
async function setDelete(npm: string, nama: string) {
  // alert("Hapus Data");
  if (confirm(`Data Mahasiswa : ${npm} - ${nama} Ingin Dihapus ?`) == true) {
    // alert("Ok");
    await setUpdateStatus();
  }
  // else {
  //   alert("Cancel");
  // }
}

export default function Rootpage() {
  // buat hook
  // hook dengan "use state"
  const [getValue, setValue] = useState({});

  // buat fungsi untuk panggil "getData"
  async function fetchData() {
    setValue(await getData());
  }

  // hook dengan "use effect"
  useEffect(() => {
    // panggil fungsi "fetchData"
    fetchData();
  }, []);

  // const mahasiswa = await prisma.tb_mahasiswa.findUnique({
  //   where: {
  //     id: 3,
  //   },
  // })
  return (
    <>
      {/* tampilkan data mahasiswa */}
      <table className="w-full">
        <thead>
          <tr className="bg-teal-100 h-12">
            <th className="w-10% border border-slate-500">NPM</th>
            <th className="w-1/2 border border-slate-500">Nama</th>
            <th className="w-30% border border-slate-500">Prodi</th>
            <th className="w-10% border border-slate-500">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(getValue).map((data: any, index: number) => (
            // <div key={index}>
            //   <div>
            //     {data.npm} - {data.nama} - {data.prodi}
            //   </div>
            // </div>
            <tr key={index}>
              <td className="border border-slate-500 p-2.5 text-center">
                {data.npm}
              </td>
              <td className="border border-slate-500 p-2.5 text-justify">
                {data.nama}
              </td>
              <td className="border border-slate-500 p-2.5 text-center">
                {data.prodi}
              </td>
              <td className="border border-slate-500 p-2.5 text-center">
                {/* icon edit */}
                <Link href={`/edit/${btoa(data.npm)}}`}>
                  <FontAwesomeIcon
                    icon={faPencil}
                    className="bg-blue-500 text-white p-2 mr-1 rounded-full hover:bg-blue-700"
                    title="Ubah Data"
                  />
                </Link>

                {/* icon delete */}
                <Link href={"/"}>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="bg-red-500 text-white p-2 ml-1 rounded-full hover:bg-red-700"
                    title="Hapus Data"
                    onClick={() => {
                      setDelete(data.nama, data.npm);
                    }}
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* {mahasiswa?.nama} */}
    </>
  );
}
