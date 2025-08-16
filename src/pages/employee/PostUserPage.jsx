import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../../services/employeeService";
import FormEmployee from "../../components/FormEmployee";
import "./PostUserPage.css";

function PostUserPage() {
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

  const navigate = useNavigate();

  //Para el envio del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); //para que no se recargue la pagina al enviar el formulario
    try {
      const { data } = await createEmployee(formData);
      console.log("Employee created ", data);
      navigate("/"); //envia automaticamente al home
    } catch (error) {
      console.log("Error creating employee ", error.message);
    }
  };

  return (
    <>
      <div className="center-form">
        <h1>Post New Employee</h1>
        <FormEmployee
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          buttonText="Post Employee"
        />
      </div>
    </>
  );
}

export default PostUserPage;
