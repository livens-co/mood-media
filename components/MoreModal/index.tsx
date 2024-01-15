import "./style.scss";

interface MoreModalProps {
  modalOpen: boolean;
  handleClose: () => void;
}

const MoreModal: React.FC<MoreModalProps> = ({ handleClose, modalOpen }) => {
  return (
    <div className="modalOverlay" >
      <div className="moreModal">
        <button onClick={handleClose}>Zatvori</button>
        <p>
          Jedna itekako uspješna sezona #KinoMood projekta već je iza nas. U
          suradnji s Kino Filmom pokrenuli smo projekt u kojem nam je cilj bio
          naše pratitelje odvesti u kino, ali ne kako bi samo pogledali
          najnovije naslove, već se usput i podružili s našim kreatorima. Tako
          smo u protekloj sezoni bili na premijerama nekih od najvećih filmskih
          hitova, kao što su Oppenheimer, Renfield, Brzi i žestoki 10,
          Egzorcist... A u svim smo tim naslovima uživali s više od 1600 naših
          vjernih pratitelja. Godinu #KinoMooda završili smo, pak, na najljepši
          mogući način, posebnim odlaskom u kino koje nam je svima napunilo srca
          i pokazalo nam koliko je malo potrebno da nekome izmamimo osmijeh na
          lice. Na premijeru posljednjeg ovogodišnjeg filmskog hita &quot;Patke
          selice&quot;, pozvali smo najposebnije goste. U kinu smo se tada
          družili s više od 200 klinaca i klinceza iz domova za nezbrinutu
          djecu, udruga koje brinu o djeci iz obitelji slabijeg imovinskog
          stanja i sigurnih kuća. S istim žarom ovaj projekt nastavljamo i u
          ovoj godini i veselimo se sa svima vama pogledati još mnogo
          nezaboravnih filmskih naslova te vas što više upoznati, razvedriti i
          dopustiti da vi razvedrite i razveselite nas!
        </p>
      </div>
    </div>
  );
};

export default MoreModal;
