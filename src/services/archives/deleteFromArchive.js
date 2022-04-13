import axios from "axios"

export const deleteFromArchives = async ({ noteId, showToast }) => {
    try {
        const res = await axios.delete(`/api/archives/delete/${noteId}`)
        if (res.status === 200) {
            console.log(res)
        }
    }
    catch (e) {
        console.error(e)
    }
}