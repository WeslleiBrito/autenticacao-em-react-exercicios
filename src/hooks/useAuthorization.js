import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/coordinator"
import { useEffect } from "react"


export const useAthorization = () => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            goToLogin(navigate)
        }
    }, [navigate, token])

}