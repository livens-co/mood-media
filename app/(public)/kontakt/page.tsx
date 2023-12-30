import ContactAnimation from "@/components/ContactAnimation";
import "./style.scss";

import { IoMail, IoPerson } from "react-icons/io5";
import getArticles from "@/sanity/actions/get-articles";
import getArticlesByCreator from "@/sanity/actions/get-articles-by-creator";
import { Article, Creator } from "@/types";

const ContactPage = async () => {
  // const filteredArticles: Article[] = await getArticlesByCreator(4);
  // console.log(filteredArticles);


  return (
    <div className="contactPage">
      <div className="contactPageContainer">
        <div className="animation">
          <ContactAnimation />
        </div>
        <div className="form">
          <h2>Kontaktirajte nas</h2>
          <form>
            <div className="input">
              <IoPerson /> <input type="text" placeholder="Ime" />
            </div>
            <div className="input">
              <IoMail /> <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <textarea rows={4} placeholder="Poruka" />
            </div>
            <button>Pošalji</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
