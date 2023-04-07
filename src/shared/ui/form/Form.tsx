import React from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { FormItem } from "./FormItem/FormItem";
import { IUser } from "../../domain/types";
import { Button } from "../button/Button";
import { Switcher } from "../switcher/Switcher";
import { Checkbox } from "../checkbox/Checkbox";
import { InputFile } from "../input-file/InputFile";

import styles from "./form.module.scss";

export type IFormProps = {
  onSubmit: (data: IUser) => void;
};

export const Form: React.FC<IFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUser>({
    defaultValues: { country: "Russia", agreePromotion: false, agree: false },
  });

  const [imageUrl, setImageUrl] = React.useState("");

  const onSubmit = (data: IUser) => {
    reset();
    const id = uuidv4();
    props.onSubmit({ ...data, id, photoUrl: imageUrl });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      Object.values(files).forEach((file) => {
        const url = URL.createObjectURL(file);
        setImageUrl(url);
      });
    }
  };

  React.useEffect(() => {
    register("firstName", {
      validate: (value) => !!value.length || "Name shoud be set!",
    });
    register("lastName", {
      validate: (value) => !!value.length || "Surname shoud be set!",
    });
    register("birthDate", {
      validate: (value) => !!value.length || "Birth date shoud be set!",
    });
    register("agree", {
      validate: (value) =>
        value || "Please tick this box if you want to proceed",
    });
    register("photoUrl", {
      validate: (value) => !!value.length || "Please select image",
    });
  }, [register]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <FormItem
        tag="input"
        {...register("firstName")}
        field="Name"
        type="text"
      />

      <FormItem
        tag="input"
        {...register("lastName")}
        field="Surname"
        type="text"
      />

      <FormItem
        tag="input"
        field="Birth date"
        {...register("birthDate")}
        type="date"
        error={errors.birthDate?.message}
      />

      <FormItem
        tag="select"
        field="Country"
        {...register("country")}
        options={["Russia", "Belarus", "Ukraine"]}
      />

      <Switcher
        label="I want to receive notifications about promotions"
        {...register("agreePromotion")}
      />

      <div className={styles.checkbox}>
        <Checkbox
          label="I agree with"
          {...register("agree")}
          error={errors.agree?.message}
        />
      </div>

      <InputFile
        label="Choose photo"
        {...register("photoUrl")}
        accept="image/*"
        onChange={handleFileChange}
        error={errors.photoUrl?.message}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
};
