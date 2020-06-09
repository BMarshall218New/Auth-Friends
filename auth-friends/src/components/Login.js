import React from "react";
import axiosWithAuth from "../Utils/axiosWithAuth";

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/login", this.state.credentials)
            .then(res => {
                // this.props.setLogin(true)
                localStorage.setItem("token", res.data.payload)
                this.props.history.push("/authFriends");
                console.log("data from the login:", res)

            })
            .catch(err => console.log("login error from the login page: ", err))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

export default Login;