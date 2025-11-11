import { useState } from "react";

export default function Hero() {
  const [hide, setHide] = useState(true);
  return (
    <section className="flex justify-center items-center bg-green-200 w-full h-screen">
      <div className="relative space-y-2 bg-white p-5 rounded-3xl text-center">
        <h1 className="font-bold text-3xl">Selamat hari raya</h1>
        <h3 className="font-semibold text-2xl">Idul fitri</h3>
        <div className="bg-black w-full h-px"></div>
        <div className="flex justify-between items-center gap-2">
          <div className="text-left">
            <h2 className="bg-gray-600 pl-3 first-letter:font-bold text-white text-2xl first-letter:text-3xl">
              "pantun today
            </h2>
            <div className="bg-gray-600 p-2 border-white border-t-2 text-white">
              <p>Jalan-jalan ke Kota Serang,</p>
              <p>Jangan lupa beli kembang.</p>
              <p>THR datang hati pun girang,</p>
              <p>Semoga berkah dan tambah senang.</p>
            </div>
          </div>
          <div className="bg-black border border-black w-px h-30"></div>
          <div className="flex flex-col justify-center items-center gap-2 text-left">
            <h1 className="font-bold text-2xl">Yuk bagi bagi THR</h1>
            <button
              onClick={() => setHide(false)}
              className="bg-cyan-950 px-5 py-2 rounded-full text-white">
              Berbagi THR
            </button>
          </div>
        </div>
        <div
          className={`${
            hide == true ? "hidden" : "block"
          } bg-blue-200 absolute top-0 left-0 w-full h-full text-left p-3 rounded-2xl`}>
          <button
            onClick={() => setHide(true)}
            className="top-2 right-5 absolute text-red-400 text-4xl">
            x
          </button>
          <div className="flex justify-center items-center gap-10 w-full h-full">
            <div className="space-y-1 bg-cyan-900 p-3 text-white">
              <h1 className="text-3xl">No. whatsapp</h1>
              <div className="bg-white w-full h-px"></div>
              <p>08170000000</p>
            </div>
            <div>
              <h1 className="text-3xl">No. Rek</h1>
              <p>000000000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
