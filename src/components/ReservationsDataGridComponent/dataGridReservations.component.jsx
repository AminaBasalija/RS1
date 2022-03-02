import React, { useEffect, useState } from "react";

import DataGrid, {
  Column,
  Editing,
  Popup,
  Paging,
  Form,
} from "devextreme-react/data-grid";
import "devextreme-react/text-area";

import { LoadPanel } from "devextreme-react/load-panel";
import agent from "../../api/agent";

const DataGridReservations = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    console.log(params.get("id"));
    agent.Reservations.list(params.get("id")).then((response) => {
      setData(response);
      console.log(data);
    });
  }, []);

  if (data == []) return <LoadPanel></LoadPanel>;
  return (
    <div id="data-grid-demo">
      <DataGrid
        columnAutoWidth={true}
        allowColumnReordering={true}
        dataSource={data}
        keyExpr="reservationId"
        showBorders={true}
      >
        <Paging enabled={false} />
        {/* <Editing
          mode="popup"
          allowUpdating={true}
          allowAdding={true}
          allowDeleting={true}
        >
          <Popup title="Brend Info" showTitle={true} width={700} height={525} />
          <Form>
            <Item itemType="group" colCount={2} colSpan={2}>
              <Item dataField="naziv" isRequired={true} />
            </Item>
            <Item itemType="group" caption="Slika" colCount={2} colSpan={2}>
              <Item dataField="Picture" caption="Slika" colSpan={2} />
            </Item>
          </Form>
        </Editing> */}

        <Column dataField="reservationId" caption="ReservationId" />
        <Column dataField="hotelName" caption="Hotel name" />
        <Column dataField="number" caption="Room number" />
        <Column dataField="floor" caption="Floor" />
        <Column dataField="rate" caption="Rate" />
        <Column dataField="start" caption="Start date" />
        <Column dataField="end" caption="End date" />
      </DataGrid>
    </div>
  );
};

export default DataGridReservations;
