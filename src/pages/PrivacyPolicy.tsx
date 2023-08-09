import { Link } from "react-router-dom";
import { Navbar } from "../components";
import Footer from "../footer/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-start gap-5 px-10 py-24">
        <h1 className="text-xl sm:text-3xl opacity-80">
          chariotworks.com Privacy Policy
        </h1>

        <h2 className="text-lg">
          In respect to your privacy and policy, It is important that you are
          aware of what personal data we collect and why we collect it
        </h2>
        <p className="text-lg lg:text-xl">
          This privacy policy (“Policy”) outlines the collection, protection,
          and use of personally identifiable information (“Personal
          Information”) you may provide on the <b> chariotworks.com </b> website
          (“Website”). It also explains your choices regarding your Personal
          Information and how to access and update it. By accessing and using
          the Website, you agree to the terms of this Policy. It doesn't apply
          to companies or individuals we don't control.
        </p>

        <h3 className="font-bold text-[18px] lg:text-[20px]">
          Collection of information
        </h3>
        <p className="text-[18px] lg:text-[20px]">
          When you open the Website, our servers automatically record data your
          browser sends, like IP address, browser type, pages visited, and more.
          This helps us identify abuse and analyze usage patterns, without
          identifying specific users. The information may include the following:
        </p>
        <ul className="flex flex-col justify-center items-start">
          <li className="flex flex-row justify-center items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-black" />
            <div className="text-[17px]">name, country of residence, etc.</div>
          </li>
          <li className="flex flex-row justify-center items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-black" />
            <div className="text-[17px]">email address, address, etc.</div>
          </li>
        </ul>
        <p className="text-[18px] lg:text-[20px]">
          Some of the information we collect is directly from you via the
          Website. However, we may also collect Personal Information about you
          from other sources such as public databases and our joint marketing
          partners. You can choose not to provide us with your Personal
          Information, but then you may not be able to take advantage of some of
          the features on the Website. Users who are uncertain about what
          information is mandatory are welcome to contact us.
        </p>

        <h3 className="font-bold text-[18px] lg:text-[20px]">
          Use and processing of collected information
        </h3>
        <p className="text-[18px] lg:text-[20px]">
          In order to make the Website available to you, or to meet a legal
          obligation, we need to collect and use certain Personal Information.
          If you do not provide the information that we request, we may not be
          able to provide you with the requested products or services. Any of
          the information we collect from you may be used for the following
          purposes:
        </p>
        <ul className="flex flex-col justify-center items-start">
          <li className="flex flex-row justify-center items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-black" />
            <div className="text-[17px]">
              Respond to inquiries and offer support
            </div>
          </li>
          <li className="flex flex-row justify-center items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-black" />
            <div className="text-[17px]">Run and operate the Website</div>
          </li>
        </ul>
        <p className="text-[18px] lg:text-[20px]">
          Processing your Personal Information depends on how you interact with
          the Website, where you are located in the world and if one of the
          following applies: (i) you have given your consent for one or more
          specific purposes; this, however, does not apply, whenever the
          processing of Personal Information is subject to European data
          protection law; (ii) provision of information is necessary for the
          performance of an agreement with you and/or for any pre-contractual
          obligations thereof; (iii) processing is necessary for compliance with
          a legal obligation to which you are subject; (iv) processing is
          related to a task that is carried out in the public interest or in the
          exercise of official authority vested in us; (v) processing is
          necessary for the purposes of the legitimate interests pursued by us
          or by a third party. Note that under some legislations we may be
          allowed to process information until you object to such processing (by
          opting out), without having to rely on consent or any other of the
          following legal bases below. In any case, we will be happy to clarify
          the specific legal basis that applies to the processing, and in
          particular whether the provision of Personal Information is a
          statutory or contractual requirement, or a requirement necessary to
          enter into a contract.
        </p>

        <h3 className="font-bold text-[18px] lg:text-[20px]">
          Disclosure of information
        </h3>
        <p className="text-[18px] lg:text-[20px]">
          Depending on the requested Services or as necessary to complete any
          transaction or provide any service you have requested, we may share
          your information with your consent with our trusted third parties that
          work with us, any other affiliates and subsidiaries we rely upon to
          assist in the operation of the Website available to you. We do not
          share Personal Information with unaffiliated third parties. These
          service providers are not authorized to use or disclose your
          information except as necessary to perform services on our behalf or
          comply with legal requirements. We may share your Personal Information
          for these purposes only with third parties whose privacy policies are
          consistent with ours or who agree to abide by our policies with
          respect to Personal Information. These third parties are given
          Personal Information they need only in order to perform their
          designated functions, and we do not authorize them to use or disclose
          Personal Information for their own marketing or other purposes.
        </p>
        <p className="text-[18px] lg:text-[20px]">
          We will disclose any Personal Information we collect, use or receive
          if required or permitted by law, such as to comply with a subpoena or
          similar legal process, and when we believe in good faith that
          disclosure is necessary to protect our rights, protect your safety or
          the safety of others, investigate fraud, or respond to a government
          request.
        </p>

        <h3 className="font-bold text-[18px] lg:text-[20px]">
          Retention of information
        </h3>
        <p className="text-[18px] lg:text-[20px]">
          Depending on the requested Services or as necessary to complete any
          transaction or provide any service you have requested, we may share
          your information with your consent with our trusted third parties that
          work with us, any other affiliates and subsidiaries we rely upon to
          assist in the operation of the Website available to you. We do not
          share Personal Information with unaffiliated third parties. These
          service providers are not authorized to use or disclose your
          information except as necessary to perform services on our behalf or
          comply with legal requirements. We may share your Personal Information
          for these purposes only with third parties whose privacy policies are
          consistent with ours or who agree to abide by our policies with
          respect to Personal Information. These third parties are given
          Personal Information they need only in order to perform their
          designated functions, and we do not authorize them to use or disclose
          Personal Information for their own marketing or other purposes.
        </p>
        <p className="text-[18px] lg:text-[20px]">
          We will disclose any Personal Information we collect, use or receive
          if required or permitted by law, such as to comply with a subpoena or
          similar legal process, and when we believe in good faith that
          disclosure is necessary to protect our rights, protect your safety or
          the safety of others, investigate fraud, or respond to a government
          request.
        </p>
        <p className="text-[18px] lg:text-[20px]">
          We'll retain your Personal Information to meet legal obligations.
          After the retention period, your information will be deleted.
        </p>

        <h3 className="font-bold text-[18px] lg:text-[20px]">
          The rights of users
        </h3>
        <p className="text-[18px] lg:text-[20px]">
          You may exercise certain rights regarding your information processed
          by us. In particular, you have the right to do the following: (i) you
          have the right to withdraw consent where you have previously given
          your consent to the processing of your information; (ii) you have the
          right to object to the processing of your information if the
          processing is carried out on a legal basis other than consent; (iii)
          you have the right to learn if information is being processed by us,
          obtain disclosure regarding certain aspects of the processing and
          obtain a copy of the information undergoing processing; (iv) you have
          the right to verify the accuracy of your information and ask for it to
          be updated or corrected; (v) you have the right, under certain
          circumstances, to restrict the processing of your information, in
          which case, we will not process your information for any purpose other
          than storing it; (vi) you have the right, under certain circumstances,
          to obtain the erasure of your Personal Information from us; (vii) you
          have the right to receive your information in a structured, commonly
          used and machine readable format and, if technically feasible, to have
          it transmitted to another controller without any hindrance. This
          provision is applicable provided that your information is processed by
          automated means and that the processing is based on your consent, on a
          contract which you are part of, or on pre-contractual obligations
          thereof.
        </p>

        <h3 className="font-bold text-[18px] lg:text-[20px]">
          Privacy of children
        </h3>
        <p className="text-[18px] lg:text-[20px]">
          We don't knowingly collect Personal Information from children under
          18. Parents can monitor and instruct their children's online activity.
        </p>

        <h3 className="font-bold text-[20px]">Cookies</h3>
        <p className="text-[18px] lg:text-[20px]">
          The Website uses “cookies” to help personalize your online experience.
          A cookie is a text file that is placed on your hard disk by a web page
          server. Cookies cannot be used to run programs or deliver viruses to
          your computer. Cookies are uniquely assigned to you, and can only be
          read by a web server in the domain that issued the cookie to you.
        </p>
        <p className="text-[18px] lg:text-[20px]">
          We may use cookies to collect, store, and track information for
          statistical purposes to operate the Website. You have the ability to
          accept or decline cookies. Most web browsers automatically accept
          cookies, but you can usually modify your browser setting to decline
          cookies if you prefer. To learn more about cookies and how to manage
          them, visit internetcookies.org
        </p>

        <h3 className="font-bold text-[18px] lg:text-[20px]">
          Do Not Track signals
        </h3>
        <p className="text-[18px] lg:text-[20px]">
          Some browsers incorporate a Do Not Track feature that signals to
          websites you visit that you do not want to have your online activity
          tracked. Tracking is not the same as using or collecting information
          in connection with a website. For these purposes, tracking refers to
          collecting personally identifiable information from consumers who use
          or visit a website or online service as they move across different
          websites over time. The Website does not track its visitors over time
          and across third-party websites. However, some third-party sites may
          keep track of your browsing activities when they serve you content,
          which enables them to tailor what they present to you.
        </p>

        <h3 className="font-bold text-[18px] lg:text-[20px]">
          Email marketing
        </h3>
        <p className="text-[18px] lg:text-[20px]">
          We offer electronic newsletters to which you may voluntarily subscribe
          at any time. We are committed to keeping your e-mail address
          confidential and will not disclose your email address to any third
          parties except as allowed in the information use and processing
          section or for the purposes of utilizing a third-party provider to
          send such emails. We will maintain the information sent via e-mail in
          accordance with applicable laws and regulations.
        </p>
        <p className="text-[18px] lg:text-[20px]">
          In compliance with the CAN-SPAM Act, all e-mails sent from us will
          clearly state who the e-mail is from and provide clear information on
          how to contact the sender. You may choose to stop receiving our
          newsletter or marketing emails by following the unsubscribe
          instructions included in these emails or by contacting us.
        </p>

        <h3 className="font-bold text-[18px] lg:text-[20px]">
          Links to other resources
        </h3>
        <p className="ttext-[18px] lg:text-[20px]">
          We're not responsible for the privacy practices of linked resources or
          third parties. We strongly recommend that you be aware when you leave
          the Website and to read the privacy statements of each and every
          resource that may collect Personal Information.
        </p>

        <h3 className="font-bold text-[18px] lg:text-[20px]">
          Information security
        </h3>
        <p className="text-[18px] lg:text-[20px]">
          We take measures to secure your information but can't guarantee
          complete security due to the nature of the Internet. We secure
          information you provide on computer servers in a controlled, secure
          environment, protected from unauthorized access, use, or disclosure.
          However, no data transmission over the Internet or wireless network
          can be guaranteed. Therefore, while we strive to protect your Personal
          Information, you acknowledge that (i) there are security and privacy
          limitations of the Internet which are beyond our control; (ii) the
          security, integrity, and privacy of any and all information and data
          exchanged between you and the Website cannot be guaranteed; and (iii)
          any such information and data may be viewed or tampered with in
          transit by a third party, despite best efforts.
        </p>

        <h3 className="font-bold text-[18px] lg:text-[20px]">Data breach</h3>
        <p className="text-[18px] lg:text-[20px]">
          In the event we become aware that the security of the Website has been
          compromised or users Personal Information has been disclosed to
          unrelated third parties as a result of external activity, including,
          but not limited to, security attacks or fraud, we reserve the right to
          take reasonably appropriate measures, including, but not limited to,
          investigation and reporting, as well as notification to and
          cooperation with law enforcement authorities. If a breach occurs,
          we'll take appropriate measures and notify affected individuals.
        </p>

        <h3 className="font-bold text-[18px] lg:text-[20px]">
          Changes and amendments
        </h3>
        <p className="text-[18px] lg:text-[20px]">
          We reserve the right to modify this Policy or its terms relating to
          the Website from time to time at our discretion and will notify you of
          any material changes to the way in which we treat Personal
          Information. When we do, we will revise the updated date at the bottom
          of this page. We may also provide notice to you in other ways at our
          discretion, such as through the contact information you have provided.
          Any updated version of this Policy will be effective immediately upon
          the posting of the revised policy unless otherwise specified. Your
          continued use of the Website after the effective date of the revised
          Policy (or such other act specified at that time) will constitute your
          consent to those changes. However, we will not, without your consent,
          use your Personal Information in a manner materially different from
          what was stated at the time your Personal Information was collected.
        </p>

        <h3 className="font-bold text-[18px] lg:text-[20px]">
          Acceptance of this policy
        </h3>
        <p className="text-[18px] lg:text-[20px]">
          By accessing and using the Website, you agree to abide by this Policy.
          By accessing and using the Website you agree to be bound by this
          Policy. If you do not agree to abide by the terms of this Policy, you
          are not authorized to access or use the Website.
        </p>

        <h3 className="font-bold text-[20px]">Contacting us</h3>
        <p className="text-[16px] lg:text-[18px]">
          If you have questions about this Policy or your Personal Information,
          you can contact us through the{" "}
          <Link className="text-red-500 underline" to={"/contact-us"}>
            {" "}
            contact form.
          </Link>
        </p>

        <p className="text-[16px] lg:text-[18px]">
          This document was last updated on January 15, 2021.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
