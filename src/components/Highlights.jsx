// src/components/Highlights.jsx
import temple1 from "../assets/Repositories/drone view.jpg";
import temple2 from "../assets/Repositories/hero-city.png";
import temple3 from "../assets/Repositories/temple-with-ther.jpg";

const highlights = [
  {
    title: "வரலாறு",
    description:
      "திருவாரூர் சோழர்களின் ஐந்து பாரம்பரிய தலைநகரங்களுள் ஒன்றாகும். (ஆரூர், ஆவூர், குடவாயில், வல்லம், உறந்தை) திருவாரூரை ஆண்ட மனுநீதி சோழன், பசுவிற்கு நீதி வழங்க தன் சொந்த மகனையே தேரை ஏற்றி கொன்றது வரலாற்றில் நீதிக்கு சிறந்த எடுத்துக்காட்டாக அறியப்படுகிறது.",
    image: temple1,
  },
  {
    title: "தேர்திருவிழா",
    description:
      "திருவாரூர் தேரானது, ஆசியாவிலேயே மிகப் பெரிய தேராகும். ஆயிரக்கணக்கான பக்தர்கள் பங்கேற்று தேரை வடம்பிடித்து இழுக்கின்றனர். அலங்கரிக்கப்பட்ட ஆழித்தேரின் உயரம் 96 அடியும், 300 டன் எடையும் ஆகும். இந்நிகழ்ச்சியில் தமிழகம் முழுவதிலும் இருந்து லட்சக்கணக்கான மக்கள் கலந்து கொள்கின்றனர்.",
    image: temple2,
  },
  {
    title: "திருவாரூர் தியாகராஜர் கோயில்",
    description:
      'திருவாரூர் தியாகராஜர் கோயில், மிகவும் புகழ்பெற்ற பழமையானதும், பிரம்மாண்டமானதும் ஆன பெரிய கோயில் ஆகும். இக்கோயில் நாயன்மார்களால் பாடல் பெற்ற தலங்களில் ஒன்றாகவும், பஞ்சபூதத் தலங்களில் பிருதிவித் தலமாகவும் உள்ளது. தேவாரப் பாடல் பெற்ற தலங்களில், சோழ நாடு காவிரி தென்கரைத் தலங்களில் அமைந்துள்ள 87ஆவது சிவத்தலமாகும்.',
    image: temple3,
  },
];

export default function Highlights() {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {highlights.map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow hover:shadow-xl transition p-4 flex flex-col"
        >
          <img
            src={item.image}
            alt={item.title}
            className="rounded-lg mb-4 object-cover h-48 w-full"
          />
          <h3 className="text-lg font-bold text-green-700">{item.title}</h3>
          <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
        </div>
      ))}
    </section>
  );
}
