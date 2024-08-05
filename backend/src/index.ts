import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import {bcrypt} from "bcrypt"

// async function main(){
//     const user = new User()
//     try {
//         const hashPassword = await bcrypt.hash(user.password, 10)
//     } catch (error) {
//         console.error(error)
//     }
// }



AppDataSource.initialize().then(async () => {
    // main()
    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.email = "example@gamil.com",
    user.phNo = 745983042
    user.password = "1234"
    user.role = "industry"

    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")


}).catch(error => console.log(error))

