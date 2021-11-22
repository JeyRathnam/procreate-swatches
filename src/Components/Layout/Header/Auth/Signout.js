import { useNavigate } from "react-router";
import { useAuth } from "../../../../Contexts/Auth";
import { StyledAuthButton } from "./SignIn";

export default function SignOut() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/");
  }
  return <StyledAuthButton onClick={handleSignOut}>Signout</StyledAuthButton>;
}
