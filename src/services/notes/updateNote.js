import axios from "axios"

export const updateNote = async ({ note, noteId, showToast }) => {
    try {
        const res = await axios({
            method: "POST",
            url: `/api/notes/${noteId}`,
            body: { note }
        })
        if (res.status === 201) {
            console.log(res);
            showToast({ title: 'note added', type: 'sucess' });
        }
    }
    catch (e) {
        console.log(e);
        showToast({ title: e.response.data.error, type: 'error' })
    }
}