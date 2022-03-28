import {StyledHeader, Nav, Logo} from './styles/Header.styled';
import {Container} from "./styles/Container.styled";
import {Button} from "./styles/Button.styled";
import {Flex} from "./styles/Flex.styled";

export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' alt="logo"/>
                    <Button>Try It Free</Button>
                </Nav>
            </Container>

        </StyledHeader>
    )
}