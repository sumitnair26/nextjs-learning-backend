import { NextRequest } from "@/node_modules/next/server"

export function GET() {
    return Response.json({
        email:"sumit.nair26@gmail.com",
        name:"Sumit Nair"
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(body);
    return Response.json({
        message: "You are logged in"
    })
}