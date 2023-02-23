import React from 'react'
import Button from '@mui/material/Button';
import { useAppDispatch } from '../../hooks/toolkitHooks';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';


interface clodinary {
    access_mode : string
    asset_id : string
    bytes : number

created_at : string

etag : string

folder : string

format : string

height : number

original_filename : string

placeholder : boolean

public_id : string

resource_type : string

secure_url : string

signature : string

tags : Array<string>

type : string

url : string

version : number

version_id : string

width : number

}

interface Props {
  imageUrl : ActionCreatorWithPayload<string, string>
}
const ChangeImage = ({imageUrl} : Props) => {

    
 
    const [loading, setLoading] = React.useState(false)
    const hiddenFileInput = React.useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch()
    const handleClick = () => {
        if(hiddenFileInput.current !== null) hiddenFileInput.current.click()
        
      };

    const uploadImage = (e : React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files as FileList
        const data = new FormData()
         
         data.append("file" , files[0])
         data.append("upload_preset", "dogApp")
         data.append("cloud_name", "dyqb2qrwy")
         data.append("api_key" , "735152276338983")
         
         
         setLoading(true)
        fetch("https://api.cloudinary.com/v1_1/dyqb2qrwy/image/upload", {
            method : 'post',
            body : data
         },
         
        ).then((res): Promise<clodinary> => res.json())
        .then(data => {
         
            dispatch( imageUrl(data.secure_url))
            setLoading(false)
        })
        .catch(error => console.log(error)) 

        
    }
 
   


  return (
    <div>
     <Button startIcon={<CloudUploadIcon/>} sx={{backgroundColor: '#724B7E', border: 'none', color: '#fff', fontWeight: 'bold', boxShadow: 'none', height: '45px'}} variant='contained' onClick={handleClick}>Upload Photo</Button>
    <input
    
     type="file"
     ref={hiddenFileInput}
         onChange={uploadImage}
          style={{display : 'none'}}
         
         />
         
         
        </div>
  )
}

export default ChangeImage