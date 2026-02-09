import { useState, useEffect } from "react";
import './OTPGenerator.css'

export const OTPGenerator = () => {
  const [otp, setOtp] = useState(null)
  const [timeLeft, setTimeLeft] = useState(0)
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
  let timer;

  if (timeLeft > 0) {
    timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
  } else if (timeLeft === 0 && otp) {
    // countdown finished → re‑enable button
    setIsDisabled(false);
  }

  return () => clearInterval(timer);
}, [timeLeft, otp]);



  const generateOtp = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000)
    setOtp(newOtp) // store it in state
    setTimeLeft(5) // start countdown at 5 sec
    setIsDisabled(true) // disable button while countdown runs
  }

  return(
<div className="container">
  <h1 id="otp-title">OTP Generator</h1>

  {otp === null ? (
    <h2 id="otp-display">Click 'Generate OTP' to get a code</h2>
  ) : (
    <h2 id="otp-display">{otp}</h2>
  )}

  <p id="otp-timer" aria-live="polite">
    {timeLeft > 0
      ? `Expires in: ${timeLeft} seconds`
      : timeLeft === 0 && otp
      ? "OTP expired. Click the button to generate a new OTP."
      : ""}
  </p>

  <button
    disabled={isDisabled}
    id="generate-otp-button"
    onClick={generateOtp}
  >
    Generate OTP
  </button>
</div>

  )
};