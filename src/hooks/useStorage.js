import { useState, useEffect } from "react";
import { storage } from "../firebase/config";
import { ref, uploadBytes } from "firebase/storage";
// import { getStorage, ref, uploadBytes } from "firebase/storage";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        const storageRef = ref(storage, file.name);
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            setUrl(snapshot)
          });
    }, [file])

    return { url }
}

export default useStorage;