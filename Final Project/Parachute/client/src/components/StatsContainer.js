import { useAppContext } from "../context/appContext";
import StatItem from "./StatItem";
import Wrapper from "../assets/wrappers/StatsContainer";

const StatsContainer = () => {
  const { stats } = useAppContext();

  const defaultStats = [
    {
      title: "jobs applied",
      count: stats.applied || 0,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
    {
      title: "job offers",
      count: stats.offer || 0,
      color: "#008000",
      bcg: "#98fb98",
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
