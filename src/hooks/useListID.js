import { useState, useEffect } from "react";

const alphabet =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const idLength = 8;

const generateListID = () => {
  let listID = "";
  for (let i = 0; i < idLength; i++) {
    listID += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }
  return listID;
};

export default function useListID() {
  // Storage
  const storedID = JSON.parse(window.localStorage.getItem("listID"));
  const id = storedID || generateListID();
  const [listID, setListID] = useState(id);
  // const [history, setHistory] = useState([id]);

  useEffect(() => {
    window.localStorage.setItem("listID", JSON.stringify(listID));
  });

  return [listID, setListID];
}

// if no params
// -- if storage, load stored todos
// -- else default
// if params
// -- bypass storage
