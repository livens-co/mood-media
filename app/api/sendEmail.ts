import axios from "axios";
import toast from "react-hot-toast";

interface EmailData {
  name: string;
  email: string;
  message: string;
}

const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    const response = await axios.post("/api/send", { ...emailData });

    if (response.status === 200) { 
      toast.success("Poruka uspješno poslana!");
      return true;
    }
    console.log('email sending failed')
    toast.error("Poruka nije poslana");
    return false;
  } catch (error) {
    console.error("Email sending failed:", error);
    toast.error("Poruka nije poslana");
    throw error;
  }
};

export { sendEmail };