import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getEmployeeById,
  updateEmployee,
} from "../../services/employeeService";
import FormEmployee from "../../components/FormEmployee";
import "./UpdateUserPage.css";

function UpdateUserPage() {
  // id que viene de la URL
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });

  //Para los inputs del formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData, //copio todo lo que ya esta en el formData
      [name]: value, //solo cambio el campo que corresponde
    });
  };

  //coloca los datos del usuario con su ID en el formulario para actualizar
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const { data } = await getEmployeeById(id);
        setFormData(data);
      } catch (error) {
        console.log("Error fetching user: ", error.message);
      }
    };
    fetchEmployee();
  }, [id]);

  //Para el boton submit del form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await updateEmployee(id, formData);
      console.log("User update ", data);

      navigate("/");
    } catch (error) {
      console.log("Error updating user: ", error.message);
    }
  };

  return (
    <>
      <div className="center-form">
        <h1>Edit Employee</h1>
        <FormEmployee
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          buttonText="Edit Employee"
        />
      </div>
    </>
  );
}

export default UpdateUserPage;
