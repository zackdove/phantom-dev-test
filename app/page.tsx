import * as Styled from "./Index.styles";
import { List } from "./components/List/List";
import { Submit } from "./components/Submit/Submit";

export default function Home() {
  return (
    <main>
      <Styled.Wrapper>
        <List />
        <Submit />
      </Styled.Wrapper>
    </main>
  );
}
