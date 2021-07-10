import axios from "axios";
import React, { useState } from "react";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000/api/auth";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("register", {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {});
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("登录成功");
        }
      });
  };

  const handleCredentialsTest = () => {
    setName("233");
    setEmail("233@233.com");
    setPassword("123456");
  };

  const handleUser = () => {
    axios.get("user").then((resp) => {});
  };

  return (
    <>
      <div>
        <form onSubmit={(e) => handleRegister(e)}>
          <label>
            昵称：
            <input
              name="name"
              type="text"
              value={name}
              placeholder="请输入昵称"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            邮箱：
            <input
              name="email"
              type="text"
              value={email}
              placeholder="请输入邮箱"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            密码：
            <input
              name="password"
              type="password"
              value={password}
              placeholder="请输入密码"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <input type="submit" value="注册" />
        </form>
      </div>
      <div>
        <form onSubmit={(e) => handleLogin(e)}>
          <label>
            邮箱：
            <input
              name="email"
              type="text"
              value={email}
              placeholder="请输入邮箱"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            密码：
            <input
              name="password"
              type="password"
              value={password}
              placeholder="请输入密码"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <input type="submit" value="登录" />
        </form>
      </div>
      <div>
        <button onClick={handleCredentialsTest}>一键填入测试数据</button>
        <button onClick={handleUser}>获取用户信息</button>
      </div>
    </>
  );
}

export default App;
