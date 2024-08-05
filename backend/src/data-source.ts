import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

// export const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "test",
//     password: "test",
//     database: "test",
//     synchronize: true,
//     logging: false,
//     entities: [User],
//     migrations: [],
//     subscribers: [],
// })

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "cc",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})