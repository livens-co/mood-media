import "./style.scss";
import Row1 from "@/components/ClientPageRows/Row1";
import { Campaign } from "@/types";
import getCampaigns from "@/sanity/actions/get-campaigns";
import Row2 from "@/components/ClientPageRows/Row2";

export const revalidate = 1;

const ClientsPage = async () => {
  const campaigns: Campaign[] = await getCampaigns();

  return (
    <div className="clientsPage">
      <Row1 data={campaigns.slice(0, 7)} />

      <Row2 data={campaigns.slice(7, 14)} />

      <Row1 data={campaigns.slice(14, 22)} />

      <Row2 data={campaigns.slice(22, 28)} />

      <Row1 data={campaigns.slice(28, -1)} />
    </div>
  );
};

export default ClientsPage;
