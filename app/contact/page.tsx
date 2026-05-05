import Footer from "@/components/Footer";
import Landing from "@/components/Landing";

const page = () => {
  return (
    <div>
      <Landing
        bgImage="/landing/OSACA-Journal.jpg"
        subtitle="Contact"
        textColor="#FF3850"
        highlightColor="#FF3850"
        title={
          <>
            Get <br />
            in *touch* <br />
            & say hi <br />
          </>
        }
      />
      <Footer />
    </div>
  );
};

export default page;
