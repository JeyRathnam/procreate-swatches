import { supabase } from "../Supabase/supabaseClient";

async function signInWithGoogle() {
  const { user, session, error } = await supabase.auth.signIn({
    provider: "google",
  });
}

export default function Login() {
  return (
    <div>
      <button onClick={() => signInWithGoogle()}>Google</button>
    </div>
  );
}
