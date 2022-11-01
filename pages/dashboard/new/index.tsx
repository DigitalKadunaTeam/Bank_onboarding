import React, { useState } from "react";
import CardOption from "../../../components/option";
import Layout from "../../../components/layout";
import Input from "../../../components/input";
import Button from "../../../components/button";
import Select, { SelectOption } from "../../../components/select";

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7;
type StepType =
  | "single"
  | "batch"
  | "verifyPhone"
  | "verifyBVN"
  | "verifyNIN"
  | "";

export default function New() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [verifyAccStep, setVerifyAccStep] = useState<StepType>("");

  const [bvnDBO, setBVNDOB] = useState("");
  const [dob, setDOB] = useState("");
  const [bvn, setBVN] = useState("");
  const [nin, setNIN] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOTP] = useState("");

  const [personalDetails, setDetails] = useState({
    title: "",
    firstName: "",
    lastName: "",
    otherNames: "",
    email: "",
    maritalStatus: "",
    gender: "",
    dob: "",
    country: "",
    state: "",
    city: "",
    street: "",
    accountType: "",
    password: "",
  });

  const nextStep = (type: StepType) => {
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep as Step);
    setVerifyAccStep(type);
  };

  const goBack = () => {
    const prevStep = currentStep - 1;
    if (currentStep > 1) setCurrentStep(prevStep as Step);
  };

  const steps = {
    1: {
      content: "I would like to create a",
      options: [
        {
          title: "Single Account",
          content: "I want to create a single account",
          iconPath: "/svg/single-emoji.svg",
          onClick: () => nextStep("single"),
        },
        {
          title: "Batch Account",
          content: "I want to create multiple accounts at once",
          onClick: () => nextStep("batch"),
          iconPath: "/svg/batch-emoji.svg",
        },
      ],
    },
    2: {
      content: "I want to use my",
      options: [
        {
          title: "Phone Number",
          content: "I have a Phone Number",
          iconPath: "/svg/phone-emoji.svg",
          onClick: () => nextStep("verifyPhone"),
        },
        {
          title: "NIN",
          content: "I have a National Identity Number",
          onClick: () => nextStep("verifyNIN"),
          iconPath: "/svg/flag-emoji.svg",
        },
        {
          title: "BVN",
          content: "I have a Bank Verification Number",
          onClick: () => nextStep("verifyBVN"),
          iconPath: "/svg/bank-emoji.svg",
        },
      ],
    },
  };

  return (
    <Layout>
      <article className="new__container">
        {currentStep < 5 && (
          <button onClick={goBack} className="go__back">
            <img src={"/svg/goback.svg"} alt="Password off" />
            <div>Go back</div>
          </button>
        )}

        <section className="main">
          {(currentStep == 1 || currentStep == 2) && (
            <>
              <h2>Create Your Account</h2>
              <div>{steps[currentStep].content}</div>
              {steps[currentStep].options.map((item) => {
                return (
                  <CardOption
                    key={item.iconPath}
                    title={item.title}
                    content={item.content}
                    onClick={item.onClick}
                    iconPath={item.iconPath}
                  />
                );
              })}
            </>
          )}

          {currentStep == 3 && (
            <>
              {verifyAccStep == "verifyBVN" && (
                <>
                  <h2>Verify with your BVN</h2>
                  <div>We’d like to verify your BVN</div>
                  <Input
                    label="BVN"
                    placeholder="12345678910"
                    setState={setBVN}
                    state={bvn}
                    type="number"
                  />

                  <Input
                    label="Date of Birth"
                    placeholder="25/06/2022"
                    setState={setBVNDOB}
                    state={bvnDBO}
                    type="date"
                  />

                  <Button title="Get OTP" onClick={() => setCurrentStep(4)} />
                </>
              )}

              {verifyAccStep == "verifyNIN" && (
                <>
                  <h2>Verify with your NIN</h2>
                  <div>We’d like to verify your NIN</div>
                  <Input
                    label="NIN"
                    placeholder="12345678910"
                    setState={setNIN}
                    state={nin}
                    type="number"
                  />

                  <Input
                    label="Date of Birth"
                    placeholder="25/06/2022"
                    setState={setDOB}
                    state={dob}
                    type="date"
                  />

                  <Button title="Get OTP" onClick={() => setCurrentStep(4)} />
                </>
              )}

              {verifyAccStep == "verifyPhone" && (
                <>
                  <h2>Verify with your phone number</h2>
                  <div>We’d like to make sure it’s you</div>
                  <Input
                    label="Phone Number"
                    placeholder="+234 7050 038138"
                    setState={setPhone}
                    state={phone}
                  />

                  <Button title="Get OTP" onClick={() => setCurrentStep(4)} />
                </>
              )}
            </>
          )}

          {currentStep == 4 && (
            <>
              <h2>OTP Verification</h2>
              <div>Enter the 6 digit code sent to {phone}</div>

              <Input
                placeholder=""
                setState={setOTP}
                state={otp}
                type="number"
              />

              <div className="otp__text">
                I didn’t recieve an OTP, <span>Resend by SMS</span>,
                <span>Resend by Voice</span>
              </div>
              <Button title="Get OTP" onClick={() => setCurrentStep(5)} />
            </>
          )}
        </section>

        {(currentStep == 5 || currentStep == 6) && (
          <>
            <button onClick={goBack} className="go__back details">
              <img src={"/svg/goback.svg"} alt="Password off" />
              <div>Go back</div>
            </button>

            {currentStep == 5 && (
              <section className="details">
                <h2>Setup your details</h2>
                <div>Almost done! Fill in your account information</div>
                <div className="flex">
                  <Select
                    className="w-1/3 mr-6"
                    label="Title"
                    setState={(val) =>
                      setDetails({ ...personalDetails, gender: val })
                    }
                  >
                    <SelectOption label="Mr" value="Mr" />
                    <SelectOption label="Mrs" value="Mrs" />
                    <SelectOption label="Ms" value="Ms" />
                    <SelectOption label="Eng" value="Eng" />
                    <SelectOption label="Prof" value="Prof" />
                  </Select>

                  <Input
                    className="w-2/3"
                    label="First Name"
                    placeholder="John"
                    state={personalDetails.title}
                    setState={(val) =>
                      setDetails({ ...personalDetails, title: val })
                    }
                  />
                </div>
                <div className="column">
                  <Input
                    label="Last Name"
                    placeholder="Smith"
                    state={personalDetails.lastName}
                    setState={(val) =>
                      setDetails({ ...personalDetails, lastName: val })
                    }
                  />

                  <Input
                    label="Other Names"
                    placeholder=""
                    state={personalDetails.otherNames}
                    setState={(val) =>
                      setDetails({ ...personalDetails, otherNames: val })
                    }
                  />
                </div>
                <div className="column">
                  <Select
                    label="Marital Status"
                    setState={(val) =>
                      setDetails({ ...personalDetails, maritalStatus: val })
                    }
                  >
                    <SelectOption label="Married" value="Married" />
                    <SelectOption label="Single" value="Single" />
                  </Select>

                  <Input
                    label="Email Address"
                    placeholder="JohnSmith@example.com"
                    state={personalDetails.email}
                    setState={(val) =>
                      setDetails({ ...personalDetails, email: val })
                    }
                  />
                </div>
                <div className="column mb-8">
                  <Select
                    label="Gender"
                    setState={(val) =>
                      setDetails({ ...personalDetails, gender: val })
                    }
                  >
                    <SelectOption label="Male" value="Male" />
                    <SelectOption label="Female" value="Female" />
                  </Select>

                  <Input
                    label="Date of Birth"
                    placeholder="25/06/2022"
                    state={personalDetails.dob}
                    setState={(val) =>
                      setDetails({ ...personalDetails, dob: val })
                    }
                    type="date"
                  />
                </div>
                <Button title="Next" onClick={() => setCurrentStep(6)} />
              </section>
            )}

            {currentStep == 6 && (
              <section className="details">
                <h2>Setup your details</h2>
                <div>Almost done! Fill in your account information</div>
                <div className="grid grid-cols-3 gap-x-6">
                  <Select
                    label="Country of Residence"
                    setState={(val) =>
                      setDetails({ ...personalDetails, country: val })
                    }
                  >
                    <SelectOption label="Nigeria" value="Nigeria" />
                  </Select>

                  <Select
                    label="State of Residence"
                    setState={(val) =>
                      setDetails({ ...personalDetails, state: val })
                    }
                  >
                    <SelectOption label="Kaduna" value="Kaduna" />
                  </Select>

                  <Input
                    label="City of Residence"
                    placeholder=""
                    state={personalDetails.city}
                    setState={(val) =>
                      setDetails({ ...personalDetails, city: val })
                    }
                  />
                </div>
                <div className="input__container">
                  <div className="label__text">Street Address</div>
                  <textarea
                    value={personalDetails.street}
                    onChange={(e) =>
                      setDetails({
                        ...personalDetails,
                        accountType: e.target.value,
                      })
                    }
                  ></textarea>
                </div>

                <div className="column mb-8">
                  <Select
                    label="Account Type"
                    setState={(val) =>
                      setDetails({ ...personalDetails, accountType: val })
                    }
                  >
                    <SelectOption label="Savings" value="Savings" />
                    <SelectOption label="Current" value="Current" />
                  </Select>

                  <Input
                    state={personalDetails.password}
                    setState={(val) =>
                      setDetails({ ...personalDetails, password: val })
                    }
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                  />
                </div>

                <Button title="Create Account" onClick={() => {}} />
              </section>
            )}
          </>
        )}
      </article>
    </Layout>
  );
}
