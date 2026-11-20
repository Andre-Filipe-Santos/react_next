import React from 'react'

export default function page() {
    const caracteristicas = [
        'JSX, sintaxe que mistura HTML e JS.',
        'Componentes, funções que retornam JSX.',
        'Componentes Reutilizáveis e Modulares.',
        'Roteamento Automático e APIs.',
        'Hooks: useState, useEffect e useSWR.',
        'Renderização Rápida e SEO Friendly.',
        'TypeScript Seguro e Escalável.',
        'Comunidade Ativa e Popularidade.'
    ]

  return (
    <div>
        <h2 className="text-2xl font-bold mb-6">Características do React e Next.js</h2>
        <ul>
            {/* porque fazer isto aqui e nao fora do return, modificar o array e inserir aqui */}
            {caracteristicas.map((caracteristica,i) => {
                return <li key={i}>{caracteristica}</li>
            } )}
        </ul>
    </div>
  )
}

// COMO CRIAR O EVENTO A SEU GOSTO?