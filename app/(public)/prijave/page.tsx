"use client";

import { useState } from "react";
import "./style.scss";
import { IoMail, IoPerson } from "react-icons/io5";
import {
  FaPhoneFlip,
  FaCalendarDays,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";
import { sendSubmission } from "@/app/api/sendSubmission";

const CreatorSumbissionPage = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tikTok, setTikTok] = useState("");
  const [instagram, setInstagram] = useState("");
  const [campaign, setCampaign] = useState("");
  const [ambassador, setAmbassador] = useState("");
  const [category, setCategory] = useState("");
  const [about, setAbout] = useState("");

  const [loading, setLoading] = useState<boolean>(false);
  const [blured, setBlured] = useState(false);

  const handleBlur = () => {
    setBlured(true);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await sendSubmission({
        name,
        date,
        email,
        phone,
        tikTok,
        instagram,
        campaign,
        ambassador,
        category,
        about,
      });
    } catch (error) {
      console.error("Prijava nije poslana:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="creatorSubmissionPage">
      <div className="contactPageContainer">
        <div className="form">
          <h2>Kreator si i želiš raditi s nama?</h2>
          <form>
            <div className="formRow">
              <div className="input">
                <IoPerson />{" "}
                <input
                  type="text"
                  placeholder="Ime i prezime"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={handleBlur}
                  data-focused={blured.toString()}
                />
              </div>
              <div className="input">
                <FaCalendarDays />{" "}
                <input
                  type="text"
                  placeholder="Datum rođenja"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  onBlur={handleBlur}
                  data-focused={blured.toString()}
                />
              </div>
            </div>
            <div className="formRow">
              <div className="input">
                <IoMail />{" "}
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={handleBlur}
                  data-focused={blured.toString()}
                />
              </div>
              <div className="input">
                <FaPhoneFlip />{" "}
                <input
                  type="phone"
                  placeholder="Mobitel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={handleBlur}
                  data-focused={blured.toString()}
                />
              </div>
            </div>
            <div className="formRow">
              <div className="input">
                <FaInstagram />{" "}
                <input
                  type="text"
                  placeholder="Instagram link"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  onBlur={handleBlur}
                  data-focused={blured.toString()}
                />
              </div>
              <div className="input">
                <FaTiktok />{" "}
                <input
                  type="text"
                  placeholder="TikTok link"
                  value={tikTok}
                  onChange={(e) => setTikTok(e.target.value)}
                  onBlur={handleBlur}
                  data-focused={blured.toString()}
                />
              </div>
            </div>
            <div className="input">
              <textarea
                rows={3}
                placeholder="Ukoliko si do sada radio/la kampanju ili više njih molimo unesi link tih kampanja (do 3 maksimalno)"
                value={campaign}
                onChange={(e) => setCampaign(e.target.value)}
                onBlur={handleBlur}
                data-focused={blured.toString()}
              />
            </div>
            <div className="input">
              <textarea
                rows={3}
                placeholder="Ukoliko si ambasador nekog brenda ili više njih molimo navedi brend"
                value={ambassador}
                onChange={(e) => setAmbassador(e.target.value)}
                onBlur={handleBlur}
                data-focused={blured.toString()}
              />
            </div>
            <div className="input">
              <textarea
                rows={3}
                placeholder="Kako bi sebe kategorizirao/la (lifestyle, sport, food, skečevi i zabava, edukacija i sl.)"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                onBlur={handleBlur}
                data-focused={blured.toString()}
              />
            </div>
            <div className="input">
              <textarea
                rows={3}
                placeholder="Nekoliko rečenica o tebi :)"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                onBlur={handleBlur}
                data-focused={blured.toString()}
              />
            </div>

            <button type="submit" onClick={handleSubmit} disabled={loading}>
              Pošalji
            </button>
          </form>
          <p>
            *Slanjem ove prijave Mood Media će uzeti istu u obzir. Prema
            diskrecijskoj ocijeni Mood Media može, ali i ne mora Kreatora
            implementirati u svoju mrežu Kreatora.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreatorSumbissionPage;
