import { createContext, useEffect, useReducer } from "react"
import AuthReducer from "./AuthReducer"

// Hàm hỗ trợ lấy dữ liệu an toàn từ Local Storage
const getUserFromLocalStorage = () => {
    try {
        const storedUser = localStorage.getItem("user");
        // Kiểm tra nếu không có dữ liệu hoặc dữ liệu là chuỗi "undefined"
        if (!storedUser || storedUser === "undefined") {
            return null;
        }
        return JSON.parse(storedUser);
    } catch (error) {
        console.error("Lỗi khi parse user từ localStorage:", error);
        return null;
    }
};

const INITIAL_STATE = {
    user: getUserFromLocalStorage(), // Sử dụng hàm an toàn thay vì gọi trực tiếp
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        // Chỉ lưu vào localStorage nếu user khác null/undefined
        // Nếu user là null, ta có thể chọn xóa khỏi storage hoặc lưu null
        if (state.user !== undefined) {
             localStorage.setItem("user", JSON.stringify(state.user))
        }
    }, [state.user])

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}