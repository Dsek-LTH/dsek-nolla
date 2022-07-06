import type { NextPage } from 'next';
import styled from 'styled-components';
import ConsoleEffect from '../components/ConsoleEffect';
import PostItNote from '../components/PostItNote';
import { DESKTOP_MQ } from '../src/constants';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  ul {
    padding-left: 1rem;
  }
`;

const BikeDiv = styled.div`
  margin: 1rem 0;
  flex-direction: column;
  ${DESKTOP_MQ} {
    margin: 2rem 0;
    flex-direction: row;
  }
  display: flex;
`;

const BikePostIt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  font-size: 60px;
  transform: rotate(-20deg);
  font-weight: 700;
  margin-top: 6rem;
`;

const Divider = styled.div`
  margin-top: 3rem;
  ${DESKTOP_MQ} {
    margin-right: 5rem;
  }
`;

const Paragraph = styled.p`
  ${DESKTOP_MQ} {
    font-size: 1.5rem;
  }
`;

const DressCodeWrapper = styled.div``;

const PostItsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostItRow = styled.div`
  display: flex;
  flex-direction: column;
  ${DESKTOP_MQ} {
    flex-direction: row;
    justify-content: space-around;
  }
  margin: 2rem 0;
`;

const DressCodeTitle = styled.p`
  font-weight: 700;
  font-size: 2rem;
  margin: 1rem 0;
`;

const DressCodeBody = styled.p`
  margin: 0;
  font-size: 1.65rem;
`;

const Home: NextPage = () => {
  return (
    <Main>
      <ConsoleEffect Tag="h1" string="vad ska jag ta med mig?" />
      <BikeDiv>
        <PostItNote>
          <BikePostIt>Cykel!!!</BikePostIt>
        </PostItNote>
        <Divider />
        <Paragraph>
          Cykel är a och o när det gäller transport inom Lund stad. Allting är
          väldigt kompakt byggt vilket medför att i princip var du än befinner
          dig så kommer din destination ändå endast vara en kort cykeltur bort.
        </Paragraph>
      </BikeDiv>
      <Paragraph>
        De olika sittningarna och tillställningarna du kommer gå på under
        n0llningen kommer ha olika klädkoder. Dessa existerar för att hjälpa dig
        veta hur du ska klä dig, och hur formellt eventet är. Kom ihåg att
        klädkodernas syfte är inte att göra dig fattig genom att tvinga dig
        inhandla dyra kläder som du endast kommer använda en gång. Du kan alltid
        fråga en kompis om du får låna deras kläder inför kvällen, eller kolla
        med de som anordnar eventet ifall de kläder du hade tänkt ha på dig ändå
        är okej. Det kan vara smart att ha med sig kläder till dessa event redan
        när du kommer till Lund.
      </Paragraph>
      <DressCodeWrapper>
        <ConsoleEffect
          options={{ delay: 0.3 }}
          Tag="h1"
          string="Detta är en lista på de klädkoder som kommer förekomma under n0llningen:"
        />
        <PostItsContainer>
          <PostItRow>
            <PostItNote>
              <DressCodeTitle>Högtidsdräkt</DressCodeTitle>
              <DressCodeBody>
                Långklänning eller frack, men en mörk kostym duger oftast. Fråga
                arrangören om du är osäker.
              </DressCodeBody>
            </PostItNote>
            <Divider />
            <PostItNote purple>
              <DressCodeTitle>Mörk kostym</DressCodeTitle>
              <DressCodeBody>
                En mörk kostym (svart, grå, brun eller mörkblå), eller en finare
                klänning eller en kjol med en top.
              </DressCodeBody>
            </PostItNote>
          </PostItRow>
          <PostItRow>
            <PostItNote purple>
              <DressCodeTitle>Temaenligt</DressCodeTitle>
              <DressCodeBody>
                Vissa sittningar har teman som du måste klä dig efter. Detta är
                väldigt sällan en strikt klädkod; följ temat så gott du kan!
              </DressCodeBody>
            </PostItNote>
            <Divider />
            <PostItNote>
              <DressCodeTitle>Bruten kavaj</DressCodeTitle>
              <DressCodeBody>
                Finare vardagskläder. En kavaj kombinerat med något annat, eller
                bara något som du känner dig snygg i.
              </DressCodeBody>
            </PostItNote>
          </PostItRow>
        </PostItsContainer>
      </DressCodeWrapper>
    </Main>
  );
};

export default Home;
