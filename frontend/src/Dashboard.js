import { useEffect, useState } from "react";
import api from "./api";

export default function Dashboard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    api.get("/leads").then(res => setLeads(res.data));
  }, []);

  return (
    <div>
      <h2>CRM Dashboard</h2>
      {leads.map(l => (
        <div key={l._id}>{l.name} - {l.status}</div>
      ))}
    </div>
  );
}
