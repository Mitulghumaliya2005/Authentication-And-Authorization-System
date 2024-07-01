const getOTP = (req, res) => {
    res.json({
        value: true,
    })
}

const setOTP = (req, res) => {
    res.json({
        message: "SetOTP",
    })
}


export default getOTP 
export {setOTP}