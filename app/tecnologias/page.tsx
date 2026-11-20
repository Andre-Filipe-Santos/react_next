import React from 'react';
import tecnologias from '@/app/data/tecnologias.json';
import Image from 'next/image';

export default function page() {



  return (
    <div>
        <h2>Tecnologias Exploradas</h2>
        {tecnologias.map(t => (
          <p>{t.title}</p>
        ))}

        
        <Image 
        src='/tecnologias/api.svg'
        alt='Logotipo api'
        width={200}
        height={200}
        />
      
    </div>
  )
}
