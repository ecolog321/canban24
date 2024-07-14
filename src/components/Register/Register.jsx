import React, { useState } from "react";
import {
  Modal,
  ContainerSingIn,
  FormLogIn,
  ModalB,
  ModalBtn,
  ModalGroup,
  ModalInput,
  ModalTtl,
} from "../styles/LoginRegister.styled";

import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/routes";
import { registration } from "../../api";
import { formFields } from "../../lib/form";
import { useUserContext } from "../../context/hooks/useUser";

export const Register = () => {
  const { userLogin } = useUserContext();

  const [formData, setFormData] = useState(formFields);
  const [error, setError]   = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSingining = async (e) => {
    e.preventDefault();
    try {
      await registration(formData.name, formData.login, formData.password).then(
        (responseData) => {
          userLogin(responseData.user);
        }
      );
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ContainerSingIn>
      <Modal>
        <ModalB>
          <ModalTtl>
            <h2>Регистрация</h2>
          </ModalTtl>
          <FormLogIn onSubmit={handleSingining} action="#">
            <ModalInput
              onChange={handleInputChange}
              type="text"
              name="name"
              placeholder="Имя"
            ></ModalInput>
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
            {error ? <h4 style={{ color: "red" }}>{error}</h4> : <></>}
            <ModalBtn type="submit">Зарегистрироваться</ModalBtn>
            <ModalGroup>
              <p>Уже есть аккаунт?</p>
              <Link to={AppRoutes.LOGIN}>Войти здесь</Link>
            </ModalGroup>
          </FormLogIn>
        </ModalB>
      </Modal>
    </ContainerSingIn>
  );
};
