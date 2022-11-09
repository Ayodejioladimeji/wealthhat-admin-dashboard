import React from "react";
import { useSelector } from "react-redux";
import Layout from "../common/Layout";
import CreateAgents from "./../components/agent/CreateAgent";

// COMPONENTS

//

const CreateAgent = () => {
  const { toggle } = useSelector((state) => state.utils);

  //
  return (
    <Layout>
      <div id={toggle ? "response" : "responsive"}>
        <CreateAgents />
      </div>
    </Layout>
  );
};

export default CreateAgent;
