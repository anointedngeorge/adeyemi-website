export default function Reputation() {
  return (
    <section className="relative py-24 w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('./img/sli2.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Stronger overlay for better text readability */}
        <div className="absolute inset-0 bg-gray-950/35"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gray-950/75  p-10 rounded-lg">
          <p className="text-lg text-blue-200 leading-relaxed font-light drop-shadow-md">
            {`The Firm's reputation for utmost integrity, transparency and professionalism is unequalled and are
            demonstrated by our Partners and staff on all engagements. Our practice is anchored on the highest ethical
            and professional standards designed to consistently add value to our clients' businesses/operations while
            surpassing their expectations.`}
          </p>
        </div>
      </div>
    </section>
  )
}
