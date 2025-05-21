'use client'
import FormField from "@/components/FormField"
import FileInput from "@/components/FileInput"
import { ChangeEvent, useState } from "react"
import { title } from "process"
const page = () => {
const [error,setError] = useState(null);
const handleInputChange = (e:ChangeEvent) =>{
    const {name,value} = e.target;

    setformData((prevState) => ({...prevState,[name]:value}))
}
const [formData, setformData] = useState({
    title: "",
    description: "",
    visibility:"public",
})
const video = {};
const thumbnail={}
  return (
    <div className="wrapper-md upload-page">
        <h1>Upload the Video</h1>
        {error && <div className="error-field">{error}</div>}
        <form className="roundedx-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5"> 
        <FormField 
            id="title"
            label="Title"
            placeholder="Enter the clear and concise title of the video"
            value={formData.title}
            onChange={handleInputChange}
        />
        <FormField 
            id="description"
            label="description"
            placeholder="Describe what this video is about"
            value={formData.description}
            as="textarea" 
            onChange={handleInputChange}
        />
        <FileInput 
            id='video'
            label='Video'
            accept='video/*'
            file={video.file}
            previewUrl={video.previewUrl}
            inputRef={video.inputRef}
            onChange ={video.handleFileChange}
            onReset={video.resetFile}
            type="video"

        />
        <FileInput 
            id='thumbnail'
            label='Thumbnail'
            accept='images/*'
            file={thumbnail.file}
            previewUrl={thumbnail.previewUrl}
            inputRef={thumbnail.inputRef}
            onChange ={thumbnail.handleFileChange}
            onReset={thumbnail.resetFile}
            type="image"

        />
        <FormField 
            id="visibility"
            label="visibility"
            value={formData.visibility}
            as="select"
            options={[
                {value:'public',label:'Public'},
                {value:"private",label:'Private'},
            ]}
            onChange={handleInputChange}
        />
        </form>
    </div>
  )
}

export default page