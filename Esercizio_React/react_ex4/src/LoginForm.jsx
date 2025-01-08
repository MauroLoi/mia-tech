import { useState } from "react";

const LoginForm = () => {
    const [passwordData, setPasswordData] = useState({
        password: ""
    })
    const [userData, setUserData] = useState({
        userName: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Username: ${userData.userName}\nPassword: ${passwordData.password}`);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center p-10 bg-slate-400 gap-3">
            <label className="p-2 text-slate-200">User Name:</label>
            <input type="text"
                value={userData.userName}
                onChange={(e) => setUserData({...userData, userName: e.target.value})}
                className="p-1 bg-slate-500"
            />
            <label className="p-2 text-slate-200">Password</label>
            <input type="text"
                value={passwordData.password}
                onChange={(e) => setPasswordData({...passwordData, password: e.target.value})}
                className="p-1 bg-slate-500"
            />
            <button type="login" className="bg-slate-500 text-slate-200 p-3 w-42 rounded-md text-lg">Login</button>
        </form>
    )
}

export default LoginForm