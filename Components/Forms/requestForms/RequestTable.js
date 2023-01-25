import React from "react";
import { StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";

const RequestTable = () => {
  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title textStyle={styles.tableTitle}>
          Principal
        </DataTable.Title>
        <DataTable.Title textStyle={styles.tableTitle}>Rate</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>100,000 RWF</DataTable.Cell>
        <DataTable.Cell>12%</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title textStyle={styles.tableTitle}>
          Total Interest
        </DataTable.Title>
        <DataTable.Title textStyle={styles.tableTitle}>
          Monthly Installments
        </DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>5,236,056.46 Rwf</DataTable.Cell>
        <DataTable.Cell>253,934.27 Rwf</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default RequestTable;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
  tableTitle: {
    color: "#000000",
    fontSize: 15,
  },
});
