"use client";

import useModalStore from "@/app/_hooks/use-modal-store";
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
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const { onOpen, onClose, isOpen, type } = useModalStore();
  const isModalOpen = isOpen && type === "loginModal";
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);
      if (callback?.ok) {
        toast.success("Logged in successfully");
        reset();
        onClose();
        router.refresh();
      }

      if (callback?.error) toast.error("Damn... RIP my brazzer");
    });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Welcome back!"
        subtitle="Login to your account 💖"
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
          <div>Don't have an account?</div>
          <div
            onClick={() => {
              onClose();
              onOpen("registerModal");
            }}
            className="text-rose-800 cursor-pointer hover:underline"
          >
            Sign up
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={isModalOpen}
      title="Login"
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

export default LoginModal;
