"use client";

import useModalStore from "@/app/_hooks/use-modal-store";
import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/input";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { buttonIconProps } from "@/lib/utils";
import Button from "../Button";
import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";

const RegisterModal = () => {
  const { onOpen, onClose, isOpen, type } = useModalStore();
  const isModalOpen = isOpen && type === "registerModal";
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register/", data)
      .then(() => {
        reset();
        onClose();
        onOpen("loginModal");
      })
      .catch(() => toast.error("Something went wrong..."))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Welcome to Airbnb"
        subtitle="Create an account!"
        center={true}
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continiue with Google"
        icon={<FcGoogle {...buttonIconProps} />}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="Continiue with Github"
        icon={<AiFillGithub {...buttonIconProps} />}
        onClick={() => signIn("github")}
      />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex flex-row items-center gap-2 justify-center">
          <div>Already have an account?</div>
          <div
            onClick={() => {
              onClose();
              onOpen("loginModal");
            }}
            className="text-rose-800 cursor-pointer hover:underline"
          >
            Log In
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={isModalOpen}
      title="Register"
      actionLabel="Continiue"
      onClose={() => {
        reset();
        onClose();
      }}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
