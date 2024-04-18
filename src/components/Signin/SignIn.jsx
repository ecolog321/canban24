import React from "react";
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

export const Signin = ({setIsAuth}) => {

  const toogleAuth=()=>{
    setIsAuth(true)
  }
    return (
      <ContainerSingIn>
        <Modal>
          <ModalB>
            <ModalTtl>
              <h2>Регистрация</h2>
            </ModalTtl>
            <FormLogIn action="#">
              <ModalInput
                type="text"
                name="first-name"
                placeholder="Имя"
              ></ModalInput>
              <ModalInput
                type="text"
                name="login"
                placeholder="Эл.почта"
              ></ModalInput>
              <ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
              ></ModalInput>
              <ModalBtn onClick={toogleAuth}>
                <Link to={AppRoutes.HOME}>Зарегестрироваться</Link>
              </ModalBtn>
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