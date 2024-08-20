import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { changeLoginState } from "../features/login/loginSlice";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/auth`, data, { withCredentials: true })
      .then(() => {
        dispatch(changeLoginState(true));
        navigate(-1)
      })
      .catch((Response) => console.log(Response.error));
  };
  return (
    <main className="2xl:container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-10">Sign In</h1>
      <form
        className="flex flex-col items-center h-min w-full max-w-xl mx-auto  p-6 bg-blue-100 shadow-md rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="flex flex-col w-full mb-4">
          <label htmlFor="Email" className="text-lg font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <span className="text-xl text-red-599">Email is required</span>
          )}
        </fieldset>
        <fieldset className="flex flex-col w-full mb-4">
          <label htmlFor="Password" className="text-lg font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "password is required",
              pattern: {
                value: new RegExp(
                  "^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                ),
                message:
                  "Password must include at least one number, one special character, one lowercase letter, and one uppercase letter",
              },
              minLength: {
                value: 8,
                message: "Must have atleast 8 characters",
              },
              maxLength: { value: 64, message: "Maximum leangth is 64" },
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </fieldset>
        <input
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>
    </main>
  );
}
