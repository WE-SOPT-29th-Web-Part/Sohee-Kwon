import Card from "./Card";
import Loading from "./Loading";
import { UserData, ChangeUserData, Status } from "../../types/interface";

interface ResultProps {
  userData: UserData;
  changeUserData: ChangeUserData;
}

function Result(props: ResultProps) {
  const { userData, changeUserData } = props;

  switch (userData.status) {
    case Status.PENDING:
      return <Loading />;
    case Status.RESOLVED:
      return <Card userData={userData} changeUserData={changeUserData} />;
    case Status.REJECTED:
      return <h2>User Not Found</h2>;
    case Status.IDLE:
    default:
      return <></>;
  }
}

export default Result;
