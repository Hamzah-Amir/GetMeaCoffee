"use server"
import { prisma } from "@/lib/prisma"

export const getUser = async (id) => {
    let user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })
    return user
}

export const updateProfile = async (data, oldUsername) => {
    let nData = data
    console.log("nData", nData)
    if (oldUsername !== nData.username){
        let u = await prisma.user.findUnique({ where : { username: nData.username }})
        if (u) {
            return {error: "Username Already Exist"}
        }
    }
    await prisma.user.update({ where: {email: nData.email},
         data: nData
    })
}