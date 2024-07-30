import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import TextComponent from "./TextComponent";
import IconText from "./IconText";
import fblogo from '../../Assets/fb.png';
import instalogo from '../../Assets/inst.png';
import whatsapplogo from '../../Assets/whtap.png';
import "./contact.css";  // Import the CSS file
import {motion} from "framer-motion"

function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "3bb1cf2b-ef2d-4f7d-bff7-e5a5f05cb206");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-center',
                showConfirmButton: false,
                timer: 3500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: 'success',
                title: 'Thank You.',
                text: 'Our Team will contact you soon!',
            });
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <motion.div

        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.9 }}
        viewport={{ once: false, amount: 0.1 }} id="contact" className="bg-white lg:mx-16 sm:mt-[110px] -z-10 rounded-lg lg:flex mx-[16px]">
            <div className="lg:w-[850px] bg-contactform-image bg-cover bg-center lg:m-2.5 lg:rounded-lg pb-5 pt-[1px]">
                <div className="m-[41px]">
                    <h1 className="text-white hover:text-secondary-color text-3xl font-semibold">
                        Contact Information
                    </h1>
                    <p className="text-lg text-primary-color hover:text-secondary-color">
                        Say something to start a live chat!
                    </p>
                    <div className="mt-[115px] h-[203px] flex flex-col text-base justify-between">
                        <IconText icon="phone_in_talk" text="+971 55 4646426"></IconText>
                        <IconText icon="mail" text="info@hudsonpapers.com"></IconText>
                        <IconText icon="location_on" text="GH25+8JV - Al Muqta-Al Muqta 1- Emirate of Umm Al Quwain - United Arab Emirates"></IconText>
                    </div>
                </div>
                <div className="mt-20 lg:mt-56 ml-4 text-white flex w-fit space-x-5">
                    <span>
                        <a href="https://www.facebook.com/profile.php?id=61560821918568"><img className="w-8 hover:scale-150 cursor-pointer hover:duration-300" src={fblogo} alt="Facebook Logo"></img></a>
                    </span>
                    <span>
                        <a href="https://www.instagram.com/hudsonpapers?igsh=MWVycWNhdTJwMGc5OQ=="><img className="w-8 hover:scale-150 cursor-pointer hover:duration-300" src={instalogo} alt="Instagram Logo"></img></a>
                    </span>
                    <span>
                        <img className="w-8 hover:scale-150 cursor-pointer hover:duration-300" src={whatsapplogo} alt="WhatsApp Logo"></img>
                    </span>
                </div>
            </div>

            <form onSubmit={onSubmit} className="m-[62px] flex flex-col lg:gap-10 gap-5 lg:w-[100%]">
                <div className="flex lg:flex-row flex-col gap-5">
                    <div className="flex text-sm text-[#8D8D8D] hover:text-black flex-col sm:w-[40%] lg:w-[100%]">
                        <label htmlFor="firstname">First Name</label>
                        <input
                            required
                            id="firstname"
                            name="firstname"
                            type="text"
                            className="input-no-outline"
                        ></input>
                    </div>
                    <div className="flex text-sm text-[#8D8D8D] hover:text-black flex-col sm:w-[40%] lg:w-[100%]">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            required
                            id="lastname"
                            name="lastname"
                            type="text"
                            className="input-no-outline"
                        ></input>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-5">
                    <div className="flex text-sm text-[#8D8D8D] hover:text-black flex-col sm:w-[40%] lg:w-[100%]">
                        <label htmlFor="email">Email</label>
                        <input
                            required
                            id="email"
                            name="email"
                            type="email"
                            className="input-no-outline"
                        ></input>
                    </div>
                    <div className="flex text-sm text-[#8D8D8D] hover:text-black flex-col sm:w-[40%] lg:w-[100%]">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            required
                            id="phone"
                            name="phone"
                            type="tel"
                            className="input-no-outline"
                        ></input>
                    </div>
                </div>
                <div className="mt-[46px]">
                    <p className="font-bold">Select Subject?</p>
                    <div className="flex xl:flex-row flex-col text-[12px] font-medium mt-[14px] gap-11">
                        <div className="flex gap-1 text-[14px]">
                            <input
                                type="radio"
                                id="general_inquiry"
                                name="subject"
                                value="General Inquiry"
                            ></input>
                            <label htmlFor="general_inquiry">General Inquiry</label>
                        </div>
                        <div className="flex gap-1 text-[14px]">
                            <input
                                type="radio"
                                id="support"
                                name="subject"
                                value="Support"
                            ></input>
                            <label htmlFor="support">Support</label>
                        </div>
                        <div className="flex gap-1 text-[14px]">
                            <input
                                type="radio"
                                id="feedback"
                                name="subject"
                                value="Feedback"
                            ></input>
                            <label htmlFor="feedback">Feedback</label>
                        </div>
                        <div className="flex gap-1 text-[14px]">
                            <input
                                type="radio"
                                id="others"
                                name="subject"
                                value="Others"
                            ></input>
                            <label htmlFor="others">Others</label>
                        </div>
                    </div>
                </div>
                <div className="mt-[46px] flex flex-col">
                    <label htmlFor="message" className="text-sm text-[#8D8D8D] hover:text-black font-medium">Message</label>
                    <textarea
                        required
                        id="message"
                        name="message"
                        className="input-no-outline mt-3"
                        placeholder="Write your message.."
                    ></textarea>
                </div>
                <div className="flex lg:justify-end justify-center mt-[15px] pb-[30px] mb-2">
                    <button type="submit" className="flex flex-col justify-center items-center bg-black rounded-lg text-white w-[220px] h-[56px] hover:bg-tertiary-color">
                        Send Message
                    </button>
                </div>
            </form>
        </motion.div>
    );
}

export default Contact;
