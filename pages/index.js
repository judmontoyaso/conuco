import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex ml-20">
        <Image
          src="/Logotipo.png"
          alt="Picture of the author"
          width={350}
          height={350}
        />
      </section>
    </>
  );
}
