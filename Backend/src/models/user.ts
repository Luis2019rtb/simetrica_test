import { Schema, model } from 'mongoose';
import { user } from '../types';
import bcrypt from 'bcryptjs';

// User Blue print for mongo
const opts = {
    timestamps: {
        createdAt: 'createdDate',
        updatedAt: false
    },
    versionKey: false
};

const userSchema = new Schema<user>({
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: false, default: '' },
}, opts);

userSchema.pre('save', async function (next) {

    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        return next();
    } catch (e) {
        const error = (e as Error)
        return next(error);
    }
});

const userModel = model<user>('user', userSchema);

export { userModel }