import React, { useState, useContext, useEffect } from "react";
import "./index.css";
import Modal from "../../../../components/ModalNew";
import { AuthContext } from "../../../../context/authProvider";
export default function Collection() {
  const [showModal, setShowModal] = useState(false);
  const { collectionItems, setCollectionItems } = useContext(AuthContext);

  const handleDrawerOpen = () => {
    setShowModal(true);
  };

  useEffect(() => {
    console.log("cambio el array");
    console.log(collectionItems);
  }, [collectionItems]);

  return (
    <div className="mainCollection">
      <span className="titleCollection">Recolecciones</span>

      <div className="tabCollection">
        <button className="tablinks">Hoy</button>
        <button disabled className="tablinks">
          Todas
        </button>
      </div>
      <div className="toolBar">
        <div className="leftTollbar">
          <div className="tollBarInput">
            <span>Buscar</span>
            <input placeholder="Parámetro de busqueda"></input>
          </div>

          <div>
            <button className="tollbarButton">
              <span>Filtrar</span>{" "}
              <img src={require("../../../../assets/filter.png")}></img>
            </button>
          </div>

          <div>
            <button className="tollbarButton">
              Organizar <img src={require("../../../../assets/grid.png")}></img>
            </button>
          </div>
        </div>

        <div className="rightTollbar">
          <button onClick={handleDrawerOpen}>
            NUEVA ENTRADA
            <img src={require("../../../../assets/plus-circle.png")}></img>
          </button>
        </div>
      </div>

      {showModal && <Modal setIsOpen={setShowModal} />}

      <div className="tableContainer">
        {collectionItems.length > 0 ? (
          <table id="html-data-table">
            <tbody>
              <tr>
                <th>
                  <input type="checkbox" name="news2"></input>
                </th>
                <th>ID</th>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Estado</th>
                <th>Materiales</th>
                <th>Pago Total</th>
              </tr>

              {collectionItems.map((item) => (
                <tr>
                  <td>
                    <input type="checkbox" name="news2" value="1"></input>
                  </td>
                  <td>{item.id}</td>
                  <td>{item.date}</td>
                  <td>{item.client}</td>
                  <td className="status">
                    <div className="statusChip">Recogido</div>
                  </td>
                  <td >
                    ACU, PET, Pasta
                  </td>
                  <td>$ {item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="message">
            <h1>Parece que aun no ha recogido algo.</h1>
            <h3>
              Puedes registrar una recolección haciendo Click en el boton de
              arriba
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
