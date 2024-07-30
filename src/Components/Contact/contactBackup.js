import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import TextComponent from "./TextComponent";
import IconText from "./IconText";
import fblogo from '../../Assets/fb.png';
import instalogo from '../../Assets/inst.png';
import whatsapplogo from '../../Assets/whtap.png';
import "./contact.css"

function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [formValues, setFormValues] = useState({ firstname: '', lastname: '', email: '', phone: '', message: '', subject: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formValues);
        setFormValues({ firstname: '', lastname: '', email: '', phone: '', message: '', subject: '' });

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
    };

    return (
        <div id="contact" className="bg-white lg:mx-16 sm:mt-[110px] -z-10 rounded-lg lg:flex">
            <div className="lg:w-[850px] bg-contactform-image bg-cover bg-center lg:m-2.5 lg:rounded-lg pb-5 pt-[1px]">
                <div className="m-[41px]">
                    <h1 className="text-white hover:text-secondary-color text-3xl font-semibold">
                        Contact Information
                    </h1>
                    <p className="text-lg text-primary-color hover:text-secondary-color">
                        Say something to start a live chat!
                    </p>
                    <div className="mt-[115px] h-[203px] flex flex-col text-base justify-between">
                        <IconText icon="phone_in_talk" text="+1012 3456 789"></IconText>
                        <IconText icon="mail" text="demo@gmail.com"></IconText>
                        <IconText icon="location_on" text="132 Dartmouth Street Boston, Massachusetts 02156 United States"></IconText>
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

            <form onSubmit={handleSubmit} className="m-[62px] flex flex-col lg:gap-10 gap-5 lg:w-[100%]">
                <div className="flex lg:flex-row flex-col gap-5">
                    <div className="flex text-sm text-[#8D8D8D] hover:text-black flex-col sm:w-[40%] lg:w-[100%]">
                        <label htmlFor="firstname">First Name</label>
                        <input
                            required
                            id='input-outline'
                            name="firstname"
                            value={formValues.firstname}
                            onChange={handleChange}
                            type="text"
                            className="border-0 border-b border-solid border-grey"
                        ></input>
                    </div>
                    <div className="flex text-sm text-[#8D8D8D] hover:text-black flex-col sm:w-[40%] lg:w-[100%]">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            required
                            id='input-outline'
                            name="lastname"
                            value={formValues.lastname}
                            onChange={handleChange}
                            type="text"
                            className="border-0 border-b border-solid border-grey"
                        ></input>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-5">
                    <div className="flex text-sm text-[#8D8D8D] hover:text-black flex-col sm:w-[40%] lg:w-[100%]">
                        <label htmlFor="email">Email</label>
                        <input
                            required
                            id='input-outline'
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            type="email"
                            className="border-0 border-b border-solid border-grey"
                        ></input>
                    </div>
                    <div className="flex text-sm text-[#8D8D8D] hover:text-black flex-col sm:w-[40%] lg:w-[100%]">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            required
                            id='input-outline'
                            name="phone"
                            value={formValues.phone}
                            onChange={handleChange}
                            type="tel"
                            className="border-0 border-b border-solid border-grey"
                        ></input>
                    </div>
                </div>
                <div className="mt-[46px]">
                    <p className="font-bold">Select Subject?</p>
                    <div className="flex xl:flex-row flex-col text-[12px] font-medium mt-[14px] gap-11">
                        <div className="flex gap-1">
                            <input
                                type="radio"
                                id="general_inquiry"
                                name="subject"
                                value="General Inquiry"
                                checked={formValues.subject === 'General Inquiry'}
                                onChange={handleChange}
                            ></input>
                            <label htmlFor="general_inquiry">General Inquiry</label>
                        </div>
                        <div className="flex gap-1">
                            <input
                                type="radio"
                                id="support"
                                name="subject"
                                value="Support"
                                checked={formValues.subject === 'Support'}
                                onChange={handleChange}
                            ></input>
                            <label htmlFor="support">Support</label>
                        </div>
                        <div className="flex gap-1">
                            <input
                                type="radio"
                                id="feedback"
                                name="subject"
                                value="Feedback"
                                checked={formValues.subject === 'Feedback'}
                                onChange={handleChange}
                            ></input>
                            <label htmlFor="feedback">Feedback</label>
                        </div>
                        <div className="flex gap-1">
                            <input
                                type="radio"
                                id="others"
                                name="subject"
                                value="Others"
                                checked={formValues.subject === 'Others'}
                                onChange={handleChange}
                            ></input>
                            <label htmlFor="others">Others</label>
                        </div>
                    </div>
                </div>
                <div className="mt-[46px] flex flex-col">
                    <label htmlFor="message" className="text-sm text-[#8D8D8D] hover:text-black font-medium">Message</label>
                    <textarea
                        required
                        id='input-outline'
                        name="message"
                        value={formValues.message}
                        onChange={handleChange}
                        className="border-0 border-b border-solid border-grey mt-3"
                        placeholder="Write your message.."
                    ></textarea>
                </div>
                <div className="flex lg:justify-end justify-center mt-[15px] pb-[30px] mb-2">
                    <button type="submit" className="flex flex-col justify-center items-center bg-black rounded-lg text-white w-[220px] h-[56px] hover:bg-tertiary-color">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
