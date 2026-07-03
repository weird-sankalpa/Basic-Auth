import Link from "next/link";
import { redirect } from "next/navigation";
import { AuthForm } from "@/components/auth-form";
import { createClient } from "@/lib/supabase/server";

export default async function RegisterPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/");
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <AuthForm mode="register" />
      <Link
        href="/"
        className="mt-6 text-sm text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400"
      >
        Back to home
      </Link>
    </div>
  );
}
