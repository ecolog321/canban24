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
import {formFields} from "../../lib/form";
import { login } from "../../api";

export const Login = ({ userLogin }) => {

  const [formData, setFormData] = useState([formFields]);

  const handleInputChange =  (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <ContainerSingIn>
      <Modal>
        <ModalB>
          <ModalTtl>
            <h2>Вход</h2>
          </ModalTtl>
          <FormLogIn action="#">
            <ModalInput
              value={formData.email}
              onChange={handleInputChange}
              type="text"
              name="login"
              placeholder="Эл.почта"
            ></ModalInput>
            <ModalInput
              value={formData.password}
              onChange={handleInputChange}
              type="password"
              name="password"
              placeholder="Пароль"
            ></ModalInput>
            <ModalBtn onClick={login(formData.email, formData.password)}>
              <Link to={AppRoutes.HOME}>Войти</Link>
            </ModalBtn>
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
