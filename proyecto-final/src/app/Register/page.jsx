'use client'

import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from '@/data/firebase'
import Navar from '@/components/Navbar/NavbarEstado';

import { useRouter } from 'next/navigation';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap';

export default function MainPage(){
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const auth = getAuth(firebase)
    const router= useRouter()
    const defalut = async(e)=>{
        e.preventDefault();
    }
    const handeRegister = async()=>{
        console.log(setEmail)
        try{
            createUserWithEmailAndPassword(auth, email, password)
            .then((resutl) => {
                    Swal.fire(
                        'Done',
                        'User Register',
                        'success'

                    ).then(()=>{
                        router.push('/Login')
                    })
                    
            })
            .catch((error)=>{
                    Swal.fire(
                        'Ups',
                        `Error: ${ error.message }`,
                        'error'
                    )
            })
        }catch(error){}
        
    }


    return(
        <>
        <Navar/>
        <Container>
            <Row className='Justify-content-center mt-5'>
                <Col xs={ 10 } sm={ 8 } md={ 6 }>
                    <Form onSubmit={ defalut }>
                            <h3>REGISTRO DE USUARIO</h3>
                        <Form.Group  controlId="formBasicEmail">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Ingrese Correo Electronico"
                                onChange={(correo)=>setEmail(correo.target.value) }
                            />
                            <h2></h2>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                onChange={(pass)=>setPass(pass.target.value) }
                            />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            
                        </Form.Group>
                        <Button onClick={ handeRegister }variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    )
}