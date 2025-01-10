"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useActionState, useState } from "react";
import { useFormState } from "react-dom";
import { BsApple, BsGoogle } from "react-icons/bs";
import FormModal from "./auth-form";
import { createUser } from "@/lib/actions/user.actions";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const initial = {
  fname: "",
  lname: "",
  gender: "",
  dob: "",
  email: "",
  password: "",
  country: "",
  role: "",
};

const Register = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  const [value, setValue] = useState(initial);
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
              value={value.fname}
              onChange={(e) => setValue({ ...value, fname: e.target.value })}
            />
            {state?.errors?.fname && (
              <p className="text-red-500">{state.errors.fname}</p>
            )}
          </>
          <>
            <Input
              name="lname"
              placeholder="Last name"
              value={value.lname}
              onChange={(e) => setValue({ ...value, lname: e.target.value })}
            />
            {state?.errors?.lname && (
              <p className="text-red-500">{state.errors.lname}</p>
            )}
          </>
          <>
            <Input
              name="dob"
              type="date"
              placeholder="Date of Birth"
              value={value.dob}
              onChange={(e) => setValue({ ...value, dob: e.target.value })}
            />
            {state?.errors?.lname && (
              <p className="text-red-500">{state.errors.dob}</p>
            )}
          </>
          <>
            <RadioGroup
              defaultValue="male"
              className="flex mt-2 gap-x-10"
              onValueChange={(choice) => {
                setValue({ ...value, gender: choice });
              }}
              name="gender"
            >
              <p className="">Gender</p>
              <span className="flex items-center space-x-2 ">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Male</Label>
              </span>
              <span className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Female</Label>
              </span>
            </RadioGroup>
            {state?.errors?.gender && (
              <p className="text-sm text-red-500">{state.errors.gender}</p>
            )}
          </>
          <>
            <Select
              onValueChange={(choice) => setValue({ ...value, country: choice })}
              name="country"
            >
              <SelectTrigger className="">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="ghana">Ghana</SelectItem>
                <SelectItem value="usa">United States</SelectItem>
                <SelectItem value="India">India</SelectItem>
                <SelectItem value="egypt">Egypt</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="china">China</SelectItem>
              </SelectContent>
            </Select>

            {state?.errors?.role && (
              <p className="text-sm text-red-500">{state.errors.role}</p>
            )}
          </>
          <>
            <Select
              onValueChange={(choice) => setValue({ ...value, role: choice })}
              name="role"
            >
              <SelectTrigger className="">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="patient">Patient</SelectItem>
                <SelectItem value="doctor">Doctor</SelectItem>
                <SelectItem value="pharmacyAdmin">
                  Pharmacy Administrator
                </SelectItem>
              </SelectContent>
            </Select>

            {state?.errors?.role && (
              <p className="text-sm text-red-500">{state.errors.role}</p>
            )}
          </>
          <>
            <Input
              name="email"
              placeholder="Email Address"
              type="email"
              value={value.email}
              onChange={(e) => setValue({ ...value, email: e.target.value })}
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
              value={value.password}
              onChange={(e) => setValue({ ...value, password: e.target.value })}
            />
            {state?.errors?.email && (
              <p className="text-red-500">{state.errors.password}</p>
            )}
          </>
          <Button type="submit" className="bg-accent text-white">
            Register Account{" "}
          </Button>
        </form>
      </div>
    </FormModal>
  );
};

export default Register;
