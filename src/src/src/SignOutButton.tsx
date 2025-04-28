import { useSignOut } from "@convex-dev/auth";

export function SignOutButton() {
  const signOut = useSignOut();
  return (
    <button
      onClick={() => signOut()}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Sign Out
    </button>
  );
}
