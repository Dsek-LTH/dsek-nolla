import styled from 'styled-components';
import { DESKTOP_MQ } from '../../src/constants';

const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScalingParagraph = styled.p`
  ${DESKTOP_MQ} {
    font-size: 36px;
    text-align: center;
  }
`;

const ImageCopyContainer = styled.div`
  display: flex;
`;

const VolleybollTeam = styled.img`
  display: none;
  ${DESKTOP_MQ} {
    display: block;
    min-width: 27rem;
  }
`;

const LowerCopy = styled.div`
  ${DESKTOP_MQ} {
    margin-top: 1rem;
    margin-left: 2rem;
  }
`;

export default function Copy() {
  return (
    <CopyContainer>
      <ScalingParagraph>
        Först och främst, grattis till antagningen och varmt välkommen till Lund
        och D-sektionen! Framför dig har du fem fantastiska år bestående av
        plugg, nya vänner och inte minst ett otroligt studentliv. Vi hoppas att
        du ska stormtrivas!
      </ScalingParagraph>
      <ImageCopyContainer>
        <VolleybollTeam src="/images/volleyboll.png" alt="Glada d-sekare" />
        <LowerCopy>
          <p>
            D-sektionen är en av elva sektioner på LTH och tillsammans utgör vi
            Teknologkåren vid Lunds Tekniska Högskola. D-sektionen, som är en av
            de största sektionerna, består av studenter från programmen
            datateknik och informations- & kommunikationsteknik. Vi håller på
            med allt från studiebevakning, lokalomsorg, marknadsföring,
            matlagning och bartending till att arrangera n0llningen. Som
            nyantagen student är det mycket ny information, nya vänner och nya
            påhitt varje dag. För att få en riktigt bra introduktion till ditt
            nya liv som student så kommer du som n0lla få delta i en n0llning.
            N0llningen är en sex veckor lång period full av olika event; allt i
            från sittningar och pubar till tävlingar och studiekvällar. Det är
            dessutom ett ypperligt tillfälle att träffa nya kompisar, såväl
            andra n0llor som äldre teknologer. N0llningen är en intensiv period
            med aktiviteter varje dag. Man väljer själv vilka event man vill gå
            på och hur mycket man vill delta. N0llningen brukar vara väldigt
            uppskattad så vi hoppas att du vill vara med! N0llningen börjar 
            måndagen den 22:a augusti varav uppropet sker kl 15:15 i Kårhuset 
            vid LTH.
          </p>
          <p>
            Veckan innan n0llningen start kommer du bli kontaktad av din phadder
            som kommer komma med mer matnyttig information, men till att börja
            med kan du läsa mer här, på nolla.nu. Här finns bland annat
            studieschemat, vad som är bra att packa med sig, hur man söker
            boende och vad D-sektionen egentligen är. Kom ihåg att närvara på
            den akademiska mottagningen och uppropet; läs mer här. Har du
            funderingar som du inte får svar på så hör med dina phaddrar. De har
            ju en gång i tiden också varit n0llor. Har du fortfarande frågor, så
            kan du maila nollning@dsek.se så ska vi se till att räta ut dina
            frågetecken.
          </p>
          <p>
            Återigen, stort grattis till din plats på LTH och varmt välkomment
            till D-sektionen!
          </p>
          <p>Datakramar från D-sektionen &lt;3</p>
        </LowerCopy>
      </ImageCopyContainer>
    </CopyContainer>
  );
}
