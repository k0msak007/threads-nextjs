import PostThread from "@/components/forms/PostThread";
import { fetchUser } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function Page() {
  const user = await currentUser();

  if(!user) return null;

  var userInfo = await fetchUser(user.id)

  userInfo = JSON.parse(JSON.stringify(userInfo))

  if(!userInfo?.onboarded) redirect("/onboarded")

  return (
    <>
      <h1 className="head-text">Create Thread</h1>

      <PostThread userId={userInfo._id} />
    </>
  );
}

export default Page;
