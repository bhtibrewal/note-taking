import axios from "axios"

export const createNote = async ({ note, showToast }) => {
    try {
        const res = await axios({
            method: "POST",
            url: "/api/notes",
            body: { note }
        })
        if (res.status === 201) {
            console.log(res);
            showToast({ title: 'note added', type: 'sucess' });
        }
    }
    catch (e) {
        console.log(e)
    }
}