import { useCallback } from "react"
import { useHttp } from "./http.hook"
import { useSuccess } from "./success.hook"
import { useError } from "./error.hook"
import 'react-toastify/dist/ReactToastify.min.css'

export const usePost = () => {
    const successMessage = useSuccess()
    const errorMessage = useError()
    const { loading, request, API_URL } = useHttp()

    const postHandler = useCallback(async (data, url) => {
        if (data.course_name !== '' && data.name !== '' && data.phone !== '') {
            try {
                const posted = await request(`${API_URL}${url}`, "POST", { ...data })
                if (posted.name) {
                    successMessage(`Ваша заявка на курс ${posted.course_name} успешно отправлена!`)
                }
            } catch (e) {
                errorMessage(e.message)
            }
        } else {
            errorMessage('Поля не должны быть пустыми!')
        }
    }, [request, API_URL, successMessage, errorMessage])

    return { postHandler, loading }
}