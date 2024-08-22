import { React, useState, useEffect } from 'react';
import Select from 'react-select';
import ConfettiExplosion from 'react-confetti-explosion';
import axios from "axios";
// import '@/styles/landingstyle/index.css';
// import '@/styles/landingstyle/output.css';
import ReCAPTCHA from "react-google-recaptcha";
// import { useLocation } from 'react-router-dom/cjs/react-router-dom';

const Franchise_inquiry_form = (props) => {

    const [isExploding, setIsExploding] = useState(false);
    const [value2, setValue2] = useState('');
    const [value, setValue] = useState('');
    const [Captcha, setCaptcha] = useState('');
    const [Captchaerror, setCaptchaerror] = useState(false)
    const [country_list, setcountry_list] = useState('');
    const [state_list, setstate_list] = useState();
    const [selectedCountry, setSelectedCountry] = useState('');
    const [defaultVal, setdefaultVal] = useState('')

    // const location = useLocation();
    // const { state } = location;
    // console.log('data  hhh', state);
    const { message, id, onClose } = props

    const getData = async (ip) => {
        try {
            const res = await axios.get(`https://tt.mastermindschool.co.in/api/get_cournty_ip?ip=${ip}`);
            // console.log(res.data.data)
            getcountry_list(res.data.data)
        } catch (error) {
            console.error("An error occurred while fetching data:", error);
        }
    };
    const getIP = async () => {
        const res = await axios.get("https://api.bigdatacloud.net/data/client-ip");
        getData(res.data.ipString)
    };


    const getcountry_list = async (value) => {
        const res = await axios.get("https://tt.mastermindschool.co.in/api/country_list");
        setcountry_list(res.data.data)
        const matchedCountry = res.data.data.find(country => country.digiit3code === value);
        if (matchedCountry) {
            setSelectedCountry(matchedCountry);
        }
    };
    // console.log(selectedCountry)

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
            setdefaultVal(selectedOption)
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
        console.log('dddd')
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
            remark: event.target.remark.value
        };
        // console.log(formData)
        if (Captcha) {
            try {
                const response = await axios.get(`https://tt.mastermindschool.co.in/api/post_franchise_inquiry_data?name=${formData.Name}&email_id=${formData.email}&mobile_no=${formData.phoneNumber}&city=${formData.city}&country_id=${formData.countryid}&state_id=${formData.stateId}&remark=${formData.remark}&product_id=${id ? id : '3'}`);
                const result = response.data
                // console.log('Success data:', result);
                if (result.status === true) {
                    burst();
                    setTimeout(() => {
                        window.location.replace('/inquiry_submit_on_franchise_offline' );
                    }, 3000);

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
    //  console.log('hhhh' + typeof(defaultVal))

    useEffect(() => {
        getIP();
    },[]);
    return (
        <>
            <div className='flex items-center justify-center'>
                {isExploding && <ConfettiExplosion force={0.8} duration={3000} particleCount={400} width={1600} />}
            </div>
            <div className="rounded-2xl border-[0.4px] md:px-6 p-4 md:py-5 border-orange-500 shadow-2xl bg-white">
            <div className='float-end'>
                <i onClick={onClose} class="fa-solid fa-xmark"></i>
                </div>
                <div className="text-xl py-2 font-bold">{message ? message : 'FRANCHISE INQUIRY'} </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex text-sm flex-col gap-2 mt-2">
                    <input className="w-full mt-2 py-2 " placeholder="Enter Name" name="name" type="text" required />

                    <div className='w-full flex md:flex-row flex-col gap-2'>
                        <input className="w-full py-2 " placeholder="Enter Email Id" name="email" type="email" required />
                        <input className="w-full py-2 " placeholder="Enter Contact No" name="number" type="number" required />
                    </div>
                    <div className='w-full flex md:flex-row flex-col gap-2 mt-2'>
                        <Select className='w-full' options={CountryOptions} placeholder="Select Country" value={defaultVal} onChange={get_state_listData} required />
                        <Select className='w-full' options={StateOptions} placeholder="Select State" onChange={changeHandler2} required />
                    </div>
                    <input className="w-full py-2 " placeholder="Enter Your City" name="city" type="text" required />
                    <div className="col-md-12 col-sm-12 mt-2">
                        <div className="form-group">
                            <textarea cols="5" rows="1" placeholder='Your Remarks/Comments' name='remark' className="textarea form-control" required></textarea>
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

export default Franchise_inquiry_form;