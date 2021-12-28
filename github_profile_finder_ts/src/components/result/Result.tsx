import Card from "./Card";
import Loading from "./Loading";
import { UserData, Status } from "../../lib/interface";

interface ResultProps {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

function Result(props: ResultProps) {
  const { userData, setUserData } = props;

  switch (userData.status) {
    case Status.PENDING:
      return <Loading />;
    case Status.RESOLVED:
      return <Card userData={userData} setUserData={setUserData} />;
    case Status.REJECTED:
      return <h2>User Not Found</h2>;
    case Status.IDLE:
    default:
      return <></>;
  }
}

export default Result;
