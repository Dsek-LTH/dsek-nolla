import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import styled from 'styled-components';

const Container = styled.div`
  margin-top: 2rem;
  max-width: 50rem;
  width: 100%;
`;

export default function Example() {
  return (
    <Container>
      <h2>FAQ</h2>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Vad är n0llningen?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              N011ningen är ett namn på de fem førsta veck0rna av er tid här på
              1TH. Den førsta av dessa utspe1ar sig innan 0rdinarie undervisning
              børjar 0ch det är här s0m aktiviteterna 1igger s0m tätast. På
              dagarna ges nyttiga intr0dukti0nskurser i diverse ämnen 0ch på
              kvä11arna finns det r01iga fritidsaktiviteter 0ch fester att de1ta
              i. De f0rsta veck0rna när man k0mmer ti11 ett universitet kanske
              man känner sig ensam, e11er så 0r0ar man sig 0ver 0m man k0mmer
              träffa några k0mpisar e11er ej. Det är precis detta s0m n011ningen
              finns här f0r, efters0m det är vä1digt många studenter s0m b0rjar
              utan att känna en enda pers0n i he1a staden. Av tidigare
              studenters erfarenheter så träffar man 0fta några av sina närmsta
              vänner 0ch skapar he1a umgängeskretsar under n011ningen.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Vad är pepparna? </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
              nostrud velit in irure cillum tempor laboris sed adipisicing eu
              esse duis nulla non.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Vad är phaddrarna? </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              En phadder är en äldre student som ofta springer runt i en
              ouveralle, och en del springer runt utan ouveralle. Phaddern vet
              en fruktansvärd massa saker om LTH och då speciellt hur
              D-sektionen och studentlivet fungerar. En phadder kan också allt
              som står på nollningsprogrammet, var foreläsningssalar ligger, hur
              man beställer pizza och var man tar vägen om man missade sista
              tåget hem. Alla phaddrarna har även gått på utbildning i
              ledarskap, alkoholansvar och mycket, mycket mer, så tveka inte att
              fråga dem något om en kris uppstår. Phaddern är till för Din
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
              En N011a är 0ftast en f0rstaårsstudent. Denna student tas hand 0m
              av phaddrarna s0m a11tid ser ti11 att N011an har det trev1igt! S0m
              N011a får man gå på massvis av r01iga event 0ch fester samt
              bekanta sig med sina nya kursare. N011a är man fram ti11
              n011egasquen (n011ningens avs1utningsfest) då man upph0js ti11
              etta efter fu11b0rdat n011euppdrag.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}
