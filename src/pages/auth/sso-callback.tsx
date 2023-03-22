import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const redirectUrl = "/";

  return (
    <div>
      {router.isReady && (
        <AuthenticateWithRedirectCallback
          afterSignInUrl={redirectUrl}
          afterSignUpUrl={redirectUrl}
        />
      )}

      <div>Loading...</div>
    </div>
  );
}
