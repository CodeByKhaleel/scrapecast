'use client'
import { ChangeEvent, FormEvent, useState } from "react"

import FormField from "@/components/FormField"
import FileInput from "@/components/FileInput"

import { useFileInput } from "@/lib/hooks/useFileInput"
import { MAX_THUMBNAIL_SIZE, MAX_VIDEO_SIZE } from "@/constants"


const page = () => {
    const [isSubmitting,setIsSubmitting] = useState(false);
const [error,setError] = useState('');
const handleInputChange = (e:ChangeEvent<HTMLInputElement>) =>{
    const {name,value} = e.target;

    setformData((prevState) => ({...prevState,[name]:value}))
}
const handlSubmit = async (e:FormEvent) =>{
    e.preventDefault();
    setIsSubmitting(true);
    try {
        if(!video.file || !thumbnail.file){
            setError("Please select both video and thumbnail files.");
            return
        }
        if(!formData.title || !formData.description){
            setError("Please fill in all the fields.");
            return;
        }
        //upload the video to bunny 
        //upload the thumbnail to database
        //attach the thumbnail
        //create a new db entry for the video details (urls,data)
    } catch (error) {
        console.log(`ERROR Submitting Form ${error}`)
    }finally{
        setIsSubmitting(false);
    }
}
const [formData, setformData] = useState({
    title: "",
    description: "",
    visibility:"public",
})
const video = useFileInput(MAX_VIDEO_SIZE); 
const thumbnail=useFileInput(MAX_THUMBNAIL_SIZE);
  return (
    <div className="wrapper-md upload-page">
        <h1>Upload the Video</h1>
        {error && <div className="error-field">{error}</div>}
        <form className="roundedx-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5" onSubmit={handlSubmit}> 
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
        <button type="submit" disabled={isSubmitting} className="submit-button">
            {isSubmitting? 'Uploading...': 'Upload Video'} 
        </button>
        </form>
    </div>
  )
}

export default page