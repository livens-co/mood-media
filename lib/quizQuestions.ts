import { Question, Result } from "@/types";

export const qts: Question[] = [
  {
    question: "Internetu mogu pristupiti:",
    option1: "samo dobronamjerni ljudi",
    option2: "samo zli i opasni ljudi",
    option3: "svi koji imaju mogućnost pristupa internetu",
    option4: "samo učenici i njihovi roditelji",
    ans: 3,
    image: "/assets/quiz/IMG_5498.JPG",
  },
  {
    question:
      "Kada mi netko pošalje elektroničku poruku neprikladnog sadržaja trebam:",
    option1: "proslijediti poruku svim prijateljima",
    option2: "odgovoriti na poruku",
    option3: "prijaviti korisnika te obrisati poruku",
    option4: "prestati koristiti internet",
    ans: 3,
    image: "/assets/quiz/IMG_5503.PNG",
  },
  {
    question: "Svoje lozinke trebali biste:",
    option1:
      "podijeliti sa svojim prijateljima tako da u slučaju zaboravljanja ipak netko zna",
    option2: "nikada ne dijeliti svoje lozinke, osim s roditeljima",
    option3: "podijeliti sa svakom osobom koja zatraži, ipak ništa ne skrivam",
    option4: "pisati na papirić te ga zalijepiti pokraj računala",
    ans: 2,
    image: "/assets/quiz/IMG_5504.JPG",
  },
  {
    question: "Na internetu se najbolje predstaviti:",
    option1: "koristiti svoje pravo ime i prezime",
    option2: "koristiti ime i prezime svoje prijateljice ili prijatelja",
    option3:
      "nadimkom, ali obavezno upisati adresu stanovanja te datum i godinu rođenja",
    option4: "nadimkom i bez osobnih podataka",
    ans: 4,
    image: "/assets/quiz/IMG_5505.JPG",
  },
  {
    question:
      "Pronašao si od prijatelja ili prijateljice lozinku od Instagrama:",
    option1: "upozorit ćes da odmah zamijene svoju lozinku",
    option2:
      'proslijediti ćeš ostalim prijateljima da se pohvališ kako "možeš provaliti profil"',
    option3:
      "pogledati ću profil i lažno se predstavljati ostalim prijateljima",
    option4: "izmijeniti lozinku te koristiti profil i lažno se predstavljati",
    ans: 1,
    image: "/assets/quiz/IMG_5503.PNG",
  },
];

export const result: Result[] = [
  {
    row1: "A joj!",
    row2: "Moglo je i bolje...",
    row3: "Ali, ne brini!",
    res: 1,
    bgColor: "#fe908f",
    color: "#8a2120",
  },
  {
    row1: "Nije loše!",
    row2: "Uvijek može bolje.",
    row3: "Ali, ne brini!",
    res: 2,
    bgColor: "#d684f1",
    color: "#792692",
  },
  {
    row1: "Bravo!",
    row2: "Sve je točno!",
    row3: "Ali, dobro je znati više.",
    res: 3,
    bgColor: "#39ec96",
    color: "#05622f",
  },
];
