import React from "react";
import { UserCards } from "../../shared/ui/user-cards/UserCards";
import { IFormItem } from "../../shared/domain/interfaces";
import { Form } from "../../shared/ui/form/Form";
import { Layout } from "../../shared/ui/layout/Layout";

import styles from "./form-page.module.scss";

export const FormPage: React.FC = () => {
  const [userData, setUserData] = React.useState<IFormItem[]>([]);

  const handleFormSubmit = (data: IFormItem) => {
    setUserData((it) => it.concat(data));
    console.log(userData);
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
