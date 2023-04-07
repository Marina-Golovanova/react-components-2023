import React from "react";
import { UserCards } from "../../shared/ui/user-cards/UserCards";
import { Form } from "../../shared/ui/form/Form";
import { Layout } from "../../shared/ui/layout/Layout";

import type { IUser } from "../../shared/domain/types";

import styles from "./form-page.module.scss";

export const FormPage: React.FC = () => {
  const [userData, setUserData] = React.useState<IUser[]>([]);

  const handleFormSubmit = (data: IUser) => {
    setUserData((it) => it.concat(data));
  };

  return (
    <Layout>
      <div className={styles.form}>
        <Form onSubmit={handleFormSubmit} />
      </div>

      <div className={styles.userData}>
        <UserCards userData={userData} />
      </div>
    </Layout>
  );
};
