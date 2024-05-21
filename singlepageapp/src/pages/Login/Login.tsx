import LogoText from "../../assets/logo-text-color.png";
import Logo from "../../assets/logo-color.png";
import { ToastContainer, toast } from "react-toastify";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { REST_BASE_URL } from "../../constant/constants";

import FormGroup from "@/components/AuthenticationForm/FormGroup";
import FormButton from "@/components/AuthenticationForm/FormButton";
import { login } from "@/utils/login";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isUsernameValid, setIsUsernameValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsUsernameValid(username.length > 0);
  }, [username]);

  useEffect(() => {
    setIsPasswordValid(password.length > 0);
  }, [password]);

  const onLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response = login(username, password);

    const data = await response;
    console.log(data)

    if (!data.ok) {
      toast.error(data.ok, {
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
      localStorage.setItem("token", `${data.data.accessToken}`);
      console.log(localStorage.getItem('token'));
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex wrap flex-col md:flex-col my-0 mx-auto p-4 max-w-screen-2xl">
        <>
          <ToastContainer/>
          <header className="mt-2">
            <img src={LogoText} alt="iWalet Logo" title="iWalet Logo" className="max-w-lg hidden md:flex"></img>
            <img src={Logo} alt="iWalet Logo" title="iWalet Logo" className="max-w-xs flex md:hidden"></img>
            <p> Log in to start using <b>iWalet App</b></p>
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
                errorText="Username cannot be empty!"
              />
              <FormGroup
                id="password"
                type="password"
                label="Enter your password:"
                placeholder="Password"
                value={[password, setPassword]}
                status={isPasswordValid}
                errorText="Password cannot be empty!"
              />
              <br/>
              <FormButton
                text="Login"
                onClickFunction={onLogin}
                disabled={!isUsernameValid || !isPasswordValid}
              />
          </form>
          <p className="mt-2">
              Don't have an account yet?{" "}
              <span className="text-darkgreen hover:text-lightgreen">
                <Link to="/register">Register</Link>
              </span>
              .
            </p>
        </>
      </div>
    </div>
  );
};

export default Login;