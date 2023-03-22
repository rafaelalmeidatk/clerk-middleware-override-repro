import { SignedIn, SignedOut, UserButton, useSignIn } from "@clerk/nextjs";

function Header() {
  const { signIn } = useSignIn();

  const handleGoogleLogin = async () => {
    await signIn?.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "http://localhost:3000",
      redirectUrlComplete: "http://localhost:3000",
    });
  };

  return (
    <header
      style={{ display: "flex", justifyContent: "space-between", padding: 20 }}
    >
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <button onClick={handleGoogleLogin}>Sign in with Google</button>
      </SignedOut>
    </header>
  );
}

export default Header;
