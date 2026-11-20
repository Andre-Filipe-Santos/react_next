import React from "react";
import tecnologias from "@/app/data/tecnologias.json";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Tecnologias Exploradas</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tecnologias.map((t) => (
          <article
            key={t.title}
            className="flex flex-col items-center gap-3 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-lg font-bold text-slate-900">{t.title}</h3>

            <Image
              src={`/tecnologias/${t.image}`}
              alt={`Logótipo de ${t.title}`}
              width={80}
              height={80}
              className="h-20 w-auto"
            />

            <p className="text-sm text-slate-600 text-center bg-slate-100 p-3 rounded-lg">
              {t.description}
            </p>

            <p className="text-yellow-500 text-lg">
              {"★".repeat(t.rating)}
              {"☆".repeat(5 - t.rating)}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
