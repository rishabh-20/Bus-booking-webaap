import axios from 'axios';
import React, { useState } from 'react';
import '../Style/UserSignup.css'

const UserSignup = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");

    let data={
        name,phone,email,gender,age,password
    }

    function createUser(e){
        e.preventDefault()
        axios.post('http://localhost:8080/api/users',data)
        .then((res)=>{
            alert("User Added Succesfully")
            console.log(res);
        })
        .catch((err)=>{
            alert("User Signup Failed")
            console.log(err);
        })
    }

    return (
        <div className="usersignup">
            <form onSubmit={createUser}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    placeholder="Enter the Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="phone">Phone</label>
                <input
                    type="tel"
                    placeholder="Enter the Phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Enter the Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="gender">Gender</label>
                <select
                    required
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="" disabled>Choose Your Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    placeholder="Enter Your Age"
                    required
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Enter the Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default UserSignup;
