import React, { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../context";
export default function Enter() {
  const context = useContext(Context);
  const [state, setState] = useState({ to: "COP", from: "USD", amount: "" });
  const curre = context.state.currencies;
  function handleChange(event) {
    event.preventDefault();
    setState({ ...state, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (state.amount === "") {
      return;
    }
    context.dispatch({ type: "ADDCHAT", payload: state.amount });
    const options = {
      method: "POST",
      url: "https://pruebasolati-backend.up.railway.app/convert",
      data: state,
    };
    axios
      .request(options)
      .then(function (res) {
        console.log(res.data);
        context.dispatch({ type: "ADDCHAT", payload: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    setState({
      ...state,
      amount: "",
    });
  }
  return (
    <form>
      {" "}
      <label> De </label>
      <select
        className="form-select"
        name="from"
        id="from"
        onChange={handleChange}
        value={state.from}
        style={{ width: "500px" }}
      >
        {curre.map((p) => {
          return (
            <option value={p.id} key={p.id}>
              {p.name}
            </option>
          );
        })}
      </select>
      <label> A </label>
      <select
        className="form-select"
        name="to"
        id="to"
        onChange={handleChange}
        value={state.to}
        style={{ width: "500px" }}
      >
        {curre.map((p) => {
          return (
            <option value={p.id} key={p.id}>
              {p.name}
            </option>
          );
        })}
      </select>
      <div
        className="input-group mb-3"
        style={{ width: "500px", paddingTop: "12px" }}
      >
        <input
          aria-describedby="inputGroup-sizing-default"
          className="form-control"
          type="text"
          placeholder="Escribe la cantidad..."
          name="amount"
          onChange={(e) => handleChange(e)}
          value={state.amount}
          required
        />
      </div>{" "}
      <button
        className="btn btn-secondary"
        type="submit"
        style={{ width: "500px" }}
        onClick={(event) => {
          handleSubmit(event);
        }}
      >
        Enter
      </button>
    </form>
  );
}
