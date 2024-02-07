import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import Data from "../data/initial-data.json";

function Formulaire() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [datas, setDatas] = useState(Data);

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((response) => console.log(response))
  }, []);

  return (
    <div>
      <p>Ici</p>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input
          {...register(
            "Name",
            { required: true, maxLength: 12 },
            { pattern: /^[A-Za-z]+$/i }
          )}
          type="text"
          name="Name"
          id="Name"
        />
        {errors.Name && (
          <p style={{ color: "red" }}>
            le chant necessite un nom de 12 lettre maximum
          </p>
        )}
        <button>Send</button>
      </form>
    </div>
  );
}
export default Formulaire;
