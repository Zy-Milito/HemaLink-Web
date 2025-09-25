import { Card, Button, Badge } from "react-bootstrap";
import CIcon from "@coreui/icons-react";
import { cilCalendar, cilLocationPin, cilDrop } from "@coreui/icons";
import "./campaignCard.css";

const CampaignCard = ({
  id,
  entityName,
  bloodType,
  date,
  location,
  units,
  status,
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "success";
      case "Urgent":
        return "danger";
      case "Completed":
        return "info";
      default:
        return "secondary";
    }
  };

  const getBloodTypeColor = (bloodType) => {
    const colors = {
      "O+": "danger",
      "O-": "danger",
      "A+": "primary",
      "A-": "primary",
      "B+": "success",
      "B-": "success",
      "AB+": "warning",
      "AB-": "warning",
    };
    return colors[bloodType] || "dark";
  };

  return (
    <Card
      key={id}
      style={{ width: "18vw", height: "18vw" }}
      className="d-flex flex-column campaign-card"
    >
      <Card.Body className="d-flex flex-column flex-grow-1">
        <Card.Header className="bg-transparent border-0 p-0 m-0 d-flex justify-content-between align-items-center">
          <Card.Title>{entityName}</Card.Title>
          <Badge className="bloodtype-font" bg={getBloodTypeColor(bloodType)}>
            {bloodType}
          </Badge>
        </Card.Header>
        <Card.Subtitle className={`mb-4 text-${getStatusColor(status)}`}>
          {status}
        </Card.Subtitle>
        <div className="mb-3">
          <div className="d-flex align-items-center gap-2">
            <CIcon icon={cilCalendar} className="nav-icon" />
            {date}
          </div>
          <div className="d-flex align-items-center gap-2">
            <CIcon icon={cilLocationPin} className="nav-icon" />
            {location}
          </div>
          <div className="d-flex align-items-center gap-2">
            <CIcon icon={cilDrop} className="nav-icon" />
            {units}
          </div>
        </div>
        <div className="d-flex justify-content-end mt-auto">
          <Button variant="outline-primary" size="sm" className="details-btn">
            View Details
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CampaignCard;
