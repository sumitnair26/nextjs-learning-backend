//import axios from "axios";
import { PrismaClient } from "@/node_modules/.prisma/client/index";
const client = new PrismaClient();

async function getUserDetails() {
  // const response = await axios.get("http://localhost:3003/api/user")
	// return response.data;

  try {
    const user = await client.user.findFirst();
    return {
      email:user?.username,
      name:user?.password
    }

  } catch (error) {
      console.log(error);
  }

}

export default async function Home() {
  const getUserDetail = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
            Name : {getUserDetail.email}
            <div>
            Email : {getUserDetail.name}
            </div>
        </div>
            
      </div>
    </div>
      );
}