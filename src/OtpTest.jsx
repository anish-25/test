import { useState } from 'react'
import './App.css'
import { useSearchParams } from "react-router-dom";
import OtpInput from "react18-input-otp";
export default function OtpTest() {

    const [Otp, setOtp] = useState("");
    const [searchParams, setSearchParams] = useSearchParams({
        query: "",
        page: 1
    });
    let page = Number(searchParams.get("page"))
    const handleChange = (eventValue) => {
        setOtp(eventValue);
    };
    const handleClickSigninFunction = () => { }
    return (
        <main style={{ height: "100vh", display: "flex", flexDirection: "column", gap: "50px", justifyContent: "center", alignItems: "center" }}>
            <OtpInput
                value={Otp}
                isInputNum={true}
                onChange={handleChange}
                numInputs={4}
                onSubmit={Otp.length === 4 && handleClickSigninFunction}
                separator={<span></span>}
                isInputSecure={true}
                shouldAutoFocus={true}
                className="boxStyling outline-none focus:outline-none transition-all"
                inputProps={{
                    onPaste: function (e) {
                        e.preventDefault();
                        return false;
                    },
                }}
            />
            <button type='submit' onClick={() => console.log(Otp)}>Submit</button>
        </main>
    )
}
