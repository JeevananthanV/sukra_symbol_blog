import React from "react";
import "./SukraPeedaMudra.css";
import mudraImage from "./assets/mudra.jpg";
import varahiBg from "./assets/varahi_bg.png";
import templeBg from "./assets/temple_bg.png";

// Sub-component: SectionTitle
const SectionTitle = ({ title }) => {
  return (
    <h2 className="sp-section-title">{title}</h2>
  );
};

// Sub-component: InfoCard (used in Preparation Section)
const InfoCard = ({ icon, heading, desc }) => {
  return (
    <div className="sp-prep-card">
      <span className="sp-prep-icon" role="img" aria-label={heading}>
        {icon}
      </span>
      <h3 className="sp-prep-heading">{heading}</h3>
      <p className="sp-prep-desc">{desc}</p>
    </div>
  );
};

// Sub-component: StepCard (used in Meditation Method Section)
const StepCard = ({ num, text }) => {
  return (
    <div className="sp-method-card">
      <span className="sp-method-number">{num}</span>
      <p className="sp-method-text">{text}</p>
    </div>
  );
};

// Sub-component: GuidelineCard (used in Important Guidelines Section)
const GuidelineCard = ({ icon, text }) => {
  return (
    <div className="sp-guidelines-card">
      <span className="sp-guideline-icon" role="img" aria-label="guideline">
        {icon}
      </span>
      <p className="sp-guideline-text">{text}</p>
    </div>
  );
};

// Sub-component: BenefitCard (used in Benefits Section)
const BenefitCard = ({ icon, text }) => {
  return (
    <div className="sp-benefit-card">
      <span className="sp-benefit-icon" role="img" aria-label="benefit">
        {icon}
      </span>
      <p className="sp-benefit-text">{text}</p>
    </div>
  );
};

