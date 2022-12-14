import { ImProfile } from "react-icons/im";
import { MdOutlineAutoGraph } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiTable } from "react-icons/bi";

const links = [
  {
    id: 1,
    text: "my profile",
    path: "profile",
    icon: <ImProfile />,
  },
  {
    id: 2,
    text: "my stats",
    path: "/",
    icon: <MdOutlineAutoGraph />,
  },

  {
    id: 3,
    text: "create new job",
    path: "add-job",
    icon: <AiOutlineAppstoreAdd />,
  },
  {
    id: 4,
    text: "all jobs",
    path: "all-jobs",
    icon: <BiTable />,
  },
];

export default links;
