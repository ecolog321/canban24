import HeaderLogoLight from "./HeaderLogo/HeaderLogoLight";
import HeaderLogoDark from "./HeaderLogo/HeaderLogoDark";
import HeaderNav from "./HeaderNav/HeaderNav";
import { HeaderBlock, HeaderM } from "./Header.styled";
import { Container } from "../styles/shared";

function Header() {
  return (
    <HeaderM>
      <Container>
        <HeaderBlock>
          <HeaderLogoLight />
          <HeaderLogoDark />
          <HeaderNav />
        </HeaderBlock>
      </Container>
    </HeaderM>
  );
}

export default Header;
