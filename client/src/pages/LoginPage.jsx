import { useState } from "react";

export default function LoginPage() {
    const [errors, setErrors] = useState({});
    const [formValues, setFormValues] = useState({ email: "", password: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        validateInputs();

        // Agregar codigo cuando todo esté bien
        if(!errors) {
            alert("Ingresando")
        }
    };

    const validateInputs = () => {
        if (!formValues.email) {
            setErrors({ ...errors, email: "* Campo requerido" });
        }

        if (!formValues.password) {
            setErrors({ ...errors, password: "* Campo requerido" });
        }
    };

    return (
        <div className="w-screen min-h-screen flex items-center justify-center bg-snow">
            <section className="md:w-1/3 xl:w-1/5 bg-white p-6 rounded-md shadow-lg flex flex-col gap-6">
                <h2 className="text-center font-semibold text-2xl">
                    <i className="fa-regular fa-user"></i> Iniciar Sesión
                </h2>
                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="border rounded-md outline-none px-2 py-1"
                            onChange={handleChange}
                            value={formValues.email}
                        />
                        {errors.email && (
                            <div className="text-xs text-red-500">
                                {errors.email}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="border rounded-md outline-none px-2 py-1"
                            onChange={handleChange}
                            value={formValues.password}
                        />

                        {errors.password && (
                            <div className="text-xs text-red-500">
                                {errors.password}
                            </div>
                        )}
                    </div>

                    <button className="bg-night rounded-md text-snow uppercase p-2 mt-2">
                        Ingresar
                    </button>
                </form>
                <p className="text-center text-neutral-600 text-sm">
                    ¿No tienes una cuenta?{" "}
                    <a href="/register" className="underline text-neutral-900">
                        Regístrate
                    </a>
                </p>
            </section>
        </div>
    );
}
