import React, {useState} from "react";
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
import { registration } from "../../api";

export const Signin = ({userLogin}) => {

  const [formData, setFormData] = useState([{}]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handleSingining = async()=>{
    await registration(formData.name,formData.login, formData.password).then((responseData)=>{
      userLogin(responseData.user)
    })
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
              <ModalBtn onClick={()=>handleSingining()}>
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