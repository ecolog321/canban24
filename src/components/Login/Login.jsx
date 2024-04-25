import React from "react";
import { useState } from "react";
import {
  Modal,
  ContainerSingIn,
  FormLogIn,
  ModalB,
  ModalBtn,
  ModalGroup,
  ModalInput,
  ModalTtl,
} from "../styles/Login.styled";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/routes";
import { logining } from "../../api";
import { formFields } from "../../lib/form";

export const Login = ({ userLogin }) => {
  const [formData, setFormData] = useState(formFields);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogining = async (e) => {
    e.preventDefault();
    await logining(formData.login, formData.password).then((responseData) => {
      userLogin(responseData.user);
    });
  };

  return (
    <ContainerSingIn>
      <Modal>
        <ModalB>
          <ModalTtl>
            <h2>Вход</h2>
          </ModalTtl>
          <FormLogIn onSubmit={handleLogining} action="#">
            <ModalInput
              onChange={handleInputChange}
              type="text"
              name="login"
              placeholder="Эл.почта"
            ></ModalInput>
            <ModalInput
              onChange={handleInputChange}
              type="password"
              name="password"
              placeholder="Пароль"
            ></ModalInput>
            <ModalBtn type="submit">Войти</ModalBtn>
            <ModalGroup>
              <p>Нужна зарегестрироваться</p>
              <Link to={AppRoutes.SIGNIN}>Регистрация здесь</Link>
            </ModalGroup>
          </FormLogIn>
        </ModalB>
      </Modal>
    </ContainerSingIn>
  );
};
