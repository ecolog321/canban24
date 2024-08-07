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
} from "../styles/LoginRegister.styled";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/routes";
import { logining } from "../../api";
import { formFields } from "../../lib/form";
import { useUserContext } from "../../context/hooks/useUser";

export const Login = () => {
  const { userLogin } = useUserContext();
  const [formData, setFormData] = useState(formFields);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogining = async (e) => {
    e.preventDefault();
    try {
      await logining(formData.login, formData.password).then((responseData) => {
        userLogin(responseData.user);
      });
    } catch (err) {
      setError(err.message);
    }
  }
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
              {error ? <h4 style={{ color: "red" }}>{error}</h4> : <></>}
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
