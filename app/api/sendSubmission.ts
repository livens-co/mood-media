import axios from "axios";
import toast from "react-hot-toast";

interface EmailData {
  name: string;
  date: string;
  email: string;
  phone: string;
  tikTok: string;
  instagram: string;
  campaign: string;
  ambassador: string;
  category: string;
  about: string;
}

const sendSubmission = async (emailData: EmailData): Promise<boolean> => {
  try {
    const response = await axios.post("/api/sendSubmission", { ...emailData });

    if (response.status === 200) { 
      toast.success("Prijava uspješno poslana!");
      return true;
    }
    console.log('email sending failed')
    toast.error("Prijava nije poslana");
    return false;
  } catch (error) {
    console.error("Email sending failed:", error);
    toast.error("Prijava nije poslana");
    throw error;
  }
};

export { sendSubmission };