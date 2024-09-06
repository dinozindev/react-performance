import React, { useCallback, useState } from 'react'
import Pessoa from '../Pessoa'
import { faker } from '@faker-js/faker'



export default function ListaPessoas() {
    const [pessoas, setPessoas] = useState([
        {
            nome: "Maria",
            id: faker.datatype.uuid()
        },
        {
            nome: "João",
            id: faker.datatype.uuid()
        }
    ])

    const deletarPessoa = useCallback((id) => {
        setPessoas(listaAnterior => listaAnterior.filter(pessoa => pessoa.id !== id))
    }, []);

    return (
        <div className="has-text-centered">
            <ul>{pessoas.map((pessoa) => {
                return <Pessoa key={pessoa.id} nome={pessoa.nome} id={pessoa.id} deletar={deletarPessoa} />
            })}
            </ul>
            <button className="button is-primary is-outlined" onClick={() => {
                setPessoas(listaAnterior => ([...listaAnterior, {
                    nome: faker.person.fullName(),
                    id: faker.datatype.uuid()
                }
                ]))
            }}>Adicionar Pessoa</button>
        </div>
    )
}
