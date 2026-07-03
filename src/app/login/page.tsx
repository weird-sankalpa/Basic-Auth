import Link from "next/link";
import { redirect } from "next/navigation";
import { AuthForm } from "@/components/auth-form";
import { createClient } from "@/lib/supabase/server";

type LoginPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/");
  }

  const params = await searchParams;
  const authError = params.error === "auth";

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      {authError && (
        <p className="mb-4 max-w-md rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950/50 dark:text-red-300">
          Authentication failed. Please try signing in again.
        </p>
      )}
      <AuthForm mode="login" />
      <Link
        href="/"
        className="mt-6 text-sm text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400"
      >
        Back to home
      </Link>
    </div>
  );
}
