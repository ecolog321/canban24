import Header from "../components/Header/Header";
import { Wrapper } from "../components/styles/shared";
import { NotFound } from "../components/NotFound/NotFound";

function NotFoundPage() {
  return (
    <>
      <Wrapper>
        <Header></Header>
        <NotFound />
      </Wrapper>
    </>
  );
}

export default NotFoundPage;
