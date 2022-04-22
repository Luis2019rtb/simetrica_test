import { body } from 'express-validator';
// User Schema for validations
export const UserSchema = [

    body("email").isEmail().exists().trim(),
    body("firstName").isString().exists().trim(),
    body("password").exists().isLength({ min: 5 }),
    body("role").isString().trim().optional({ nullable: true })
    
]
