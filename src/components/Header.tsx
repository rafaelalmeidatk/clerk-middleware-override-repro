import { SignedIn, SignedOut, UserButton, useSignIn } from "@clerk/nextjs";

function Header() {
  const { signIn } = useSignIn();

  const handleGoogleLogin = async () => {
    const redirectUrl =
      process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

    await signIn?.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl,
      redirectUrlComplete: redirectUrl,
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
