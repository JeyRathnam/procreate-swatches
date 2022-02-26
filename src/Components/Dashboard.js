import { useParams } from "react-router";

export default function Dashboard() {
  const params = useParams();

  console.log(params);

  return <div> Dashboard</div>;
}
