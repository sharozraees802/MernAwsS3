import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'

const Index = () => {
    const [file, setFile] = useState("")
    useEffect(() => {
        let data = {
             files:file.name
        }
        if (file) {
            console.log("file:",file)
        axios.post('http://localhost:5000/api/uploadFile', { file1:data},{ Headers: { "Content-Type": "application/json"}})
        .then((r) => console.log(r)).catch(e => console.log(e))
        setFile("")
        }

        

    }, [file])
    return (
        <center>
            <Form.Group style={{ padding: "20px" }} controlId="formFileLg" className="mb-3">

                <Form.Control type="file" size="lg" onChange={(e) => setFile(e.target.files[0])} />
            </Form.Group>
        </center>

    )
}

export default Index
