import axios from "axios";
import React, { useEffect, useState } from "react";

const CompleteTracks = () => {
  return (
    <div className="complete-tracks">
      <div className="searchBar w-full text-center">
        <input
          className="p-3 text-xl w-96 rounded-2xl placeholder:text-sm outline-none my-10 "
          type="text"
          placeholder="Search for the trainer, language or genre..."
        />
      </div>
    </div>
  );
};

export default CompleteTracks;
