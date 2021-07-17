import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'

const Index = () => {

    const [fileUrl, setFileUrl] = useState("")
    const [file, setFile] = useState("")
    useEffect(() => {
        const data = new FormData();
        data.append("file", file);

        if (file) {
            console.log("file:", file)
            axios(
                {
                    url: 'http://localhost:5000/api/uploadFile',
                    method: "post",
                    data,
                    headers: { "Content-Type": "application/json" }
                }
            ).then((r) => {
                console.log(r)
                 console.log(r.data.s3.Location);
                console.log(r.data.s3);
                setFileUrl(r.data.s3.Location)
                
                }).catch(e => console.log(e))
            setFile("")
        }



    }, [file])
    return (
        <center>
            <Form.Group style={{ padding: "20px" }} controlId="formFileLg" className="mb-3">

                <Form.Control type="file" size="lg" onChange={(e) => setFile(e.target.files[0])} />
            </Form.Group>
            {fileUrl && (
                <div>
                    <img src={fileUrl} alt="myimg" />
                </div>)
            }
        </center>

    )
}

export default Index
