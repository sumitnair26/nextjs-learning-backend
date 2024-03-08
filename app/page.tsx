import axios from "axios";

async function getUserDetails() {
  const response = await axios.get("http://localhost:3002/api/user")
	return response.data;
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