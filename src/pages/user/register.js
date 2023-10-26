import styled from "@emotion/styled";
import { useState, useEffect } from "react";
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
  }
`;

const Select = styled.select`
  margin-bottom: 10px;
  width: 300px;
  height: 25px;
  border-radius: 2px;
  text-indent: 1.8rem;
`;

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPW] = useState("");
  const [PWConfirm, setPWConfirm] = useState("");
  const [building, setBuilding] = useState("");

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== PWConfirm) {
      alert("Passwords do not match");
      return;
    }

    try {
      const checkResponse = await axios.get(`/api/check-email?email=${email}`);
      const emailExists = checkResponse.data.emailExists;

      if (emailExists) {
        alert("Email already exists");
        return;
      }

      const response = await axios.post("/api/register", {
        email,
        password,
        building,
      });
      alert("Registration successful");
      router.push("/user/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <MainContainer>
        <LoginDiv>
          <form onSubmit={handleSubmit}>
            <div className="profile-image"></div>

            <input
              className="email"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />

            <input
              className="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPW(e.currentTarget.value)}
            />

            <input
              className="password"
              type="password"
              value={PWConfirm}
              placeholder="Password Confirm"
              onChange={(e) => setPWConfirm(e.currentTarget.value)}
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

            <button>Register</button>
          </form>
        </LoginDiv>
      </MainContainer>
    </>
  );
}

export default Register;
