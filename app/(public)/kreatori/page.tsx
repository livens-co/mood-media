import Image from "next/image";
import "./style.scss";
import Link from "next/link";

const CreatorsPage = () => {
  return (
    <>
      <div className="creatorsPage">
        {/* UPOZNAJTE KREATORE */}
        <div className="getToKnow">
          <div className="getToKnowContainer">
            <h1>
              Upoznajte <br />
              kreatore
            </h1>

            <Image
              priority
              src="/assets/contactLines.svg"
              width={300}
              height={300}
              alt="Lines"
            />

            <Image
              priority
              src="/assets/contactLines.svg"
              width={300}
              height={300}
              alt="Lines"
            />
          </div>

          <div className="text">
            <p>
              U Mood Media, radimo na individualnom te se trudimo naglasiti tu
              jedinstvenost. Imamo mrežu kreatora s internacionalnom publikom,
              protežući se kroz različite niše - od ljepote i sporta do igara i
              gastronomije - uvijek ćemo vas u trenutku &quot;spojiti&quot; s
              video kreatorom koji savršeno odgovara baš vašem brendu,
              proizvodu, kampanji i publici kojoj se želite obratiti.
            </p>
          </div>
        </div>

        {/* KREATORI LIST */}
        <div className="creatorsList">
          <div className="creatorRow">
            <div className="image">
              <Image
                src="/test/sead.jpg"
                width={250}
                height={250}
                alt="Frame"
                className="frame"
              />
            </div>
            <div className="content">
              <h1>Sead Hrustanović</h1>
              <h3>+1.6M followers</h3>
              <p>
                Sead, Senada, Mulekelefeleketa... Ma kako god da ga
                prepoznajete, sigurni smo da ste za njega već odavno čuli! Sead
                Hrustanović jedan je od najurnebesnijih tiktokera na Balkanu
                trenutno, a sa svojih je 26 godina uspio ono što ne uspijeva baš
                bilo kome - na društvenim je mrežama okupio gotovo 1,5 milijuna
                obožavatelja.
              </p>

              <Link href="/kreatori/kreator">Saznaj više</Link>
            </div>
          </div>
          <div className="creatorRow">
            
            <div className="content">
              <h1>Sead Hrustanović</h1>
              <h3>+1.6M followers</h3>
              <p>
                Sead, Senada, Mulekelefeleketa... Ma kako god da ga
                prepoznajete, sigurni smo da ste za njega već odavno čuli! Sead
                Hrustanović jedan je od najurnebesnijih tiktokera na Balkanu
                trenutno, a sa svojih je 26 godina uspio ono što ne uspijeva baš
                bilo kome - na društvenim je mrežama okupio gotovo 1,5 milijuna
                obožavatelja.
              </p>

              <Link href="/kreatori">Saznaj više</Link>
            </div>
            <div className="image">
              <Image
                src="/test/sead.jpg"
                width={250}
                height={250}
                alt="Frame"
                className="frame"
              />
            </div>
          </div>
          <div className="creatorRow">
            <div className="image">
              <Image
                src="/test/sead.jpg"
                width={250}
                height={250}
                alt="Frame"
                className="frame"
              />
            </div>
            <div className="content">
              <h1>Sead Hrustanović</h1>
              <h3>+1.6M followers</h3>
              <p>
                Sead, Senada, Mulekelefeleketa... Ma kako god da ga
                prepoznajete, sigurni smo da ste za njega već odavno čuli! Sead
                Hrustanović jedan je od najurnebesnijih tiktokera na Balkanu
                trenutno, a sa svojih je 26 godina uspio ono što ne uspijeva baš
                bilo kome - na društvenim je mrežama okupio gotovo 1,5 milijuna
                obožavatelja.
              </p>

              <Link href="/kreatori">Saznaj više</Link>
            </div>
          </div>
          <div className="creatorRow">
            
            <div className="content">
              <h1>Sead Hrustanović</h1>
              <h3>+1.6M followers</h3>
              <p>
                Sead, Senada, Mulekelefeleketa... Ma kako god da ga
                prepoznajete, sigurni smo da ste za njega već odavno čuli! Sead
                Hrustanović jedan je od najurnebesnijih tiktokera na Balkanu
                trenutno, a sa svojih je 26 godina uspio ono što ne uspijeva baš
                bilo kome - na društvenim je mrežama okupio gotovo 1,5 milijuna
                obožavatelja.
              </p>

              <Link href="/kreatori">Saznaj više</Link>
            </div>
            <div className="image">
              <Image
                src="/test/sead.jpg"
                width={250}
                height={250}
                alt="Frame"
                className="frame"
              />
            </div>
          </div>
          <div className="creatorRow">
            <div className="image">
              <Image
                src="/test/sead.jpg"
                width={250}
                height={250}
                alt="Frame"
                className="frame"
              />
            </div>
            <div className="content">
              <h1>Sead Hrustanović</h1>
              <h3>+1.6M followers</h3>
              <p>
                Sead, Senada, Mulekelefeleketa... Ma kako god da ga
                prepoznajete, sigurni smo da ste za njega već odavno čuli! Sead
                Hrustanović jedan je od najurnebesnijih tiktokera na Balkanu
                trenutno, a sa svojih je 26 godina uspio ono što ne uspijeva baš
                bilo kome - na društvenim je mrežama okupio gotovo 1,5 milijuna
                obožavatelja.
              </p>

              <Link href="/kreatori">Saznaj više</Link>
            </div>
          </div>
          <div className="creatorRow">
            
            <div className="content">
              <h1>Sead Hrustanović</h1>
              <h3>+1.6M followers</h3>
              <p>
                Sead, Senada, Mulekelefeleketa... Ma kako god da ga
                prepoznajete, sigurni smo da ste za njega već odavno čuli! Sead
                Hrustanović jedan je od najurnebesnijih tiktokera na Balkanu
                trenutno, a sa svojih je 26 godina uspio ono što ne uspijeva baš
                bilo kome - na društvenim je mrežama okupio gotovo 1,5 milijuna
                obožavatelja.
              </p>

              <Link href="/kreatori">Saznaj više</Link>
            </div>
            <div className="image">
              <Image
                src="/test/sead.jpg"
                width={250}
                height={250}
                alt="Frame"
                className="frame"
              />
            </div>
          </div>
          <div className="creatorRow">
            <div className="image">
              <Image
                src="/test/sead.jpg"
                width={250}
                height={250}
                alt="Frame"
                className="frame"
              />
            </div>
            <div className="content">
              <h1>Sead Hrustanović</h1>
              <h3>+1.6M followers</h3>
              <p>
                Sead, Senada, Mulekelefeleketa... Ma kako god da ga
                prepoznajete, sigurni smo da ste za njega već odavno čuli! Sead
                Hrustanović jedan je od najurnebesnijih tiktokera na Balkanu
                trenutno, a sa svojih je 26 godina uspio ono što ne uspijeva baš
                bilo kome - na društvenim je mrežama okupio gotovo 1,5 milijuna
                obožavatelja.
              </p>

              <Link href="/kreatori">Saznaj više</Link>
            </div>
          </div>
          <div className="creatorRow">
            
            <div className="content">
              <h1>Sead Hrustanović</h1>
              <h3>+1.6M followers</h3>
              <p>
                Sead, Senada, Mulekelefeleketa... Ma kako god da ga
                prepoznajete, sigurni smo da ste za njega već odavno čuli! Sead
                Hrustanović jedan je od najurnebesnijih tiktokera na Balkanu
                trenutno, a sa svojih je 26 godina uspio ono što ne uspijeva baš
                bilo kome - na društvenim je mrežama okupio gotovo 1,5 milijuna
                obožavatelja.
              </p>

              <Link href="/kreatori">Saznaj više</Link>
            </div>
            <div className="image">
              <Image
                src="/test/sead.jpg"
                width={250}
                height={250}
                alt="Frame"
                className="frame"
              />
            </div>
          </div>
          <div className="creatorRow">
            <div className="image">
              <Image
                src="/test/sead.jpg"
                width={250}
                height={250}
                alt="Frame"
                className="frame"
              />
            </div>
            <div className="content">
              <h1>Sead Hrustanović</h1>
              <h3>+1.6M followers</h3>
              <p>
                Sead, Senada, Mulekelefeleketa... Ma kako god da ga
                prepoznajete, sigurni smo da ste za njega već odavno čuli! Sead
                Hrustanović jedan je od najurnebesnijih tiktokera na Balkanu
                trenutno, a sa svojih je 26 godina uspio ono što ne uspijeva baš
                bilo kome - na društvenim je mrežama okupio gotovo 1,5 milijuna
                obožavatelja.
              </p>

              <Link href="/kreatori">Saznaj više</Link>
            </div>
          </div>
          <div className="creatorRow">
            
            <div className="content">
              <h1>Sead Hrustanović</h1>
              <h3>+1.6M followers</h3>
              <p>
                Sead, Senada, Mulekelefeleketa... Ma kako god da ga
                prepoznajete, sigurni smo da ste za njega već odavno čuli! Sead
                Hrustanović jedan je od najurnebesnijih tiktokera na Balkanu
                trenutno, a sa svojih je 26 godina uspio ono što ne uspijeva baš
                bilo kome - na društvenim je mrežama okupio gotovo 1,5 milijuna
                obožavatelja.
              </p>

              <Link href="/kreatori">Saznaj više</Link>
            </div>
            <div className="image">
              <Image
                src="/test/sead.jpg"
                width={250}
                height={250}
                alt="Frame"
                className="frame"
              />
            </div>
          </div>
          <div className="creatorRow">
            <div className="image">
              <Image
                src="/test/sead.jpg"
                width={250}
                height={250}
                alt="Frame"
                className="frame"
              />
            </div>
            <div className="content">
              <h1>Sead Hrustanović</h1>
              <h3>+1.6M followers</h3>
              <p>
                Sead, Senada, Mulekelefeleketa... Ma kako god da ga
                prepoznajete, sigurni smo da ste za njega već odavno čuli! Sead
                Hrustanović jedan je od najurnebesnijih tiktokera na Balkanu
                trenutno, a sa svojih je 26 godina uspio ono što ne uspijeva baš
                bilo kome - na društvenim je mrežama okupio gotovo 1,5 milijuna
                obožavatelja.
              </p>

              <Link href="/kreatori">Saznaj više</Link>
            </div>
          </div>
          <div className="creatorRow">
            
            <div className="content">
              <h1>Sead Hrustanović</h1>
              <h3>+1.6M followers</h3>
              <p>
                Sead, Senada, Mulekelefeleketa... Ma kako god da ga
                prepoznajete, sigurni smo da ste za njega već odavno čuli! Sead
                Hrustanović jedan je od najurnebesnijih tiktokera na Balkanu
                trenutno, a sa svojih je 26 godina uspio ono što ne uspijeva baš
                bilo kome - na društvenim je mrežama okupio gotovo 1,5 milijuna
                obožavatelja.
              </p>

              <Link href="/kreatori">Saznaj više</Link>
            </div>
            <div className="image">
              <Image
                src="/test/sead.jpg"
                width={250}
                height={250}
                alt="Frame"
                className="frame"
              />
            </div>
          </div>
          <div className="creatorRow">
            <div className="image">
              <Image
                src="/test/sead.jpg"
                width={250}
                height={250}
                alt="Frame"
                className="frame"
              />
            </div>
            <div className="content">
              <h1>Sead Hrustanović</h1>
              <h3>+1.6M followers</h3>
              <p>
                Sead, Senada, Mulekelefeleketa... Ma kako god da ga
                prepoznajete, sigurni smo da ste za njega već odavno čuli! Sead
                Hrustanović jedan je od najurnebesnijih tiktokera na Balkanu
                trenutno, a sa svojih je 26 godina uspio ono što ne uspijeva baš
                bilo kome - na društvenim je mrežama okupio gotovo 1,5 milijuna
                obožavatelja.
              </p>

              <Link href="/kreatori">Saznaj više</Link>
            </div>
          </div>
          <div className="creatorRow">
            
            <div className="content">
              <h1>Sead Hrustanović</h1>
              <h3>+1.6M followers</h3>
              <p>
                Sead, Senada, Mulekelefeleketa... Ma kako god da ga
                prepoznajete, sigurni smo da ste za njega već odavno čuli! Sead
                Hrustanović jedan je od najurnebesnijih tiktokera na Balkanu
                trenutno, a sa svojih je 26 godina uspio ono što ne uspijeva baš
                bilo kome - na društvenim je mrežama okupio gotovo 1,5 milijuna
                obožavatelja.
              </p>

              <Link href="/kreatori">Saznaj više</Link>
            </div>
            <div className="image">
              <Image
                src="/test/sead.jpg"
                width={250}
                height={250}
                alt="Frame"
                className="frame"
              />
            </div>
          </div>
          <div className="creatorRow">
            <div className="image">
              <Image
                src="/test/sead.jpg"
                width={250}
                height={250}
                alt="Frame"
                className="frame"
              />
            </div>
            <div className="content">
              <h1>Sead Hrustanović</h1>
              <h3>+1.6M followers</h3>
              <p>
                Sead, Senada, Mulekelefeleketa... Ma kako god da ga
                prepoznajete, sigurni smo da ste za njega već odavno čuli! Sead
                Hrustanović jedan je od najurnebesnijih tiktokera na Balkanu
                trenutno, a sa svojih je 26 godina uspio ono što ne uspijeva baš
                bilo kome - na društvenim je mrežama okupio gotovo 1,5 milijuna
                obožavatelja.
              </p>

              <Link href="/kreatori/kreator">Saznaj više</Link>
            </div>
          </div>
          <div className="creatorRow">
            
            <div className="content">
              <h1>Sead Hrustanović</h1>
              <h3>+1.6M followers</h3>
              <p>
                Sead, Senada, Mulekelefeleketa... Ma kako god da ga
                prepoznajete, sigurni smo da ste za njega već odavno čuli! Sead
                Hrustanović jedan je od najurnebesnijih tiktokera na Balkanu
                trenutno, a sa svojih je 26 godina uspio ono što ne uspijeva baš
                bilo kome - na društvenim je mrežama okupio gotovo 1,5 milijuna
                obožavatelja.
              </p>

              <Link href="/kreatori">Saznaj više</Link>
            </div>
            <div className="image">
              <Image
                src="/test/sead.jpg"
                width={250}
                height={250}
                alt="Frame"
                className="frame"
              />
            </div>
          </div>
          <div className="creatorRow">
            <div className="image">
              <Image
                src="/test/sead.jpg"
                width={250}
                height={250}
                alt="Frame"
                className="frame"
              />
            </div>
            <div className="content">
              <h1>Sead Hrustanović</h1>
              <h3>+1.6M followers</h3>
              <p>
                Sead, Senada, Mulekelefeleketa... Ma kako god da ga
                prepoznajete, sigurni smo da ste za njega već odavno čuli! Sead
                Hrustanović jedan je od najurnebesnijih tiktokera na Balkanu
                trenutno, a sa svojih je 26 godina uspio ono što ne uspijeva baš
                bilo kome - na društvenim je mrežama okupio gotovo 1,5 milijuna
                obožavatelja.
              </p>

              <Link href="/kreatori">Saznaj više</Link>
            </div>
          </div>
          <div className="creatorRow">
            
            <div className="content">
              <h1>Sead Hrustanović</h1>
              <h3>+1.6M followers</h3>
              <p>
                Sead, Senada, Mulekelefeleketa... Ma kako god da ga
                prepoznajete, sigurni smo da ste za njega već odavno čuli! Sead
                Hrustanović jedan je od najurnebesnijih tiktokera na Balkanu
                trenutno, a sa svojih je 26 godina uspio ono što ne uspijeva baš
                bilo kome - na društvenim je mrežama okupio gotovo 1,5 milijuna
                obožavatelja.
              </p>

              <Link href="/kreatori">Saznaj više</Link>
            </div>
            <div className="image">
              <Image
                src="/test/sead.jpg"
                width={250}
                height={250}
                alt="Frame"
                className="frame"
              />
            </div>
          </div>
          
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
          <Link href="/">Pridruži nam se</Link>
        </div>
      </div>
    </>
  );
};

export default CreatorsPage;
