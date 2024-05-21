import LogoText from "../../assets/logo-text-color.png";
import Logo from "../../assets/logo-color.png";
import { ToastContainer, toast } from "react-toastify";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { REST_BASE_URL } from "../../constant/constants";

import FormGroup from "@/components/AuthenticationForm/FormGroup";
import FormButton from "@/components/AuthenticationForm/FormButton";

import { validateUsername } from "@/utils/validateUsername";
import { validateEmail } from "@/utils/validateEmail";
import { validatePassword } from "@/utils/validatePassword";

function Register() {
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmation, setConfirmation] = useState<string>("");

    const [isUsernameValid, setIsUsernameValid] = useState<boolean>(false);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
    const [isConfirmationValid, setIsConfirmationValid] =
    useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        setIsEmailValid(validateEmail(email)); // Replace validateUsername with validateEmail
    }, [email]);

    useEffect(() => {
        setIsUsernameValid(validateUsername(username));
    }, [username]);

    useEffect(() => {
        setIsPasswordValid(validatePassword(password));
        setIsConfirmationValid(password === confirmation);
    }, [password, confirmation]);

    const onRegister = async (e: React.SyntheticEvent) => {
            e.preventDefault();
            const requestBody = {
                email,
                username,
                password,
            };
            try {
            const response = await fetch(`${REST_BASE_URL}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });
            console.log(requestBody);
            const data = await response.json();
            if (!response.ok) {
                toast.error(data.message, {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            } else {
                navigate("/login");
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    return(    
    <div className="min-h-screen bg-white">
        <div className="flex wrap flex-col md:flex-col my-0 mx-auto p-4  max-w-screen-2xl">
            <>
                <ToastContainer/>
                <header className="mt-2">
                <img src={LogoText} alt="iWalet Logo" title="iWalet Logo" className="max-w-lg hidden md:flex"></img>
            <img src={Logo} alt="iWalet Logo" title="iWalet Logo" className="max-w-xs flex md:hidden"></img>
                    <p> Sign up for free to start using  <b>iWalet App</b></p>
                </header>
                <form  className="flex flex-col mt-4 mb-4">
                {/* FORM GROUP */}
                    <FormGroup
                        id="username"
                        type="text"
                        label="Enter your username:"
                        placeholder="Username"
                        value={[username, setUsername]}
                        status={isUsernameValid}
                        errorText="Username can only be alphanumeric characters + underscore!"
                    />
                    <FormGroup
                        id="email"
                        type="text"
                        label="Enter your email:"
                        placeholder="Email"
                        value={[email, setEmail]}
                        status={isEmailValid}
                        errorText="Use an appropiate format for email (*****@*****.***)!"
                    />
                    <FormGroup
                        id="password"
                        type="password"
                        label="Enter your password:"
                        placeholder="Password"
                        value={[password, setPassword]}
                        status={isPasswordValid}
                        errorText="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
                    />
                    <FormGroup
                        id="confirm"
                        type="password"
                        label="Confirm your password:"
                        placeholder="Password"
                        value={[confirmation, setConfirmation]}
                        status={isConfirmationValid}
                        errorText="Confirmation password is different with password!"
                    />
                    <br/>
                    <FormButton
                        text="Register"
                        onClickFunction={onRegister}
                        disabled={
                        !isUsernameValid ||
                        !isConfirmationValid ||
                        !isPasswordValid ||
                        !isConfirmationValid
                        }
                    />
                </form>
                <p className="mt-2">
                    Already have an account?
                    <span className="text-darkgreen hover:text-lightgreen"><Link to="/login"> Log in</Link></span>.
                </p>
            </>
        </div>
    </div>
    )
}

export default Register;