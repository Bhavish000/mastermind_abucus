
import { React, useState, useEffect } from 'react';
import Select from 'react-select';
import ConfettiExplosion from 'react-confetti-explosion';
import axios from "axios";
// import '@/styles/landingstyle/index.css';
// import '@/styles/landingstyle/output.css';
import ReCAPTCHA from "react-google-recaptcha";
// import logo from '@/styles/images/Mastermind Image 29.png'
import Image from 'next/image';
import { useRouter } from 'next/router';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Student_Inquiry_form = ({onClose}) => {
    const [isExploding, setIsExploding] = useState(false);
    const [value2, setValue2] = useState('');
    const [value, setValue] = useState('');
    const [Captcha, setCaptcha] = useState('');
    const [Captchaerror, setCaptchaerror] = useState(false)
    const [country_list, setcountry_list] = useState('');
    const [state_list, setstate_list] = useState()
    const [StateDef, setStateDef] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('');
    const [defaultVal, setdefaultVal] = useState('')
 
    // const history = useHistory()

    const route = useRouter();

    const getData = async (ip) => {
        try {
            const res = await axios.get(`https://tt.mastermindschool.co.in/api/get_cournty_ip?ip=${ip}`);
            // console.log('data ' + res.data.data)
            getcountry_list(res.data.data)
        } catch (error) {
            console.error("An error occurred while fetching data:", error);
        }
    };
    const getIP = async () => {
        const res = await axios.get("https://api.bigdatacloud.net/data/client-ip");
        if(res.data.ipString){
            // console.log('ip data ' + res.data.ipString);
            getData(res.data.ipString);
        }
    };

    const getcountry_list = async (value) => {
        const res = await axios.get("https://tt.mastermindschool.co.in/api/country_list");
        setcountry_list(res.data.data);
        const matchedCountry = res.data.data.find(country => country.digiit3code === value);
        if (matchedCountry) {
            setSelectedCountry(matchedCountry);
        }
    };
    let CountryOptions = []
    if (country_list) {
        CountryOptions = country_list.map((option) => ({
            value: option.id,
            label: option.countryname,
        }));
    }

    const get_state_listData = async (selectedOption) => {
        try {
            setValue(selectedOption.value);
            setdefaultVal(selectedOption);
            setStateDef('')
            const res = await axios.get(`https://tt.mastermindschool.co.in/api/state_list?country_id=${selectedOption.value}`);
            // setCountryCode(res.data.data);
            setstate_list(res.data.data)
            // console.log(res.data.data)
            // fetchTime(res.data.data);
        } catch (error) {
            console.error("An error occurred while fetching data:", error);
        }
    };
    let valueSelect = ''
    if (selectedCountry) {
        // console.log('dddd')
        valueSelect = { value: selectedCountry.id, label: selectedCountry.countryname };
        get_state_listData(valueSelect)
        setdefaultVal(valueSelect)
        setSelectedCountry('')
    }

    let StateOptions = []
    if (state_list) {
        StateOptions = state_list.map((option) => ({
            value: option.id,
            label: option.statename,
        }));
    }

    const changeHandler2 = (selectedOption) => {
        setValue2(selectedOption.value);
        setStateDef(selectedOption);
    };

    function onChange(value) {
        setCaptcha(value);
        setCaptchaerror(false);
    }

    const burst = () => {
        setIsExploding(true);
        setTimeout(() => {
            setIsExploding(false);
        }, 2200);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            countryid: value,
            stateId: value2,
            Name: event.target.name.value,
            email: event.target.email.value,
            phoneNumber: event.target.number.value,
            city: event.target.city.value,
            remark:event.target.remark.value
        };
        // console.log(formData)
        if (Captcha) {
            try {
                const response = await axios.get(`https://tt.mastermindschool.co.in/api/post_studofflin_inquiry_data?name=${formData.Name}&email_id=${formData.email}&mobile_no=${formData.phoneNumber}&city=${formData.city}&country_id=${formData.countryid}&state_id=${formData.stateId}&remark=${formData.remark}`);
                const result = response.data
                // console.log('Success data:', result);
                if (result.status === true) {
                    burst();
                    // setTimeout(() => {
                    //     window.location.replace(result.data);
                    // }, 3000);
                    route.push('/inquiry_submit_on_domain_offline')
                    
                } else {
                    console.error('Error:', response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            setCaptchaerror(true);
        }
    };



    useEffect(() => {
        getIP();
    }, []);
    return (
        <>
            <div className='flex items-center justify-center'>
                {isExploding && <ConfettiExplosion force={0.8} duration={3000} particleCount={400} width={1600} />}
            </div>
            <div className="rounded-2xl border-[0.4px] md:px-6 p-4 md:py-5 border-orange-500 shadow-2xl bg-white">

                   <div className='float-end'>
            <i onClick={onClose} class="fa-solid fa-xmark"></i>
                   </div>

                <div className='flex justify-between'>
                {/* <Image src={logo} alt="Mastermind Logo" style={{height:40}}/> */}
                <div className="text-xl py-2 font-bold"> STUDENT INQUIRY 
                </div>
                </div>
                
                <form
                    onSubmit={handleSubmit}
                    className="flex text-sm flex-col gap-2 mt-2">
                    <input className="w-full mt-2 py-2 " placeholder="Enter Name" name="name" type="text" required />
            
                    <input className="w-full py-2 " placeholder="Enter Email Id" name="email" type="email" required />
                    <input className="w-full py-2 " placeholder="Enter Contact No" name="number" type="number" required />
                    <input className="w-full py-2 " placeholder="Enter Your City" name="city" type="text" required />
                    <div className='w-full flex md:flex-row flex-col gap-1 my-2'>
                        <Select className='w-full ' options={CountryOptions} placeholder="Select Country" value={defaultVal} onChange={get_state_listData} required />
                        <Select className='w-full' options={StateOptions} placeholder="Select State" value={StateDef} onChange={changeHandler2} required />
                    </div>
                    <div className="col-md-12 col-sm-12 mb-35">
                        <div className="form-group">
                            <textarea cols="5" rows="2" placeholder='Your Remarks/Comments' name='remark' className="textarea form-control" required></textarea>
                        </div>
                    </div>
                    <ReCAPTCHA
                        sitekey="6LdEAyAbAAAAAJW_ibc-uIp7JsrlEwXUd_cs1scy"
                        onChange={onChange}
                    />
                    {Captchaerror ? <span style={{ color: 'red' }}>Please Select Captcha</span> : null}
                    <span className="text-sm text-gray-500 pt-1">By registering here, I agree to Mastermind Abacus <a className='text-blue-600' href='https://www.mastermindabacus.com/terms?_gl=1*y57x04*_up*MQ..'>Terms & Conditions</a> and <a className='text-blue-600 ' href='https://www.mastermindabacus.com/privacy-policy?_gl=1*16oj2r1*_up*MQ..'>Privacy Policy</a></span>
                    <button className="btns btn-anim bg-orange-600 hover:bg-red hover:text-black border-[1px] hover:border-orange-600 rounded-lg text-sm px-4 py-3 mt-6 text-center font-semibold text-white ease-in-out duration-300 w-full hover:shadow-lg hover:shadow-orange-600/40">
                        SUBMIT
                    </button>
                </form>
            </div>
        </>
    )
}

export default Student_Inquiry_form;



































// import { React, useState, useEffect } from 'react';
// import Select from 'react-select';
// import ConfettiExplosion from 'react-confetti-explosion';
// import axios from "axios";
// import '../../../assets/landingstyle/index.css';
// import '../../../assets/landingstyle/output.css';
// import ReCAPTCHA from "react-google-recaptcha";
// import logo from '../../../assets/images/Mastermind Image 29.png'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// const Student_Inquiry_form = ({onClose}) => {
//     const [isExploding, setIsExploding] = useState(false);
//     const [value2, setValue2] = useState('');
//     const [value, setValue] = useState('');
//     const [Captcha, setCaptcha] = useState('');
//     const [Captchaerror, setCaptchaerror] = useState(false)
//     const [country_list, setcountry_list] = useState('');
//     const [state_list, setstate_list] = useState()

//     const history = useHistory()

//     const getcountry_list = async () => {
//         const res = await axios.get("https://tt.mastermindschool.co.in/api/country_list");
//         setcountry_list(res.data.data)
//     };
//     let CountryOptions = []
//     if (country_list) {
//         CountryOptions = country_list.map((option) => ({
//             value: option.id,
//             label: option.countryname,
//         }));
//     }

//     const get_state_listData = async (selectedOption) => {
//         try {
//             setValue(selectedOption.value)
//             const res = await axios.get(`https://tt.mastermindschool.co.in/api/state_list?country_id=${selectedOption.value}`);
//             // setCountryCode(res.data.data);
//             setstate_list(res.data.data)
//             // console.log(res.data.data)
//             // fetchTime(res.data.data);
//         } catch (error) {
//             console.error("An error occurred while fetching data:", error);
//         }
//     };

//     let StateOptions = []
//     if (state_list) {
//         StateOptions = state_list.map((option) => ({
//             value: option.id,
//             label: option.statename,
//         }));
//     }

//     const changeHandler2 = (selectedOption) => {
//         setValue2(selectedOption.value);
//     };

//     function onChange(value) {
//         setCaptcha(value);
//         setCaptchaerror(false);
//     }

//     const burst = () => {
//         setIsExploding(true);
//         setTimeout(() => {
//             setIsExploding(false);
//         }, 2200);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const formData = {
//             countryid: value,
//             stateId: value2,
//             Name: event.target.name.value,
//             email: event.target.email.value,
//             phoneNumber: event.target.number.value,
//             city: event.target.city.value,
//             remark: event.target.remark.value,
//         };
//         // console.log(formData)
//         if (Captcha) {
//             try {
//                 const response = await axios.get(`https://tt.mastermindschool.co.in/api/post_studofflin_inquiry_data?name=${formData.Name}&email_id=${formData.email}&mobile_no=${formData.phoneNumber}&city=${formData.city}&country_id=${formData.countryid}&state_id=${formData.stateId}&remark=${formData.remark}`);
//                 const result = response.data
//                 console.log('Success data:', result);
//                 if (result.status === true) {
//                     burst();
//                     setTimeout(() => {
//                        history.push('/inquiry_submit_on_domain_offline')
//                     }, 3000);
                    
//                 } else {
//                     console.error('Error:', response.statusText);
//                 }
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         } else {
//             setCaptchaerror(true);
//         }
//     };



//     useEffect(() => {
//         getcountry_list();
//     }, []);
//     return (
//         <>
//             <div className='flex items-center justify-center'>
//                 {isExploding && <ConfettiExplosion force={0.8} duration={3000} particleCount={400} width={1600} />}
               
//             </div>
            
//             <div className="rounded-2xl border-[0.4px] md:px-6 p-4 md:py-5 border-orange-500 shadow-2xl bg-white">
//             <div className='float-end ml-5'>
//                 <i onClick={onClose} class="fa-solid fa-xmark"></i>
//                 </div>
//                 <div className='flex justify-between'>
//                 <img src={logo} alt="Mastermind Logo" style={{height:40}}/>
//                 <div className="text-xl py-2 font-bold"> STUDENT INQUIRY 
//                 </div>
//                 </div>
                
//                 <form
//                     onSubmit={handleSubmit}
//                     className="flex text-sm flex-col gap-3 mt-2">
//                     <input className="w-full mt-2 py-2 " placeholder="Enter Name" name="name" type="text" required />
            
//                     <input className="w-full py-2 " placeholder="Enter Email Id" name="email" type="email" required />
//                     <input className="w-full py-2 " placeholder="Enter Contact No" name="number" type="number" required />
//                     <input className="w-full py-2 " placeholder="Enter Your City" name="city" type="text" required />
//                     <div className='w-full flex md:flex-row flex-col gap-1'>
//                         <Select className='w-full' options={CountryOptions} placeholder="Select Country" onChange={get_state_listData} required />
//                         <Select className='w-full' options={StateOptions} placeholder="Select State" onChange={changeHandler2} required />
//                     </div>
//                     <div className="col-md-12 col-sm-12 mb-35">
//                         <div className="form-group">
//                             <textarea cols="5" rows="2" placeholder='Your Remarks/Comments' name='remark' className="textarea form-control" required></textarea>
//                         </div>
//                     </div>
//                     <ReCAPTCHA
//                         sitekey="6LdEAyAbAAAAAJW_ibc-uIp7JsrlEwXUd_cs1scy"
//                         onChange={onChange}
//                     />
//                     {Captchaerror ? <span style={{ color: 'red' }}>Please Select Captcha</span> : null}
//                     <span className="text-sm text-gray-500 pt-1">By registering here, I agree to Mastermind Abacus <a className='text-blue-600' href='https://www.mastermindabacus.com/terms?_gl=1*y57x04*_up*MQ..'>Terms & Conditions</a> and <a className='text-blue-600 ' href='https://www.mastermindabacus.com/privacy-policy?_gl=1*16oj2r1*_up*MQ..'>Privacy Policy</a></span>
//                     <button className="btns btn-anim bg-orange-600 hover:bg-red hover:text-black border-[1px] hover:border-orange-600 rounded-lg text-sm px-4 py-3 mt-6 text-center font-semibold text-white ease-in-out duration-300 w-full hover:shadow-lg hover:shadow-orange-600/40">
//                         SUBMIT
//                     </button>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default Student_Inquiry_form