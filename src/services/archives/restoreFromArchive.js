import axios from "axios"

export const restoreFromArchives = async ({ noteId, showToast }) => {
    try {
        const res = await axios.post(`/api/archives/restore/${noteId}`)
        if (res.status === 201) {
            console.log(res)
        }
    }
    catch (e) {
        console.error(e)
    }
}