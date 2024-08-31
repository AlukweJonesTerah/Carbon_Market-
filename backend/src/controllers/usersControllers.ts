import { User } from "../entity/User";
import { AppDataSource } from "../data-source";

const userRepository = AppDataSource.getRepository(User)

// const user = new User()

async function createUser(firstName:string, lastName:string, email:string, phNo:number,
    password:string, role:string
){
    const user = new User()
    user.firstName
    user.lastName
    user.email
    user.phNo
    user.password
    user.role

    await userRepository.save(user)
    console.log("User has been created!")
}

async function updateUser(id: number, updatedData: Partial<User>){
    const user = await userRepository.findOneBy({id})
    if (user){
        Object.assign(user, updatedData)
        await userRepository.save(user)
        console.log("User has been updated")
    }else{
        console.log("User not found")
    }
}

async function deleteUser(id: number){
    const user =  await userRepository.findOneBy({id})
    if (user){
        await userRepository.remove(user)
        console.log("User has been deleted")
    }else{
        console.log("User not found")
    }
}

async function readUser(id: number) {
    const user = await userRepository.findOneBy({id})
    if (user){
        console.log("User found:", user)
        return user
    }else{
        console.log("User not found")
        return null
    }
}
