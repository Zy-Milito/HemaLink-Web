import { campaigns } from "../../../data/campaigns.js";
import CampaignCard from "./campaignCard/CampaignCard.jsx";

const CampaignsList = () => {
  return (
    <div className="d-flex flex-wrap gap-4 p-4">
      {campaigns.map((campaign) => (
        <CampaignCard
          key={campaign.id}
          entityName={campaign.entityName}
          bloodType={campaign.bloodType}
          date={campaign.date}
          location={campaign.location}
          units={campaign.units}
          status={campaign.status}
        />
      ))}
    </div>
  );
};

export default CampaignsList;
