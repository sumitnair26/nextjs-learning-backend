import axios from "axios";

async function getUserDetails() {
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
	return response.data;
}

export default async function Home() {
  const getUserDetail = await getUserDetails();
  return (
    <div>
      Hi there <br />
      <div>
          {getUserDetail.email}
      </div>
      <div> 
          {getUserDetail.name}
      </div>

    </div>
      );
}