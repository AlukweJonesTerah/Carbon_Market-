import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import bcrypt from "bcrypt";


async function createUser(req: Request, res: Response){
    const { firstName, lastName, email, phNo, password, role } = req.body;
    if (!firstName ||!lastName ||!email ||!phNo ||!password ||!role) {
        return res.status(400).json({ message: "All fields are required" });
    }
    //blockchain account & functionality 
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User();
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.email = email;
        newUser.phNo = phNo;
        newUser.password = hashedPassword;
        newUser.role = role;

        await AppDataSource.manager.save(newUser);
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating user" });
    }
}

async function updateUserById(userId: any, req: Request, res: Response) {
    const user = await AppDataSource.manager.findOne(User, userId);
    if (!user) {
        return { message: "User not found" };
    }

    const { firstName, lastName, email, phNo, password, role } = req.body;
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (email) user.email = email;
    if (phNo) user.phNo = phNo;
    if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
    }
    if (role) user.role = role;

    await AppDataSource.manager.save(user);
    return { message: "User updated successfully", user };
}


async function deleteUserById(userId: any, res: Response, req: Request){
    const user = await AppDataSource.manager.findOne(User, userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    await AppDataSource.manager.remove(user);
    return res.status(200).json({ message: "User deleted successfully" });
}