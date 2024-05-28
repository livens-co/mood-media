import "./style.scss";
import Row1 from "@/components/ClientPageRows/Row1";
import { Campaign } from "@/types";
import getCampaigns from "@/sanity/actions/get-campaigns";
import Row2 from "@/components/ClientPageRows/Row2";
import RowLogo from "@/components/ClientPageRows/RowLogo";

export const revalidate = 1;

const ClientsPage = async () => {
  const campaigns: Campaign[] = await getCampaigns();

  return (
    <div className="clientsPage">
      <Row1 data={campaigns.slice(0, 14)} />

      <Row2 data={campaigns.slice(14, 28)} />

      <Row1 data={campaigns.slice(28, -1)} />

      <RowLogo/>
    </div>
  );
};

export default ClientsPage;
