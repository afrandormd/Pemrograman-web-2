// import file style.module.css
import style from '../css_modules/style.module.css'


import React from 'react'

export default function ProfilPage() {
  return (
    // khurus menggunakan css modules, pemanggilan selector lebih dari 2 kata formatnya harus seperti ini:
    <div className={style["text-content"]}>Ini Halaman Profil</div>
  )
}
