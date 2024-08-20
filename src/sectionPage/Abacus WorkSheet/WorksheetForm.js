import React, { useCallback, useState } from 'react';


const WorksheetForm = () => {
    const [No_of, setNo_of] = useState(true);
    const [Multiplier, setMultiplier] = useState(false);
    const [Dividend, setDividend] = useState(false);
    const [value, setvalue] = useState('25');
    const [value2, setvalue2] = useState('2');
    const [value3, setvalue3] = useState('1');
    const [value4, setvalue4] = useState('1');
    const [value5, setvalue5] = useState('1');
    const [value6, setvalue6] = useState('2');
    const [value7, setvalue7] = useState('1');
    const [value8, setvalue8] = useState(null);
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [sumtype, setsumtype] = useState('1');
    const [suc, setsuc] = useState(false);
    const [ShowError, setShowError] = useState(false);

    const HandleOperatorsOnchange = useCallback((event) => {

        event.preventDefault();
        const Opr = event.target.value;
        setsumtype(Opr)
        switch (Opr) {
            case '1':
            case '2':
                setNo_of(true);
                setMultiplier(false);
                setDividend(false);
                break;
            case '3':
                setNo_of(false);
                setMultiplier(true);
                setDividend(false);
                break;
            case '4':
                setNo_of(false);
                setMultiplier(false);
                setDividend(true);
                break;
            default:
                setNo_of(true);
                setMultiplier(false);
                setDividend(false);
        }
    }, []);

    const onChange = (e) => {
        setvalue(e.target.value)
    };
    const onChange2 = (e) => {
        setvalue2(e.target.value)
    }
    const onChange3 = (e) => {
        setvalue3(e.target.value)
    }
    const onChange4 = (e) => {
        setvalue4(e.target.value)
    }
    const onChange5 = (e) => {
        setvalue5(e.target.value)
    }
    const onChange6 = (e) => {
        setvalue6(e.target.value)
    }
    const onChange7 = (e) => {
        setvalue7(e.target.value)
    }
    const onChange8 = (e) => {
        setvalue8(e.target.value)
    }



    const pdfUrla = `https://tt.mastermindschool.co.in/api/get_worksheet_link?no_of_questions=${value}&no_of_digits=${value3}&no_of_rows=${value2}&no_of_rows_multiplicand=${value4}&no_of_rows_multiplier=${value5}&sum_type=${sumtype}&no_of_rows_dividend=${value6}&no_of_rows_divisor=${value7}&user_name=${name}&user_email=${email}&user_type=${value8}`
 
    const downloadPdf = async (event) => {
        event.preventDefault();
        const pdfUrl = pdfUrla;

        if (name && email && value8) {
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.setAttribute('download', 'file.pdf');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setsuc(true)
            setShowError(false)
        } else {
            setShowError(true)
        }
    };


    return (
        <div className="rs-categories style1 pt-94 pb-70 md-pt-64 md-pb-40 back2-color">
            <div className="container white-bg p-5 pt-4 pb-4 section-shadow back-color" >
                <form className='row mt-3 mb-1'>
                    <div className="mb-3 col-lg-3">
                        <label for="disabledSelect" className="form-label">Operators</label>
                        <select id="disabledSelect" className="form-select p-3" name='Operators' onChange={HandleOperatorsOnchange}>
                            <option value="1" >Addition Only</option>
                            <option value="2" >Addition &amp; Subtraction</option>
                            <option value="3" >Multiplication</option>
                            <option value="4" >Division</option>
                        </select>
                    </div>
                    <div className="mb-3 col-lg-3">
                        <label for="disabledSelect" className="form-label">No. Of Questions</label>
                        <select id="disabledSelect" className="form-select p-3" onChange={onChange}>
                            <option value="25" >25</option>
                            <option value="50">50</option>
                            <option value="100" >100</option>
                            <option value="150">150</option>
                            <option value="200" >200</option>
                        </select>
                    </div>
                    {No_of ?
                        <>
                            <div className="mb-3 col-lg-3">
                                <label for="disabledSelect" className="form-label">No. of Rows</label>
                                <select id="disabledSelect" className="form-select p-3" onChange={onChange2}>
                                    <option value="2">2</option>
                                    <option value="3" >3</option>
                                    <option value="4" >4</option>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15" >15</option>
                                    <option value="20">20</option>
                                    <option value="25" >25</option>
                                </select>
                            </div>
                            <div className="mb-3 col-lg-3">
                                <label for="disabledSelect" className="form-label">No. of Digits</label>
                                <select id="disabledSelect" className="form-select p-3" onChange={onChange3}>
                                    <option value="1" >1</option>
                                    <option value="2" >2</option>
                                    <option value="3" >3</option>
                                    <option value="4" >4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </> : null
                    }
                    {Multiplier ?
                        <>
                            <div className="mb-3 col-lg-3">
                                <label for="disabledSelect" className="form-label">Multiplicand digits:</label>
                                <select id="disabledSelect" className="form-select p-3" onChange={onChange4}>
                                    <option value="1" >1</option>
                                    <option value="2">2</option>
                                    <option value="3" >3</option>
                                    <option value="4" >4</option>
                                    <option value="5" >5</option>
                                </select>
                            </div>
                            <div className="mb-3 col-lg-3">
                                <label for="disabledSelect" className="form-label">Multiplier digits:</label>
                                <select id="disabledSelect" className="form-select p-3" onChange={onChange5}>
                                    <option value="1" >1</option>
                                    <option value="2" >2</option>
                                    <option value="3" >3</option>
                                </select>
                            </div>
                        </> : null
                    }
                    {Dividend ?
                        <>
                            <div className="mb-3 col-lg-3">
                                <label for="inputState" className="form-label">Dividend digits:</label>
                                <select id="disabledSelect" className="form-select p-3" onChange={onChange6}>
                                    <option value="2">2</option>
                                    <option value="3" >3</option>
                                    <option value="4" >4</option>
                                    <option value="5" >5</option>
                                </select>
                            </div>
                            <div className="mb-3 col-lg-3">
                                <label for="inputState" className="form-label">Divisor digits:</label>
                                <select id="disabledSelect" className="form-select p-3" onChange={onChange7}>
                                    <option value="1" >1</option>
                                    <option value="2" >2</option>
                                    <option value="3" >3</option>
                                </select>
                            </div>
                        </> : null
                    }

                    {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                </form>

                <form className='row mt-3 mb-3 text-center' >
                    <div className="mb-3 col-lg-4">
                        {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                        <input type="text" className="form-control p-3" aria-describedby="emailHelp" placeholder='Enter Name' onChange={(e) => { setname(e.target.value) }} required />
                        {/* <div id="emailHelp" className="form-text p-3">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3 col-lg-4">
                        {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
                        <input type="email" className="form-control p-3" id="exampleInputEmail1" placeholder='Enter Email Id' onChange={(e) => { setemail(e.target.value) }} required />
                    </div>
                    <div className="mb-3 col-lg-4">
                        {/* <label for="disabledSelect" className="form-label">Disabled select menu</label> */}
                        <select id="disabledSelect" className="form-select p-3" onChange={onChange8} required>
                            <option>Select User Type</option>
                            <option value='1'>Teacher</option>
                            <option value='2'>Student</option>

                        </select>
                    </div>
                    {ShowError ? <div className='alertText' > please fill all required fields. </div> : null}
                    <button onClick={downloadPdf} className="rounded readon" >Generate Worksheet</button>
                    {/* <div className="btn-part " >
                        <div className="readon2" onClick={downloadPdf} style={{ padding: "10px", marginTop: "20px" }}>Generate Worksheet</div>
                    </div> */}
                </form>
                {suc ? <div className='bg-success text-light p-1'> The download of your required sheet along with the Answer key is in progress. Please wait. Once done you can take a print.</div> : null}


            </div>
        </div>
    );
}

export default WorksheetForm;