import { Button } from "../ui/button";
import { Input } from "../ui/input";

function Settings() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-5 w-screen sm:w-[70vw] sm:justify-start">
      {/* CHANGE USERNAME */}
      <div>
        <h2 className="text-2xl font-bold mb-3">Change Username</h2>
        <form className="grid gap-3 w-[80vw] sm:w-[30vw]">
          <Input
            name="previousUsername"
            placeholder="Enter previous username"
          />
          <Input name="newUsername" placeholder="Enter new username" />
          <Button type="submit" className="cursor-pointer">
            Change Username
          </Button>
        </form>
      </div>

      {/* CHANGE PASSWORD */}
      <div>
        <h2 className="text-2xl font-bold mb-3">Change Password</h2>
        <form className="grid gap-3 w-[80vw] sm:w-[30vw]">
          <Input
            name="previousPassword"
            placeholder="Enter previous password"
          />
          <Input name="newPassword" placeholder="Enter new password" />
          <Button type="submit" className="cursor-pointer">
            Change Password
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Settings;
