import axios from "axios"

export const archiveNote=()=>{
    try{
        const res = await axios.post(`/api/notes/archives/${noteId}`)
        if (res.status === 201) {
            console.log(res)
        }
    }
    catch(e){
        console.error(e)
    }
}