import { FaArrowRight } from 'react-icons/fa';
import { Animation } from 'components/Animation';
import { WelcomeWrapper, TextWrapper, Text, Title, LinkStyled, LinkWrapper } from './Welcome.styled';

export const Welcome = () => {
    return (
        <WelcomeWrapper>
            <TextWrapper>
            <Text>Welcom to</Text>
            <Title>tweets</Title>
            <LinkWrapper>
            <LinkStyled to={"/tweets"}>
                Let's go!
                <FaArrowRight size="16"/>
            </LinkStyled>
            </LinkWrapper>
            <Animation/>
            </TextWrapper>
        </WelcomeWrapper>
    )
}