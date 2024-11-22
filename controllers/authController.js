const UserModle = require("../modules/UserModel")
const jwt = require('jsonwebtoken')



const register = async (req, res) => {
    try {
        const { name, email, password, cpassword, contect, address, role, business_category, business_name, business_address, send_request, received_request } = req.body
        //   console.log(req.body);
        if (!name || !email || !password || !cpassword || !contect || !address || !business_category || !business_name | !business_address) {
            return res.status(400).send({
                success: false,
                message: "Please fill all the fields"
            })
        }
        if (password !== cpassword) {
            return res.status(400).send({
                success: false,
                message: "Password and Confirm Password doesn't match"
            })
        }
        const userExist = await UserModle.findOne({ email: email })
        if (userExist) {
            return res.status(400).send({
                success: false,
                message: "Email already exist"
            })
        }
        let user = await UserModle.create({
            name: name,
            email: email,
            password: password,
            cpassword: cpassword,
            contect: contect,
            address: address,
            role: role,
            business_category: business_category,
            business_name: business_name,
            business_address: business_address,
            send_request: send_request,
            received_request: received_request

        })
        return res.status(200).send({
            success: true,
            message: "User register successfully",
            user: user
        })

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error,
        })

    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "Email and Password are required"
            })
        }

        const user = await UserModle.findOne({ email: email })
        if (!user || user.password != password) {
            return res.status(400).json({
                success: false,
                message: "Invalid Email or Password"
            })
        }
        const token = await jwt.sign({ user: user }, "secret-key",
            {
                expiresIn: '24h'
            }
        );
        res.cookie('auth', token);


        return res.status(200).send({
            success: true,
            message: "User login successfully",
            token: token,
            user
        })

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error,
        })
    }
}

const user = async (req, res) => {
    try {
        const user = await UserModle.find({})
        return res.status(200).send({
            success: true,
            message: "User Fetch successfully",
            user: user
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error,
        })
    }

}
const logout = async (req, res) => {
    try {
        res.clearCookie('auth');
        return res.status(200).send({
            success: true,
            message: "User logout successfully",
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error,
        })
    }

}
module.exports = { register, login, user,logout }