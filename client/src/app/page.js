import Image from "next/image";
import Register from "@/components/Register";
import ToDo from "@/components/ToDo";
import Form from "@/components/Form";

export default function Home() {
  const toDos = [
    {
      title: "Sekolah",
      desc: "Belajar matematika",
      due_date: "2024-04-01",
    },
    {
      title: "Makan siang",
      desc: "Di jam 13.00",
      due_date: "2024-04-20",
    },
    {
      title: "Sekolah",
      desc: "Belajar matematika",
      due_date: "2024-04-01",
    },
  ];
  return (
    <div>
      {/* <Register /> */}
      {/* <ToDo toDos={toDos} /> */}
      <Form />
    </div>
  );
}
