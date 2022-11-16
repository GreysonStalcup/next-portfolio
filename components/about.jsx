import Image from "next/image";
function About() {
  return (
    <div className=" py-10 px-5 rounded-lg lg:max-w-4xl lg:mx-auto ">
      <div className="group">
        <Image
          src="/headshot.jpg"
          alt="headshot"
          width={150}
          height={150}
          className="mx-auto rounded-full shadow-2xl ease-in-out duration-500 hover:rotate-6 hover:scale-125"
        />
      </div>
      <p className="text-center py-5">
        Hello there! My name is Greyson and I am a{" "}
        <strong>
          <span className="text-blue-600">Web Developer</span>
        </strong>
        !
      </p>
    </div>
  );
}

export default About;
