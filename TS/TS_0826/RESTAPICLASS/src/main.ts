import express, { NextFunction, Request, Response, Router } from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { Customer, Product } from './types.js';  
import databaseA from './database.js';
import CustomerModel from './customer.js';
import ProductModel from './customer.js';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import jwt, { decode, VerifyErrors } from 'jsonwebtoken';
import connectDB from './database.js';
import path from 'path';


dotenv.config();

connectDB();
const sec = process.env.TOKEN_SECRET as string;
const generateAccessToken = (username: any) => {
    return jwt.sign({ username }, sec, { expiresIn: '600s' });
};

const app = express();
const router = Router(); 
const PORT = 8001;


app.use(express.json());
const corsOption = {
    origin: '*', 
    credentials: true 
};
app.use(cors(corsOption));

//html
app.use(express.static(path.join(__dirname, '../public')));

// 기본 라우터 설정
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/main.html'));
});


// JWT 인증 엔드포인트
router.post('/api/v1/auth', (req, res) => {
    const token = generateAccessToken({username: req.body.username});
    res.json({ token });
});

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ msg: 'No token provided' });
    }

    jwt.verify(token, sec, (err: VerifyErrors | null, user: any) => {
        if (err) {
            return res.status(403).json({ msg: 'Forbidden', error: err.message });
        }
        //(req as any).user = user;
        (req as any).user = decode;
    });
    next(); 
};

app.get('/', (req, res) => {
    res.send('Hello World');
});

const ranId = () =>{
    return Math.floor(Math.random()*1000);
}
// 고객 목록 조회
router.get("/api/v1/customers", authenticateToken, async (req, res) => {
    try {
        const customers = await CustomerModel.find();
        res.json(customers);
    } catch (error) {
        console.error('고객DB 받아오지 못함', error);
        res.status(500).json({ error: '조회 오류' });
    }
});

// 특정 고객 조회
router.get("/api/v1/customers/:id", authenticateToken, async (req, res) => {
    try {
        const customer = await CustomerModel.findOne({ id: req.params.id });
        if (!customer) {
            res.sendStatus(404);
        } else {
            res.json(customer);
        }
    } catch (error) {
        console.error('고객DB 조회 실패', error);
        res.status(500).json({ error: '조회 오류' });
    }    
});

// 고객 생성
router.post("/api/v1/customers", async (req, res) => {
    console.log('POST /api/v1/customers 요청이 도착했습니다.');
    const customer: Omit<Customer, 'id'> = req.body;

    const newCustomer = new CustomerModel({
        id: uuidv4(),
        name: customer.name,
        address: customer.address,
        email: customer.email,
        description: customer.description || ''
    });

    try {
        const savedCustomer = await newCustomer.save();
        res.status(201).json(savedCustomer);
    } catch (error) {
        console.error('고객DB 저장 실패', error);
        res.status(500).json({ error: '고객DB 저장 실패함' });
    }
});

// 고객 업데이트
router.put("/api/v1/customers/:id", async (req, res) => {
    try {
        const customer = await CustomerModel.findOneAndUpdate(
            { id: req.params.id }, 
            req.body, 
            { new: true }
        );
        if (!customer) {
            return res.sendStatus(404);
        }
        res.json(customer);
    } catch (error) {
        console.error('고객DB 수정 오류', error);
        res.status(500).json({ error: '고객DB 수정 오류' });
    }
});

// 고객 삭제
router.delete("/api/v1/customers/:id", async (req, res) => {
    try {
        const result = await CustomerModel.findOneAndDelete({ id: req.params.id });
        if (!result) {
            res.sendStatus(404);
        } else {
            res.status(200).json({ msg: '고객DB 삭제 완료' });
        }
    } catch (error) {
        console.error('고객DB 삭제 실패', error);
        res.status(500).json({ error: '고객DB 삭제 오류' });
    }
});

// 제품 목록 조회
router.get("/api/v1/products", async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.json(products);
    } catch (error) {
        console.error('제품DB 받아오지 못함', error);
        res.status(500).json({ error: '조회 오류' });
    }
});

// 특정 제품 조회
router.get("/api/v1/products/:id", async (req, res) => {
    try {
        const product = await ProductModel.findOne({ id: req.params.id });
        if (!product) {
            res.sendStatus(404);
        } else {
            res.json(product);
        }
    } catch (error) {
        console.error('제품DB 조회 실패', error);
        res.status(500).json({ error: '조회 오류' });
    }    
});

// 제품 생성
router.post("/api/v1/products", async (req, res) => {
    const product: Omit<Product, 'id'> = req.body;

    const newProduct = new ProductModel({
        id:uuidv4(),
        name: product.name,
        description: product.description,
        price: product.price
    });

    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error('제품DB 저장 실패', error);
        res.status(500).json({ error: '제품DB 저장 실패함' });
    }
});

// 제품 업데이트
router.put("/api/v1/products/:id", async (req, res) => {
    try {
        const product = await ProductModel.findOneAndUpdate(
            { id: req.params.id }, 
            req.body, 
            { new: true }
        );
        if (!product) {
            res.sendStatus(404);
        } else {
            res.json(product);
        }
    } catch (error) {
        console.error('제품DB 수정 오류', error);
        res.status(500).json({ error: '제품DB 수정 오류' });
    }
});

// 제품 삭제
router.delete("/api/v1/products/:id", async (req, res) => {
    try {
        const result = await ProductModel.findOneAndDelete({ id: req.params.id });
            res.status(200).json({ msg: '제품DB 삭제 완료' });
    }catch(error) {
        console.error('제품DB 삭제 실패', error);
        res.status(500).json({ error: '제품DB 삭제 오류' });
    }
});

app.use('/api/v1', router); 
app.listen(PORT, () => {
    console.log(`localhost:${PORT}에서 실행`);
});

//DB
connectDB();
mongoose.connect(process.env.MONGODB_URL || '')
.then(() => console.log('mongodb 연결 완료')) 
.catch(err => {
    console.error('mongodb 연결 실패', err)
})