"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useActionState, useState } from "react";
import { useFormState } from "react-dom";
import { BsApple, BsGoogle } from "react-icons/bs";
import FormModal from "./auth-form";
import { createUser } from "@/lib/actions/user.actions";

const Register = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [state, action] = useActionState(createUser, undefined);
  return (
    <FormModal
      isOpen={show}
      onClose={onClose}
      title="Sign Up"
      buttonText="Register Account"
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
      <div className="">
        <form action={action} className="space-y-2">
          <>
            <Input
              name="fname"
              placeholder="First name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {state?.errors?.fname && (
              <p className="text-red-500">{state.errors.fname}</p>
            )}
          </>
          <>
            <Input
              id="lname"
              name="lname"
              placeholder="Last name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {state?.errors?.fname && (
              <p className="text-red-500">{state.errors.fname}</p>
            )}
          </>
          <>
            <Input
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {state?.errors?.fname && (
              <p className="text-red-500">{state.errors.fname}</p>
            )}
          </>
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
              <p className="text-red-500">{state.errors.password}</p>
            )}
          </>
          <Button type="submit">Register Account </Button>
        </form>
      </div>
    </FormModal>
  );
};

export default Register;
