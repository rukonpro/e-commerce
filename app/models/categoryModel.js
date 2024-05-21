// models/Category.js
import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    photo: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
    }
}, {
    timestamps: true,
    timeseries: true
});

export default mongoose.models.Category || mongoose.model('Category', CategorySchema);