// Main Component: SukraPeedaMudra
const SukraPeedaMudra = () => {
  return (
    <main className="sp-page-container">
      {/* Breadcrumb Section */}
      <div className="sp-breadcrumb-container sp-fade-in">
        <div className="sp-breadcrumb">
          <a href="/">Home</a>
          <span className="sp-breadcrumb-separator">/</span>
          <span className="sp-breadcrumb-current">சுக்ர பீட முத்திரை</span>
        </div>
      </div>

      {/* Devotional Hero Section */}
      <header className="sp-hero-section sp-fade-in" style={{ backgroundImage: `url(${varahiBg})` }}>
        <div className="sp-hero-overlay"></div>
        <div className="sp-hero-content">
          <h1 className="sp-title">சுக்ர பீட முத்திரை</h1>
          <p className="sp-subtitle">
            உங்கள் தியானத்தை மேம்படுத்தி உலகியல் மற்றும் தெய்வப் பணிகளில் தெளிவை அளிக்கும் தியான முத்திரை.
          </p>
          <div className="sp-ornament-divider sp-hero-divider">
            <span className="sp-ornament-line"></span>
            <span className="sp-ornament-symbol">🪷</span>
            <span className="sp-ornament-line"></span>
          </div>
        </div>
        <div className="sp-scroll-indicator">
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </header>

      {/* Featured Image */}
      <section className="sp-section sp-section-narrow sp-fade-in" style={{ paddingBottom: "40px" }}>
        <figure className="sp-image-frame sp-featured-image">
          <img src={mudraImage} alt="சுக்ர பீட முத்திரை தியான நிலை" />
        </figure>
      </section>

      {/* Introduction */}
      <section className="sp-section sp-section-narrow sp-fade-in" style={{ paddingTop: "0px" }}>
        <article className="sp-card-introduction">
          <p className="sp-paragraph">
            சுக்ர பீட முத்திரை என்பது நமது தியானப் பயிற்சியை ஆழமாக்கி, மனதை ஒருமுகப்படுத்த உதவும் ஒரு உன்னதமான ஆன்மீக வழிமுறையாகும். இந்த முத்திரை நமது மூளையின் செயல்பாடுகளை சீரமைத்து, தெளிவான சிந்தனையையும், மன அமைதியையும் வழங்குகிறது.
          </p>
          <p className="sp-paragraph">
            இதன் மூலம் நமது உலகியல் கடமைகளையும், ஆன்மீக அல்லது தெய்வப் பணிகளையும் நாம் எவ்வித குழப்பமும் இன்றி செம்மையாகச் செய்ய முடியும். இந்தச் புனிதமான தியான முறையை தினமும் முறைப்படி பயிற்சி செய்வதன் மூலம் ஆன்மீக விழிப்புணர்வையும், உன்னத அமைதியையும் அடையலாம்.
          </p>
        </article>
      </section>

      {/* Preparation Section */}
      <section className="sp-section sp-fade-in">
        <SectionTitle title="தியானத்திற்கு தயாராகுங்கள்" />
        <div className="sp-prep-grid">
          <InfoCard icon="🪔" heading="திசை" desc="வடக்கு நோக்கி அமருங்கள்" />
          <InfoCard icon="🖼" heading="காட்சி" desc="தேர்ந்தெடுத்த படத்தை வைத்துக் கொள்ளுங்கள்" />
          <InfoCard icon="💡" heading="ஒளி" desc="விளக்கு வெளிச்சம் ஏற்பாடு செய்யுங்கள்" />
          <InfoCard icon="🙏" heading="மனநிலை" desc="அமைதியான மனநிலையுடன் தொடங்குங்கள்" />
        </div>
      </section>

      {/* Meditation Method */}
      <section className="sp-section sp-fade-in">
        <SectionTitle title="தியான முறை" />
        <div className="sp-split-layout">
          <div className="sp-split-left">
            <figure className="sp-image-frame" style={{ maxWidth: "480px" }}>
              <img src={mudraImage} alt="சுக்ர பீட முத்திரை செயல்முறை விளக்கம்" />
            </figure>
          </div>
          <div className="sp-split-right">
            <StepCard num="01" text="வலது கை குரு விரலையும் சுக்கிர விரலையும் ஒன்றாக இணைக்கவும்." />
            <StepCard num="02" text="இடது கையிலும் அதேபோல் செய்யவும்." />
            <StepCard num="03" text="இரு கைகளையும் இணைத்து டைமண்ட் துவாரத்தை உருவாக்கவும்." />
            <StepCard num="04" text="அந்த துவாரம் வழியாக தேர்ந்தெடுத்த படத்தைப் பார்க்கவும்." />
            <StepCard num="05" text="தினமும் அரை மணி நேரம் பயிற்சி செய்யவும்." />
          </div>
        </div>
      </section>

      {/* Important Instructions */}
      <section className="sp-section sp-section-narrow sp-fade-in">
        <SectionTitle title="முக்கிய தியான வழிமுறைகள்" />
        <div className="sp-guidelines-grid">
          <GuidelineCard icon="💭" text="எந்த எண்ணங்களையும் கவனிக்க வேண்டாம்." />
          <GuidelineCard icon="👁" text="தெய்வீக காட்சிகளுக்கு முக்கியத்துவம் அளிக்க வேண்டாம்." />
          <GuidelineCard icon="🤫" text="அனுபவங்களை பிறரிடம் கூற வேண்டாம்." />
          <GuidelineCard icon="🪷" text="அமைதியாக தொடர்ந்து பயிற்சி செய்யுங்கள்." />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="sp-section sp-fade-in">
        <SectionTitle title="இந்த தியானத்தின் பயன்கள்" />
        <div className="sp-benefits-grid">
          <BenefitCard icon="✨" text="தியானம் ஆழமாகும்" />
          <BenefitCard icon="🧘" text="மன அமைதி" />
          <BenefitCard icon="🌸" text="உலகியல் கடமைகள் தெளிவாகும்" />
          <BenefitCard icon="🪔" text="தெய்வப் பணிகள் தாமாகவே புலனாகும்" />
        </div>
      </section>

      {/* Devotional Immersive Background Section */}
      <section className="sp-scrolling-section sp-fade-in" style={{ backgroundImage: `url(${templeBg})` }}>
        <div className="sp-scrolling-overlay"></div>
        <div className="sp-scrolling-content">
          <blockquote className="sp-scrolling-quote">
            "அம்பிகை வாராஹியின் அருட்பார்வை உங்களுக்குள் ஆன்மீக ஒளியையும் பேரமைதியையும் மலரச் செய்யட்டும்."
          </blockquote>
          <div className="sp-scrolling-divider">
            <span className="sp-scrolling-line"></span>
            <span className="sp-scrolling-symbol">ॐ</span>
            <span className="sp-scrolling-line"></span>
          </div>
          <span className="sp-scrolling-message">ஜெய் வாராஹி பீடம்</span>
        </div>
      </section>

      {/* Final Image Section */}
      <section className="sp-section sp-section-narrow sp-fade-in">
        <figure className="sp-image-frame sp-final-image">
          <img src={mudraImage} alt="சுக்ர பீட முத்திரை முழு வடிவம்" />
          <figcaption className="sp-figcaption">சுக்ர பீட முத்திரை</figcaption>
        </figure>
      </section>

      {/* Closing Section */}
      <section className="sp-closing-section sp-fade-in" style={{ backgroundImage: `url(${varahiBg})` }}>
        <div className="sp-closing-overlay"></div>
        <div className="sp-closing-container">
          <h3 className="sp-closing-heading">சுக்ர பீட முத்திரை</h3>
          <blockquote className="sp-closing-quote">
            "அடுத்தடுத்து நீங்கள் செய்ய வேண்டிய உலகியல் கடமைகளும், தெய்வப் பணிகளும் தாமாகவே உங்களுக்குள் புலனாகும்."
          </blockquote>
          <div className="sp-closing-actions">
            <button className="sp-closing-btn sp-closing-btn-primary" onClick={(e) => e.preventDefault()}>Explore Mantras</button>
            <button className="sp-closing-btn sp-closing-btn-secondary" onClick={(e) => e.preventDefault()}>Support Peedam</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SukraPeedaMudra;
