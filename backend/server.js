const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(cors());

// --- 1. FILE UPLOAD SETUP ---
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// --- 2. CONNECT TO MONGODB ---
mongoose.connect('mongodb://localhost:27017/pethomedb')
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.error("❌ Connection error:", err));

// --- 3. SCHEMAS ---
const petSchema = new mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    breed: String,
    vaccinated: String,
    neutered: String,
    temperament: String,
    type: String,
    description: String,
    imageUrl: String
});

const adoptionSchema = new mongoose.Schema({
    petId: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId,
    petName: String,
    adopterName: String,
    email: String,
    phone: String,
    reason: String,
    status: { type: String, default: 'pending' },
    date: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' }
});

const Pet = mongoose.model('Pet', petSchema, 'pets');
const Adoption = mongoose.model('Adoption', adoptionSchema, 'adoption');
const User = mongoose.model('User', userSchema, 'users');

// --- 4. ROUTES ---

// LOGIN
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (user) {
            res.json({
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// REGISTER
app.post('/api/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "Email already exists" });
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ message: "Registration failed" });
    }
});

// ADD PET (ADMIN)
app.post('/api/pets', upload.single('image'), async (req, res) => {
    try {
        const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
        const newPet = new Pet({ ...req.body, imageUrl });
        await newPet.save();
        res.status(201).json({ message: "Pet added successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error saving pet" });
    }
});

// GET ALL PETS
app.get('/api/pets', async (req, res) => {
    const pets = await Pet.find();
    res.json(pets);
});

// GET SINGLE PET
app.get('/api/pets/:id', async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);
        pet ? res.json(pet) : res.status(404).send("Pet not found");
    } catch (err) {
        res.status(500).send("Server Error");
    }
});

// SUBMIT ADOPTION
app.post('/api/adoption', async (req, res) => {
    try {
        const newApp = new Adoption(req.body);
        await newApp.save();
        res.status(201).json({ message: "Adoption request sent" });
    } catch (err) {
        res.status(400).json({ message: "Adoption request failed" });
    }
});

// GET ALL ADOPTIONS (ADMIN)
app.get('/api/adoptions', async (req, res) => {
    try {
        const adoptions = await Adoption.find().sort({ date: -1 });
        res.json(adoptions);
    } catch (err) {
        res.status(500).json({ message: "Error fetching requests" });
    }
});

// --- 5. START SERVER ---
app.listen(5000, () => {
    console.log("🚀 Server running on http://localhost:5000");
});