import styled from "@emotion/styled";
import { useState } from "react";
import axios from "axios";

const MainContainer = styled.div`
  background-image: url("/black.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FindPasswordDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: white;

  h2 {
    color: white;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      margin-bottom: 10px;
      width: 300px;
      height: 25px;
      border-radius: 2px;
      text-indent: 1.8rem;
      color: black;

      &:active,
      &:focus {
        outline: none;
      }
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
      margin-top: 10px;
    }
  }

  p {
    margin-top: 10px;
  }
`;

function FindPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordRecovery = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/find-password", {
        email,
      });
      if (response.data.password) {
        setPassword(response.data.password);
        setMessage("");
      } else {
        setPassword("");
        setMessage("해당 이메일로 등록된 계정이 없습니다.");
      }
    } catch (error) {
      console.error("비밀번호를 찾을 수 없습니다:", error);
      setPassword("");
      setMessage("비밀번호를 찾을 수 없습니다. 다시 시도해주세요.");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.currentTarget.value);
    setPassword("");
    setMessage("");
  };

  return (
    <>
      <MainContainer>
        <FindPasswordDiv>
          <h2>비밀번호 찾기</h2>
          <p>
            이메일을 입력하면 해당 이메일로 등록된 계정의 비밀번호를 확인할 수
            있습니다.
          </p>
          <form onSubmit={handlePasswordRecovery}>
            <input
              type="email"
              value={email}
              placeholder="이메일"
              onChange={handleEmailChange}
              required
            />
            <button type="submit">비밀번호 찾기</button>
          </form>
          {password ? <p>비밀번호: {password}</p> : null}
          {message && !password && <p>{message}</p>}
        </FindPasswordDiv>
      </MainContainer>
    </>
  );
}

export default FindPassword;
