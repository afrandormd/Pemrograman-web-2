import React from "react";
import { PrismaClient } from "@prisma/client";
import { table } from "console";

const prisma = new PrismaClient();

export default async function Rootpage() {
  // buat variabel mahasiswa

  // menampilkan data mahasiswa dengan filter berstatus Y
  const mahasiswa = await prisma.tb_mahasiswa.findMany({
    where: {
      status: "Y",
      // prodi: {
      //   contains: "formasi"
      // },
    },
  });
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
          <tr className="bg-slate-300 h-12">
            <th className="w-10% border border-slate-500">Aksi</th>
            <th className="w-10% border border-slate-500">NPM</th>
            <th className="w-1/2 border border-slate-500">Nama</th>
            <th className="w-30% border border-slate-500">Prodi</th>
          </tr>
        </thead>
        <tbody>
          {mahasiswa.map((data: any, index: number) => (
            // <div key={index}>
            //   <div>
            //     {data.npm} - {data.nama} - {data.prodi}
            //   </div>
            // </div>
            <tr>
              <td className="border border-slate-500 px-2.5 text-center">/</td>
              <td className="border border-slate-500 px-2.5 text-center font-bold">
                {data.npm}
              </td>
              <td className="border border-slate-500 px-2.5 text-justify">
                {data.nama}
              </td>
              <td className="border border-slate-500 px-2.5 text-center">
                {data.prodi}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* {mahasiswa?.nama} */}
    </>
  );
}
