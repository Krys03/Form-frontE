import React, {useState} from "react"
import Axios from 'axios'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'




function Signup(){
    const url ="http://localhost:3000/api/v1/forms"
    const [data, setData] = useState({
        first_name: " ",
        last_name: " ", 
        password: " "
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url, {
            first_name: data.first_name,
            last_name: data.last_name,
            password: data.password

        })
        .then(res => {
            console.log(res.data)
        })
    }

    

        
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }


        return(
            <> 

            <Container>
            <Form onSubmit={(e) => submit(e)}>

            <Form.Group className="mb-3" >
                <Form.Label>First name</Form.Label>
                <Form.Control onChange={(e) => handle(e)} id="first_name" value={data.first_name} type="text" placeholder="Enter your first" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Last name</Form.Label>
                <Form.Control onChange={(e) => handle(e)} id="last_name" value={data.last_name}  type="text " placeholder="Enter your last name" />
            </Form.Group>
            <Form.Group className="mb-3" value="password">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e) => handle(e)} id="password" value={data.password} type="password" placeholder="Password"  />
            </Form.Group>
        
            <Button variant="primary" type="submit">
                Submit
            </Button>

            </Form>
            </Container>

            </>


        )
}


export default Signup; 