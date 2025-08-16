import { Table, Button } from "react-bootstrap";

function TableEmployee({ employees, handleUpdate, handleDelete }) {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Department</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.department}</td>
            <td>
              <Button
                variant="outline-secondary"
                onClick={() => handleUpdate(employee.id)}
              >
                Update
              </Button>{" "}
              <Button
                variant="outline-danger"
                onClick={() => handleDelete(employee.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableEmployee;
