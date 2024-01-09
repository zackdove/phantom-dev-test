import * as Styled from "./Index.styles";
import { List } from "./components/List/List";
import { Submit } from "./components/Submit/Submit";

export default function Home() {
  return (
    <main>
      <Styled.Wrapper>
        <div>
          <Styled.Logo
            src="/phntm-logo.svg"
            alt="Phantom Logo"
            width={80}
            height={80}
          />{" "}
          <Submit />
        </div>

        <List />
      </Styled.Wrapper>
    </main>
  );
}
