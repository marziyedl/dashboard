import { faHomeAlt, faShop, faTag } from "@fortawesome/free-solid-svg-icons";
import DetailCard from "components/common/DetailCard";
import LineChart from "components/home/LineChart";
import { Col, Row } from "reactstrap";

function Index() {
  return (
    <>
      <Row className="justify-content-center mt-3">
        <Col sm="4">
          <DetailCard text="Total sensor" icon={faShop} />
        </Col>
        <Col sm="4">
          <DetailCard text="Total sensor" icon={faTag} />
        </Col>
        <Col sm="4">
          <DetailCard text="Total sensor" icon={faHomeAlt} />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col sm="12">
          <LineChart />
        </Col>
      </Row>
    </>
  );
}

export default Index;
