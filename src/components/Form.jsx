import { useState } from "react"
import validateUserData from "../validation"
import { accessTrue } from "../redux/actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Form({login, accessTrue}) {
    
    
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({})
    
    function handleChange(event) {        
        const { name, value } = event.target;
        setUserData({...userData, [name]: value})
        setErrors(validateUserData({...userData, [name]: value}))
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        login(userData)
    }
    

    return <form style={{backgroundColor: "orange"}} onSubmit={handleSubmit}>
        <img src="/form_img.jpg" alt="Form img" style={{ borderRadius: "50%", width: "200px", height: "200px"}} />
        <hr/>
        <label htmlFor="email">Email: </label>
        <input className={errors.email ? "error" : ""} name="email" placeholder="Ingrese su Email." onChange={handleChange} value={userData.email} type="email"/>
        <hr/>
        {errors.email && <p className="error-message">{errors.email}</p>}
        <hr/>
        <label htmlFor="password">Password: </label>
        <input className={errors.password ? "error" : ""} name="password" placeholder="Ingrese su password." onChange={handleChange} value={userData.password} type="password"/>
        <hr/>
        {errors.password && <p className="error-message">{errors.password}</p>}
        <hr/>
        <button type="submit">Submit</button>
    </form>
}

