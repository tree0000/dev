import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async() => {
    try {
        mongoose.connect(process.env.MONGODB_URL || '');
        console.log('MongoDB 연결 됨');
    }catch(error) {
        console.error('MongoDB 연결 안됨', error);
    }
}

export default connectDB