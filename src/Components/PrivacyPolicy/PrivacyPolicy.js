import React, { useEffect } from 'react'

function PrivacyPolicy() {
    useEffect (()=> {
        window.scrollTo(0, 0);
    },[])
    return (
        <div className='flex justify-center sm:px-16 px-2 sm:ml-8 font-sans'>
            <div>
                <div className='text-white sm:text-[40px] text-center pb-14 font-medium'>Privacy Policy</div>
                <div className='text-white'>
                    Hudson Papers is committed to protecting the privacy of our users when they visit our website. Our privacy policy outlines how we collect, use, and protect personal information provided by visitors to our site. We understand the importance of safeguarding sensitive data and ensuring that our users feel secure when interacting with our platform. By clearly defining our privacy practices, we aim to build trust with our users and demonstrate our dedication to maintaining the highest standards of data protection.
                    <br></br>
                    <br></br>
                    When you visit the Hudson Papers website, we may collect certain information such as your IP address, browser type, and device identifiers. This data helps us improve the user experience on our site and track visitor trends. We may also use cookies to personalize your browsing experience and provide relevant content. Rest assured that any personal information you choose to share with us, such as your name or email address, will be kept confidential and will only be used for the purposes outlined in our privacy policy.
                    <br></br>
                    <br></br>
                    At Hudson Papers, we take the security of your personal information seriously. We have implemented industry-standard measures to protect against unauthorized access, disclosure, alteration, or destruction of data. Our website is regularly monitored for potential security threats, and we continuously update our security protocols to stay ahead of emerging risks. By prioritizing data security and transparency in our privacy practices, we aim to provide our users with a safe and trustworthy online experience.
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
