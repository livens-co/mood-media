import Image from "next/image";
import "./style.scss";
import Link from "next/link";
import getCreators from "@/sanity/actions/get-creators";
import { Creator } from "@/types";

export const revalidate = 1;

const CreatorsPage = async () => {
  const creators: Creator[] = await getCreators();

  return (
    <>
      <div className="creatorsPage">
        {/* UPOZNAJTE KREATORE */}
        <div className="getToKnow">
          <div className="getToKnowContainer">
            <h1>Video</h1>
            <h1>Kreatori</h1>
          </div>

          <div className="text">
            <p>
              U Mood Media, radimo na individualnom pristupu te se trudimo
              naglasiti tu jedinstvenost. Imamo mrežu Kreatora s
              internacionalnom publikom, protežući se kroz različite niše - od
              ljepote i sporta do igara i gastronomije - uvijek ćemo vas u
              trenutku &quot;spojiti&quot; s video Kreatorom koji savršeno
              odgovara baš vašem brendu, proizvodu, kampanji i publici kojoj se
              želite obratiti.
            </p>
            <div className="borderLeft" />
            <div className="borderTop" />
            <div className="borderRight" />
            <div className="borderBottom" />
          </div>
        </div>

        {/* KREATORI LIST */}
        <div className="creatorsList">
          {creators.map((c) => (
            <div className="creatorRow" key={c?.slug}>
              <div className="image">
                <Image
                  src={`${c?.avatar}`}
                  width={450}
                  height={450}
                  alt={c?.name}
                  className="frame"
                />
              </div>
              <div className="content">
                <h1>{c?.name}
                
                {c?.academyStamp === true && (
                  <div className="stamp">
                    <Image
                      src="/assets/stamp.png"
                      width={100}
                      height={100}
                      alt="Influensaj odgovorno"
                      />
                  </div>
                )}
                </h1>
                <h3>{c.totalFollowers}+ followers</h3>
                <p>{c.shortBio}</p>

                <Link href={`/kreatori/${c?.slug}`}>Saznaj više</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="joinOurTeam">
        <div className="innerContainer">
          <h1>Pridruži se našem timu</h1>
          <p>
            Ako si video kreator i želiš raditi s nama pomoći ćemo ti da budeš
            primijećen/a, ali ti dopustiti da pritom ostaneš svoj/a i radiš ono
            što ti najbolje ide.
          </p>
          <p>
            Kad radimo s tobom, individualni nam je pristup jako važan, jer
            smatramo da je svaki kreator jedinstven i trudit ćemo se tu
            jedinstvenost naglasiti, a ne ugasiti. Olakšat ćemo ti cijeli proces
            kampanje - od pretprodukcije, produkcije do postprodukcije. Cilj je
            da nemaš distrakcije za vrijeme kada si u potpunosti predan/a
            kreativi i realizaciji sadržaja.
          </p>
          <Link href="/prijave">Pridruži nam se</Link>
        </div>
      </div>
    </>
  );
};

export default CreatorsPage;
