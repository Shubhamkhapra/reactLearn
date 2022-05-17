import React, { useState } from 'react';

const Form = () => {
    // let [passwd, setPasswd] = useState(""); //get the value of input text used to
    // this type let [password , SetPassword] = useState(""); //to show the h1 tag
    // create new hook

    const [fullName,
        SetFullName] = useState({Fname: "", Lname: "", Email: "", Mobile: ""});

    const inputEvent = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;
        const {value , name} = event.target;
        SetFullName((preValue) => {
            return {
                ...preValue,
                [name] : value,
                
            }

            // if (name === "fname") {
            //     return {Fname: value, Lname: preValue.Lname, Email: preValue.value, Mobile: preValue.Mobile,  }
            // } else if (name === "lname") {
            //     return {Fname: preValue.Fname, Lname: value, Email: preValue.value, Mobile: preValue.Mobile,  };
            // } else if (name === "email") {
            //     return {Fname: preValue.Fname, Lname: preValue.Lname, Email: value, Mobile: preValue.Mobile,  };
            // } else if (name === "phone") {
            //     return {Fname: preValue.Fname, Lname: preValue.Lname, Email: preValue.Email, Mobile: value};
            // }

        });
    }

    let onSubmit = (event) => {
        event.preventDefault();
        alert("Form Submitted");
    }

    return (
        <React.StrictMode>

            <form onSubmit={onSubmit}>

                <div className='main'>
                    <h1>Hello {fullName.Fname}
                        {fullName.Lname}
                        <br/> {fullName.Email}
                        <br/> {fullName.Mobile}
                    </h1>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        name="Fname"
                        onChange={inputEvent}
                        value={fullName.Fname}/>
                    <input
                        type="text"
                        placeholder='Enter Your LastName'
                        name="Lname"
                        onChange={inputEvent}
                        value={fullName.Lname}/>
                    <input
                        type="email"
                        placeholder='Enter Your Email'
                        name='Email'
                        onChange={inputEvent}
                        value = {fullName.Email}
                        autoComplete = "off"
                        />
                    <input
                        type="tel"
                        name="Mobile"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder='Enter Your Mobile Number'
                        onChange={inputEvent}
                        value = {fullName.Mobile}
                        />
                    <button type="submit">Click Me</button>
                </div>
            </form>

        </React.StrictMode>
    )
}

export default Form;