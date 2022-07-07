import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Container = styled.div`
  margin-top: 2rem;
  max-width: 50rem;
  width: 100%;
`;

export default function Example() {
  return (
    <Wrapper>
      <Container>
        <h2>FAQ</h2>
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Vad är en n0llning?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                N0llningen är ett namn på de fem första veckorna av er tid här
                på LTH. Den första av dessa utspelar sig innan ordinarie
                undervisning börjar och det är här som aktiviteterna ligger som
                tätast. På dagarna ges nyttiga introduktionskurser i diverse
                ämnen och på kvällarna finns det roliga fritidsaktiviteter och
                fester att delta i. De första veckorna när man kommer till ett
                universitet kanske man känner sig ensam, eller så oroar man sig
                over om man kommer träffa några kompisar eller ej. Det är precis
                detta som n0llningen finns här för, eftersom det är väldigt
                många studenter som börjar utan att känna en enda person i hela
                staden. Av tidigare studenters erfarenheter så träffar man ofta
                några av sina närmsta vänner och skapar hela umgängeskretsar
                under n0llningen.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Vad är en peppare? </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              En peppare är en person som bistår de som har planerat n0llningen
              i deras arbete med att planera och utföra n0llningen. De springer
              allt som oftast runt i rosa frackar och ser till så att både 
              n0llor och phaddrar är peppade. De vet allt om hur n0llningen 
              fungerar - om du har missat att köpa biljett till en sittning 
              eller känner dig osäker på var och när du ska infinna dig till 
              olika event så kan du alltid prata med en peppare!
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Vad är en phadder? </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                En phadder är en äldre student som ofta springer runt i en
                ouveralle, och en del springer runt utan ouveralle. Phaddern vet
                en fruktansvärt massa saker om LTH och då speciellt hur
                D-sektionen och studentlivet fungerar. En phadder kan också allt
                som står på n0llningsprogrammet, var foreläsningssalar ligger,
                hur man beställer pizza och var man tar vägen om man missade
                sista tåget hem. Alla phaddrarna har även gått på utbildning i
                ledarskap, alkoholansvar och mycket, mycket mer, så tveka inte
                att fråga dem något om en kris uppstår. Phaddern är till för Din
                skull.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Vad är en n0lla? </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                En n0lla är oftast en förstaårsstudent. Denna student tas hand
                om av phaddrarna som a11tid ser till att n0llan har det
                trevligt! Som n0lla får man gå på massvis av roliga event och
                fester samt bekanta sig med sina nya kursare. N0lla är man fram
                till n0llegasquen (n0llningens avslutningsfest) då man upphöjs
                till etta efter fullbordat n0lleuppdrag.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Wrapper>
  );
}
