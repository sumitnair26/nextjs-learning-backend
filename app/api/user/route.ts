import { NextRequest } from "@/node_modules/next/server"
import { PrismaClient } from "@/node_modules/.prisma/client/index";
const client = new PrismaClient();

export function GET() {
    return Response.json({
        email:"sumit.nair26@gmail.com",
        name:"Sumit Nair"
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(body);
    await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })
    return Response.json({
        message: "You are logged in"
    })
} 