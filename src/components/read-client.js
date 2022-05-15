
import { Table } from 'semantic-ui-react'
import React, { useEffect, useState  } from 'react';
import axios from 'axios';


export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://assia-node.herokuapp.com/client/`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
    
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nom Client</Table.HeaderCell>
                        <Table.HeaderCell>Prenom Client</Table.HeaderCell>
                        <Table.HeaderCell>Adresse</Table.HeaderCell>
                        <Table.HeaderCell>Date de Naissance</Table.HeaderCell>
                        <Table.HeaderCell>Sexe</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                

                <Table.Body>
  {APIData.map((data) => {
     return (
       <Table.Row>
          <Table.Cell>{data.nom_client}</Table.Cell>
           <Table.Cell>{data.prenom_client}</Table.Cell>
           <Table.Cell>{data.adresse}</Table.Cell>
           <Table.Cell>{data.date_de_naissance}</Table.Cell>
           <Table.Cell>{data.sexe}</Table.Cell>
           <Table.Cell>{data.email}</Table.Cell>
        </Table.Row>
   )})}
</Table.Body>
            </Table>
        </div>
    )
}