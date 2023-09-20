import './InputComponent.css'
import {useState} from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

const InputComponent = (props) => {
    const [isPassword, setIsPassword] = useState(true)
    const handlePasswordTypeChange = () => {
        setIsPassword(!isPassword)
    }
    return (
        <div className="formElement">
            <label htmlFor={props.label}>
                {props.label}
                <small className="error">{props.error}</small>
            </label>
            {
                props.type === 'password' 
                ? 
                <div className={props.error ? "errorField passwordBlock" : "passwordBlock"}>
                    <input
                        id={props.id}
                        type={isPassword ? "password" : "text"}
                        placeholder={props.placeholder} 
                        value={props.value}
                        onChange={props.onChange}
                    />
                    {
                        isPassword ? <AiOutlineEye className='eye' onClick={handlePasswordTypeChange} size={25} color={"black"}/> 
                        : 
                        <AiOutlineEyeInvisible className='eye' onClick={handlePasswordTypeChange} size={25} color={"black"}/>
                    }
                </div>
                :  
                <input
                    id={props.id}
                    className={props.error ? 'errorField' : ''}
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
            }
            
        </div>
    )
}

export default InputComponent