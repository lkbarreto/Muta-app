import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/authProvider";
import "./index.css";

const Modal = ({ setIsOpen }) => {
  const { collectionItems, setCollectionItems, IDs, setIDs } =
    useContext(AuthContext);
  const clientsDummy = ["Simon Parrilla Sur", "Los gordales", "Dummy test"],
    MakeItem = function (X) {
      return <option key={X}>{X}</option>;
    };
  const [client, setClient] = useState("Simon Parrilla Sur");
  const [data1, setData1] = useState(0);
  const [data2, setData2] = useState(0);
  const [data3, setData3] = useState(0);
  const [data4, setData4] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(data1 * 1000 + data2 * 1000 + data3 * 1000 + data4 * 1000);
  }, [data1, data2, data3, data4]);

  const AddItem = () => {
    console.log(IDs);
    const aux = {
      id: IDs,
      date: new Date().toLocaleDateString(),
      client: client,
      total: total,
    };
    console.log(aux);
    console.log(IDs);
    setCollectionItems([ ...collectionItems, aux]);
    setIDs(IDs + 1);
    console.log(IDs);
    setIsOpen(false);
  };
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Nueva Entrada</h5>
          </div>

          <div className="modalContent">
            <form onSubmit={AddItem}>
              <div className="clientSection">
                <label className="subtitle">Cliente:</label>
                <select
                placeholder="hol"
                  required
                  value={client}
                  onChange={(e) => {
                    setClient(e.target.value);
                  }}
                >
                  {clientsDummy.map(MakeItem)}
                </select>
              </div>

              <div className="dataSection">
                <label className="subtitle">Recolección:</label>

                <div className="rowForm">
                  <label>Aceite Cocina Usado</label>
                  <input
                    type={"number"}
                    value={data1}
                    onChange={(e) => {
                      setData1(e.target.value);
                    }}
                  ></input>
                </div>

                <div className="rowForm">
                  <label>Trampa de grasa</label>
                  <input
                    type={"number"}
                    value={data2}
                    onChange={(e) => {
                      setData2(e.target.value);
                    }}
                  ></input>
                </div>

                <div className="rowForm">
                  <label>Pimpina Pasta</label>
                  <input
                    type={"number"}
                    value={data3}
                    onChange={(e) => {
                      setData3(e.target.value);
                    }}
                  ></input>
                </div>

                <div className="rowForm">
                  <label>Pimpina PET</label>
                  <input
                    type={"number"}
                    value={data4}
                    onChange={(e) => {
                      setData4(e.target.value);
                    }}
                  ></input>
                </div>
              </div>

              <div className="totalSection">
                <label className="subtitle">Recolección:</label>
                <label className="total">$ {total}</label>
              </div>
            </form>
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button
                disabled ={total == 0}
                className={total == 0? 'createBtnDisabled': 'createBtn' }
                onClick={() => AddItem()}
              >
                CREAR 
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
