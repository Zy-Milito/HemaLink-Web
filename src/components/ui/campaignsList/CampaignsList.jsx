import { campaigns } from "../../../data/donations.js";
import DonationCard from "./campaignCard/CampaignCard.jsx";
import './campaignsList.css'

const DonationsList = () => {
  return (
    <div className="d-flex flex-wrap gap-4 p-4">
      {campaigns.map((campaign) => (
        <DonationCard
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

export default DonationsList;
