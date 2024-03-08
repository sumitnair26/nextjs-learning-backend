import { NextRequest } from "@/node_modules/next/server"
import { PrismaClient } from "@/node_modules/.prisma/client/index";
const client = new PrismaClient();

// export async function GET() {
//     const user = await client.user.findFirst();
//     return Response.json({
//         email:user?.username,
//         name:user?.password
//     })
// }

export async function POST(req: NextRequest) {
    const body = await req.json();
   try {
        await client.user.create({
            data: {
                username: body.username,
                password: body.password
            }
        })
        return Response.json({
            message: "User Added"
        })
   } catch (error) {
        return Response.json({
            message: "Error Something went wrong"
        },{
            status:411
        })
   }
} 