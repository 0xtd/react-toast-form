"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [disable, setDisable] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName && !phone) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/lead-form', {
        fullName,
        phone,
      });

      if (res.status === 201) {
        toast.success("Form submitted successfully");
        const form = e.target;
        form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="flex flex-col text-center justify-center items-center mt-28">
      <form className="border border-zinc-600 p-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full h-9 p-3 text-sm border border-zinc-600 mb-2 focus:outline-none"
          onChange={e => setFullName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter your phone number"
          className="w-full h-9 p-3 text-sm border border-zinc-600 focus:outline-none"
          onChange={e => setPhone(e.target.value)}
        />
        <button className="w-full h-12 p-3 text-sm bg-zinc-600 text-white mt-2" type="submit" disabled={disable ? true : false }>
          Submit
        </button>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
