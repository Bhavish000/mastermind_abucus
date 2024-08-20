import { React, useState, useMemo, useEffect } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import ConfettiExplosion from 'react-confetti-explosion';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { formatPhoneNumber } from 'react-phone-number-input';
import { useRouter } from 'next/router';
import { useInquiry } from '@/context/inquiryContext';
// import { useInquiry } from '@/context/InquiryContext';
const BookclassModal = ({ onClose }) => {
    const [isExploding, setIsExploding] = useState(false);
    // const [parent, setParent] = useState();
    const [countryCodevalue, setCountryCodevalue] = useState();
    const [value2, setValue2] = useState('Select a Date for Class');
    const [time, setTime] = useState([]);
    const [countryCode, setCountryCode] = useState();
    const options = useMemo(() => countryList().getData(), []);
    const indiaOption = options.find(option => option.value === 'IN');
    const [value, setValue] = useState(indiaOption);
    const [value3, setvalue3] = useState('Select a Date for Class')
    const [Captcha, setCaptcha] = useState('');
    const [Captchaerror, setCaptchaerror] = useState(false)
    const [options2, setOptions2] = useState([]);
    const [PhoneNum, setPhoneNum] = useState('')

    // console.log(PhoneNum)

    const route = useRouter();
    const { setData } = useInquiry();
    const getIP = async () => {
        const res = await axios.get("https://api.bigdatacloud.net/data/client-ip");
        getData(res.data.ipString)
    };

    const getData = async (ip) => {
        try {
            const res = await axios.get(`https://tt.mastermindschool.co.in/api/get_cournty_ip?ip=${ip}`);
            setCountryCode(res.data.data);
            console.log(res.data.data)
            // fetchTime(res.data.data);
        } catch (error) {
            console.error("An error occurred while fetching data:", error);
        }
    };

    // const changeHandler = (selectedOption) => {
    //     setValue(selectedOption);
    //     if (selectedOption) {
    //         setCountryCode(selectedOption.value);
    //     } else {
    //         setCountryCode(null);
    //     }
    // };

    const changeHandler2 = (selectedOption) => {
        // alert("Selected value:", selectedOption)
        // console.log(selectedOption.value)
        setValue2(selectedOption);
        fetchTime(selectedOption.value)
    };

    const changeHandler3 = (selectedOption) => {
        setvalue3(selectedOption.value)
        // console.log(selectedOption.value)
    };

    const burst = () => {
        setIsExploding(true);
        setTimeout(() => {
            setIsExploding(false);
        }, 2200);
    };



    const fetchTime = async (value) => {
        try {
            const res = await axios.get(`https://tt.mastermindschool.co.in/api/demo_date_list?country=${countryCode}&age_group=${value}`);
            setTime(res.data.data || []);
        } catch (error) {
            console.error("An error occurred while fetching data:", error);
            setTime([]);
        }
    };
    function onChange(value) {
        setCaptcha(value);
        setCaptchaerror(false);
        // alert("Captcha value:", value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            country: value.value,
            studentName: event.target.name.value,
            email: event.target.email.value,
            phoneNumber: PhoneNum,
            city: event.target.city.value,
            parentName: event.target.parentname.value,
            classDate: value3,
        };
        // console.log(formData)
        if (Captcha) {
            try {
                const response = await axios.get(`https://tt.mastermindschool.co.in/api/post_inquiry_data?country=${formData.country}&name=${formData.studentName}&email_id=${formData.email}&mobile_no=${formData.phoneNumber}&city=${formData.city}&gaurdian_name=${formData.parentName}&demo_date=${formData.classDate}`);
                // const result = await response.json();
                const result = response.data
                if (result.status === true) {
                    burst();  
                    setData(result.data);
                    // Push to the static route
                    route.push('/inquiry_submit_on_domain');
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


    // const classOptions = time.map((option) => ({
    //     value: option.date_id,
    //     label: ${option.demo_date} | ${option.demo_from} to ${option.demo_to},
    // }));

    const parentOptions = [
        { value: '4', label: "4 to 6 Years old" },
        { value: '7', label: "7 to 12 Years old" }
    ];

    const handlePhoneChange = (value) => {
        const format = formatPhoneNumber(value)
        setPhoneNum(format)
        setCountryCodevalue(value)
    };



    useEffect(() => {
        const groupedOptions = [];
        let startdate = '';
        time.forEach(datro => {
            const isDisabled = datro.enabled !== "yes";
            const option = {
                value: datro.date_id,
                label: datro.enabled === "yes"
                    ? `${datro.demo_date} | ${datro.demo_from} to ${datro.demo_to}`
                    : `${datro.demo_date} | ${datro.demo_from} to ${datro.demo_to} - No seats available`,
                isDisabled
            };
            // console.log(Option ${datro.id}:, option); 

            // const option = {
            //   value: datro.id,
            //   label: datro.enabled === "yes"  ? ${datro.demo_date} | ${datro.demo_from} to ${datro.demo_to} :  ${datro.demo_date} | ${datro.demo_from} to ${datro.demo_to} No seats available
            // };

            if (startdate !== datro.demo_date) {
                groupedOptions.push({
                    label: `${datro.demo_date} ${new Date().getFullYear()}`,
                    options: []
                });
            }

            groupedOptions[groupedOptions.length - 1].options.push(option);
            startdate = datro.demo_date;
        });

        setOptions2(groupedOptions);
    }, [time]);



    useEffect(() => {
        getIP();
    }, []);
    return (
        <>
            <div className=''>
                {isExploding && <ConfettiExplosion force={0.8} duration={3000} particleCount={400} width={1600} />}
            </div>
            <div className="rounded-2xl border-[0.4px] md:px-6 p-4 md:py-5 border-orange-500 shadow-2xl">
                <div className='float-end'>
                    <i onClick={onClose} class="fa-solid fa-xmark"></i>
                </div>
                <div className="fs-5 py-2 fw-bold">Book your Live online Abacus class </div>
                <div className='text-gray-500 text-sm'>
                    Age Group 4-12 years only
                </div>

                <form 
                    onSubmit={handleSubmit}
                    className="flex text-sm flex-col gap-2 mt-2">
                    <input className="inputCss w-100 mt-2 py-2 " placeholder="Enter Student Name" name="name" type="text" required />
                    <div className=''>
                        <input className="inputCss  w-100 mt-2 py-2  " placeholder={"Enter Guardian's Name"} name="parentname" type="text" required />
                    </div>

                    <div className='w-full flex md:flex-row flex-col gap-2 '>
                        {/* <div className="col-12 col-lg-6"> */}
                            <input className="w-full mt-2 py-2 " placeholder="Enter Email Id" name="email" type="email" required />
                        {/* </div> */}
                        <PhoneInput
                            className=' w-full md:py-0  mt-4 mt-md-2 py-2  '
                            placeholder="Enter WhatsApp number" 
                            value={countryCodevalue}
                            defaultCountry={countryCode ? countryCode : null}
                            onChange={handlePhoneChange}
                            // international
                            required
                        />
                    </div>
                    <input className="w-100 inputCss  mt-2 py-2 " placeholder="Enter Your City" name="city" type="text" required />

                    <Select className='  mt-2' options={parentOptions} value={value2} placeholder="Select Student Age" onChange={changeHandler2} required />
                    {/* <Select className='w-full' options={classOptions} value={value3} placeholder="Select a Date for Class" onChange={changeHandler3} required /> */}
                    <Select
                        // className="form-control customDropdown"
                        className='mb-2 mt-2'
                        placeholder="Select A Date for Class"
                        name="demo_date"
                        options={options2}
                        onChange={changeHandler3}
                        // value={value3}
                        // styles={{ option: (provided, state) => ({ ...provided, color: state.isDisabled ? '#aeacac' : 'black' }) }}
                        isOptionDisabled={(option) => option.isDisabled}
                        required
                    />
                    <ReCAPTCHA
                        sitekey="6LdEAyAbAAAAAJW_ibc-uIp7JsrlEwXUd_cs1scy"
                        onChange={onChange}
                    />
                    {Captchaerror ? <span className='text-red-600'>Please Select Captcha</span> : null}
                    <span className=" text-gray-500  mt-2">By registering here, I agree to Mastermind Abacus <a className='text-blue-600' href='https://www.mastermindabacus.com/terms?_gl=1*y57x04*_up*MQ..'>Terms & Conditions</a> and <a className='text-blue-600 ' href='https://www.mastermindabacus.com/privacy-policy?_gl=1*16oj2r1*_up*MQ..'>Privacy Policy</a></span>
                    <button className="popup-btn btns btn-anim bg-orange-600 hover:bg-red hover:text-black border-[1px] hover:border-orange-600 rounded-lg text-sm px-4 py-3 mt-6 text-center font-semibold text-white ease-in-out duration-300 w-full hover:shadow-lg hover:shadow-orange-600/40">
                        BOOK A FREE DEMO CLASS
                    </button>
                </form>
            </div>
        </>
    )
}

export default BookclassModal