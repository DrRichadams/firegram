import React, { useState } from "react";
// import useStorage from "../hooks/useStorage";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/config";

const UploadForm = () => {
    const [file, setFile] = useState(null)
    const types = ["image/png", "image/jpeg", "image/jpg"];
    const [error, setError] = useState(null)

    const changeHandler = (e) => {
        const selected = e.target.files[0]
        if(selected && types.includes(selected.type)) {
            setFile(selected)
            setError('')
            // useStorage(file)
            // const { url } = useStorage(file)
            const storageRef = ref(storage, "pic");
            uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {
                console.log('Uploaded a blob or file!');
                console.log(snapshot)
            });
        }else{
            setFile(null);
            setError("Please select an image file (png / jpeg)");
        }
    }
    return(
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
                <div className="output">
                    { error && <div className="error">{error}</div> }
                    { file && <div className="file">{file.name}</div> }
                </div>
            </label>
        </form>
    )
}

export default UploadForm