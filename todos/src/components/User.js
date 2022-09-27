import { Container } from "./styles/Container.styled";
import { StyledUser } from "./styles/User.styled";
import { useSearchParams } from "react-router-dom";

function User(props) {
  const [searchParams] = useSearchParams();

  const searchId = searchParams.get("userid");

  return (
    <Container>
      <StyledUser>User {searchId} tasks</StyledUser>
    </Container>
  );
}

export default User;
