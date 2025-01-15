"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useActionState, useState } from "react";
import { BsApple, BsGoogle } from "react-icons/bs";
import FormModal from "./auth-form";
import { login } from "@/lib/actions/user.actions";
import Loader from "@/components/general/Loader";
import { useUserStore } from "@/stores/user-store";
import { useRouter } from "next/router";

const Login = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
  const { user, update } = useUserStore();
  const [state, action, isPending] = useActionState(login, undefined);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await update(state?.data); // Wait for the update to complete
      if (user) {
        onClose();
        router.push("/landing");
      }
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  return (
    <FormModal
      isOpen={show}
      onClose={onClose}
      title="Sign In"
      buttonText="Login"
    >
      <div className="grid grid-cols-2 gap-x-6">
        <span className="rounded-full border border-outline hover:bg-outline hover:cursor-pointer p-2 text-sm flex flex-center gap-x-4">
          <BsGoogle />
          Sign in with Google
        </span>
        <span className="rounded-full border border-outline hover:bg-outline hover:cursor-pointer p-2 text-sm flex flex-center gap-x-4">
          <BsApple />
          Sign in with Apple
        </span>
      </div>
      <span className="flex flex-center text-lg font-semibold italic">OR</span>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="space-y-2"
        >
          <>
            <Input
              name="email"
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {state?.errors?.email && (
              <p className="text-red-500">{state.errors.email}</p>
            )}
          </>
          <>
            <Input
              name="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {state?.errors?.email && (
              <p className="text-red-500">{state.errors.email}</p>
            )}
          </>
          <Button type="submit" className="bg-accent text-white">
            Login
          </Button>
          {isPending && <Loader />}
        </form>
      </div>
    </FormModal>
  );
};

export default Login;

