import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { deleteEmployee, getAllEmployees } from "../../services/employeeService";
import TableEmployee from "../../components/TableEmployee";

function DashboardPage() {
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  //Para traer todos los empleados inicializados ni bien se inicialice el componente
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const { data } = await getAllEmployees();

        setEmployees(data);
      } catch (error) {
        console.log("Error fetching employees: ", error.message);
      }
    };
    fetchEmployees();
  }, []);

  //Para que el boton Delete borre el empleado con el ID
  const handleDelete = async (employeeId) => {
    try {
      const { status } = await deleteEmployee(employeeId);

      //Si el backend devuelve 200 OK, lo quito de la tabla de la pagina
      if (status === 200) {
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee.id !== employeeId)
        );
      }

      console.log(`Employee with ID ${employeeId} deleted successfully`);
    } catch (error) {
      console.log("Error deleting employee: ", error.message);
    }
  };

  //Para el boton Update
  const handleUpdate = (employeeId) => {
    navigate(`/employee/${employeeId}`);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">Employees</h1>
            <TableEmployee employees={employees}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            ></TableEmployee>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DashboardPage;
