import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const MainContainer = styled.div`
  background-image: url("/black.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  padding: 20px;
  border-radius: 10px;
  text-align: center;

  form {
    margin-top: 10px;
    margin-bottom: 10px;
    max-width: 300px;
    .profile-image {
      width: 150px;
      height: 150px;
      background-image: url("/profile.jfif");
      background-size: cover;
      background-position: center;
      border-radius: 50%;
      margin: 0 auto 20px;
    }
    input {
      margin-bottom: 10px;
      width: 300px;
      height: 25px;
      border-radius: 2px;
      text-indent: 1.8rem;

      &:active,
      &:focus {
        outline: none;
      }
    }
    .email {
      background-image: url("/person.png");
      background-repeat: no-repeat;
      background-size: 22px;
      background-position: 3px center;
    }
    .password {
      background-image: url("/lock.png");
      background-repeat: no-repeat;
      background-size: 22px;
      background-position: 3px center;
    }
    button {
      display: block;
      width: 300px;
      padding: 7px;
      background-color: black;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      cursor: pointer;
      margin-top: 3px;
    }
    label {
      color: white;
      display: flex;
      justify-content: space-evenly;
      margin-top: 12px;
      font-size: 80%;
      text-align: center;
    }
    .error-msg {
      color: red;
      margin-top: 1rem;
    }
  }
`;

const Select = styled.select`
  margin-bottom: 10px;
  width: 300px;
  height: 25px;
  border-radius: 2px;
  text-indent: 1.8rem;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [building, setBuilding] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", {
        email,
        password,
        building,
      });
      router.push("/");
    } catch (error) {
      console.error("Failed to login:", error.response.data.me);
      setMessage(error.response.data.message);
      setEmail("");
      setPassword("");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [message]);

  return (
    <>
      <MainContainer>
        <LoginDiv>
          <form onSubmit={handleLogin}>
            <div className="profile-image"></div>

            <input
              className="email"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
            />

            <input
              className="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.currentTarget.value)}
              required
            />

            <Select value={building} onChange={(e) => setBuilding(e.currentTarget.value)}>
              <option value="">Select a building</option>
              <option value="1">빌딩1</option>
              <option value="2">빌딩2</option>
              <option value="3">빌딩3</option>
              <option value="4">빌딩4</option>
              <option value="5">빌딩5</option>
              <option value="6">빌딩6</option>
              <option value="7">빌딩7</option>
              <option value="8">빌딩8</option>
              <option value="9">빌딩9</option>
              <option value="10">빌딩10</option>
            </Select>

            <button type="submit">Login</button>
            <label>
              <Link href="/user/register">Sign Up</Link>
              <Link href="/user/findpassword">Forgot Password?</Link>
            </label>
            {message != "" && <p className="error-msg">{message}</p>}
          </form>
        </LoginDiv>
      </MainContainer>
    </>
  );
}

export default Login;
