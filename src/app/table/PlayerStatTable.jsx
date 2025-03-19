import React from "react";
import { motion } from "framer-motion";
import { dummyData } from "./PlayerStatTablesDummyData";
import styled from "styled-components";

const TableContainer = styled.div`
  margin: 20px;
  overflow-x: auto;

  .tg {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    background-color: #f8f9fa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  th {
    background-color: #343a40;
    color: white;
    font-weight: bold;
    padding: 12px 8px;
    text-align: center;
    border: 1px solid #454d55;
  }

  td {
    padding: 8px;
    border: 1px solid #dee2e6;
    text-align: center;
  }

  tbody tr:nth-child(even) {
    background-color: #ffffff;
  }

  tbody tr:hover {
    background-color: #e9ecef;
  }

  .teamheader {
    text-align: left;
    font-weight: bold;
  }
`;

const headerData = [
  { id: "rank", short: "RANK", long: "RANK" },
  {
    id: "player",
    short: "Player",
    long: "Player Name",
    // className: "teamheader",//This is not used in the HeaderCell component
  },
  { id: "team", short: "Team", long: "Team Name" },
  { id: "pos", short: "Pos", long: "Position" },
  { id: "gp", short: "GP", long: "Games Played" },
  { id: "g", short: "G", long: "Goals" },
  { id: "a", short: "A", long: "Assists" },
  { id: "pt", short: "PT", long: "Points" },
  { id: "pp", short: "PP", long: "Power Play Goals" },
  { id: "sh", short: "SH", long: "Short Handed Goals" },
  { id: "en", short: "EN", long: "Empty Net Goals" },
  { id: "ps", short: "PS", long: "Penalty Shots" },
  { id: "pm", short: "PM", long: "Penalty Minutes" },
  { id: "sog", short: "SOG", long: "Shots on Goal" },
  { id: "soa", short: "SOA", long: "Shots on Assist" },
  { id: "gw", short: "GW", long: "Game Winning Goals" },
];

// Remove the local dummyData array since we're now importing it

const HeaderCell = ({ short, long, className }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleTap = () => {
    setExpanded(!expanded);
    setTimeout(() => {
      setExpanded(false);
    }, 1800);
  };

  return (
    <th className={className}>
      <motion.div
        style={{ cursor: "pointer" }}
        animate={{
          scale: expanded ? 1.1 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 50,
        }}
        onTap={handleTap}
      >
        {expanded ? long : short}
      </motion.div>
    </th>
  );
};

const PlayerStatTable = () => {
  return (
    <TableContainer>
      <table className="tg">
        <thead>
          <tr>
            {headerData.map((header) => (
              <HeaderCell
                key={header.id}
                short={header.short}
                long={header.long}
                className={header.className}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {dummyData.map((data) => (
            <tr key={data.id}>
              <td>{data.rank}</td>
              <td className="teamheader">{data.playerName}</td>
              <td>{data.teamLabel}</td>
              <td>{data.pos}</td>
              <td>{data.gp}</td>
              <td>{data.g}</td>
              <td>{data.a}</td>
              <td>{data.pt}</td>
              <td>{data.pp}</td>
              <td>{data.sh}</td>
              <td>{data.en}</td>
              <td>{data.ps}</td>
              <td>{data.pm}</td>
              <td>{data.sog}</td>
              <td>{data.soa}</td>
              <td>{data.gw}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default PlayerStatTable;
