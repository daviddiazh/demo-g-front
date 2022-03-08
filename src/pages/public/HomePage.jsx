import image from "../../media/googleLogo.png";
import { app, google } from "../../service/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFormData from "../../hooks/UseFormData";
import { postUser, getUser } from "../../app/middleware/payloadProjects";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PERFIL from "../../utils/perfil.png";

const HomePage = () => {
  const [registro, setRegistro] = useState(false);
  const { form, formData, updateFormData } = useFormData();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    if (registro) {
      app
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.pass)
        .then((user) =>
          dispatch(
            postUser(
              user.user.multiFactor.user.email,
              user.user.multiFactor.user.uid,
              PERFIL,
              formData.nombre
            )
          )
        )
        .catch((error) =>
          toast.error("Usuario ya existe", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        );
      form.current.reset();
    } else {
      app
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.pass)
        .then((user) => dispatch(getUser(user.user.multiFactor.user.uid)))
        .catch((error) =>
          toast.error("Usuario y/o contraseña incorrectos", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        );
    }
  };

  const handler = () => {
    app
      .auth()
      .signInWithPopup(google)
      .then((user) => {
        dispatch(getUser(user.user.multiFactor.user.uid));
        dispatch(
          postUser(
            user.user.multiFactor.user.email,
            user.user.multiFactor.user.uid,
            user.user.multiFactor.user.photoURL,
            user.user.multiFactor.user.displayName
          )
        );
        navigate("/private/HomePrivate");
      });
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={submitForm}
        onChange={updateFormData}
        className="mt-5 py-5 px-5 form-ingreso"
      >
        <h1 style={{ margin: "50px" }}>
          {registro ? "Regístrate" : "Iniciar Sesión"}
        </h1>

        {registro ? (
          <input
            className="form-control"
            style={{ margin: "20px 0" }}
            type="text"
            name="nombre"
            placeholder="Nombre de Empresa"
            required
          />
        ) : null}

        <input
          className="form-control"
          style={{ margin: "20px 0" }}
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          required
        />

        <input
          className="form-control"
          style={{ margin: "20px 0" }}
          type="password"
          name="pass"
          placeholder="Contraseña"
          required
        />

        {registro ? (
          <button type="submit" className="btn btn-primary" to="/dashboard">
            Registrarme
          </button>
        ) : (
          <button type="submit" className="btn btn-primary" to="/dashboard">
            Iniciar Sessión
          </button>
        )}

        <button
          type="submit"
          onClick={() => setRegistro(!registro)}
          className="btn-registro-login"
          style={{ border: "none", margin: "30px 0" }}
        >
          {registro
            ? "¿Ya tienes cuenta? ¡Inicia sesión!"
            : "¿No tienes cuenta? ¡Registrate, es gratis!"}
        </button>
      </form>
      {/* <button className="">
        <div className="">
          <img src={image} width={30} className="" />
          <span onClick={handler} className="">
            Ingresa con tu cuenta Google
          </span>
        </div>
      </button> */}

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default HomePage;
