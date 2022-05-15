import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Create() {
    const [nom_client, setNom_client] = useState('');
    const [prenom_client, setPrenom_client] = useState('');
    const [adresse, setAdresse] = useState('');
    const [date_de_naissance, setDate_de_naissance] = useState('');
    const [sexe, setSexe] = useState('');
    const [email, setEmail] = useState('');
    
    
    
    
    const postData = () => {
        axios.post(`https://assia-node.herokuapp.com/client`, {
            nom_client,
            prenom_client,
            adresse,
            date_de_naissance,
            sexe,
            email
        })
    
    }
    
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Nom client</label>
                    <input placeholder='Nom client' onChange={(e) => setNom_client(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Prenom Client</label>
                    <input placeholder='Prenom Client' onChange={(e) => setAdresse(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <label>Adresse Client</label>
                    <input placeholder='Adresse Client' onChange={(e) => setPrenom_client(e.target.value)}/>
                    
                </Form.Field>
                <Form.Field>
                    <label> Date de naissance</label>
                    <input placeholder='Date de naissance' onChange={(e) => setDate_de_naissance(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Sexe</label>
                    <input placeholder='Sexe' onChange={(e) => setSexe(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <label>Email</label>
                    <input placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}