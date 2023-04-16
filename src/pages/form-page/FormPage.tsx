import React from "react";
import { UserCards } from "../../shared/ui/user-cards/UserCards";
import { Form } from "../../shared/ui/form/Form";
import { Layout } from "../../shared/ui/layout/Layout";
import {
  useAppDispatch,
  useAppSelector,
} from "../../shared/domain/store/hooks";
import {
  addUser,
  selectUsers,
} from "../../shared/domain/store/slices/useSlice";

import type { IUser } from "../../shared/domain/types";

import styles from "./form-page.module.scss";

export const FormPage: React.FC = () => {
  const handleFormSubmit = (data: IUser) => {
    dispatch(addUser(data));
  };

  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  return (
    <Layout>
      <div className={styles.form}>
        <Form onSubmit={handleFormSubmit} />
      </div>

      <div className={styles.userData}>
        <UserCards userData={users} />
      </div>
    </Layout>
  );
};
