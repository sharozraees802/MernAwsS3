const { Router } = require('express')

const { bucketname, myBucket } = require('../../config')

const uploadroute = Router();

uploadroute.post('/uploadfile', (req, res) => {

    let filename = Object.keys(req.files)
    filename.map(sname =>{console.log({[sname]:req.files[sname]})})

    let file = req.files.file1

    const params = {
        Bucket: bucketname,
        Key: file.name,
        Tagging: "public=yes",
        Body: file.data

    }

    myBucket.upload(params, (err, data) => {

        if (err) {
            throw err;
        }

        res.send({

            status: true,
            message: 'File Is Uploaded',
            data: {
                name: file.name,
                size: file.data.length
            },
            s3: data


        })

    })

})

module.exports = { uploadroute }



