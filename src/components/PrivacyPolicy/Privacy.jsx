import React from "react";
import { Link } from "react-router-dom";

function Privacy() {
  return (
    <>
      <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4 bg-gray-50">
        <div className="flex items-center justify-between mb-4 md:mb-0">
          <h1 className="leading-none text-2xl text-grey-darkest">
            <Link
              className="no-underline text-grey-darkest hover:text-black"
              to="/"
            >
              <img
                className="mx-auto"
                src={require("assets/logo.png").default}
                alt="StandNote"
                style={{ width: 240 }}
              />
            </Link>
          </h1>

          <Link className="text-black hover:text-orange md:hidden" to="/">
            <i className="fa fa-2x fa-bars"></i>
          </Link>
        </div>
        <nav>
          <ul className="list-reset md:flex md:items-center">
            <li className="md:ml-4">
              <Link
                className="block no-underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0 font-bold"
                to="/register"
              >
                Register
              </Link>
            </li>
            <li className="md:ml-4">
              <Link
                className="border-t block no-underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0 font-bold"
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li className="md:ml-4">
              <Link
                class="border-t block no-underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0 font-bold"
                to="/"
              >
                Integrations
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="w-full min-h-screen bg-gray-200">
        <h1 className="mb-2 pt-4 text-center text-4xl text-gray-700 font-bold">
          Privacy Policy
        </h1>
        <div className="md:px-32">
          <h1 className="mb-4 pb-4 pt-2 text-center text-2xl text-gray-500 font-bold">Last Updated on 12th December 2020</h1>
          <p>
            At <strong>StandNote</strong>, accessible from <a href="https://standnote.netlify.app/" className="text-indigo-700 font-bold">https://standnote.netlify.app/</a>, one of
            our main priorities is the privacy of our visitors. This Privacy
            Policy document contains types of information that is collected and
            recorded by StandNote and how we use it.
          </p>

          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us at <a href="mailto:standnote@gmail.com" className="text-indigo-700 font-bold">standnote@gmail.com</a>
          </p>

          <p>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in StandNote. This policy is not
            applicable to any information collected offline or via channels
            other than this website.
          </p>

          <h2 className="my-4 pt-4 text-2xl text-gray-700 font-bold">Consent</h2>

          <p>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>

          <h2 className="my-4 pt-4 text-2xl text-gray-700 font-bold">Information we collect</h2>

          <p>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide.
          </p>
          <p>
            When you register for an Account, we may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number.
          </p>

          <h2 className="my-4 pt-4 text-2xl text-gray-700 font-bold">How we use your information</h2>

          <p>
            We use the information we collect in various ways, including to:
          </p>

          <ul className="list-disc">
            <li className="list-inside">Provide, operate, and maintain our webste</li>
            <li className="list-inside">Improve, personalize, and expand our webste</li>
            <li className="list-inside">Understand and analyze how you use our webste</li>
            <li className="list-inside">Develop new products, services, features, and functionality</li>
            <li className="list-inside">
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the webste, and for
              marketing and promotional purposes
            </li>
            <li className="list-inside">Send you emails</li>
            <li className="list-inside">Find and prevent fraud</li>
          </ul>

          <h2 className="my-4 pt-4 text-2xl text-gray-700 font-bold">Log Files</h2>

          <p>
            StandNote follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting services' analytics. The information
            collected by log files include internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering
            the site, tracking users' movement on the website, and gathering
            demographic information.
          </p>

          <h2 className="my-4 pt-4 text-2xl text-gray-700 font-bold">Advertising Partners Privacy Policies</h2>

          <p>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of StandNote.
          </p>

          <p>
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on StandNote, which
            are sent directly to users' browser. They automatically receive your
            IP address when this occurs. These technologies are used to measure
            the effectiveness of their advertising campaigns and/or to
            personalize the advertising content that you see on websites that
            you visit.
          </p>

          <p>
            Note that StandNote has no access to or control over these cookies
            that are used by third-party advertisers.
          </p>

          <h2 className="my-4 pt-4 text-2xl text-gray-700 font-bold">Third Party Privacy Policies</h2>

          <p>
            StandNote's Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options.{" "}
          </p>

          <p>
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites.
          </p>

          <h2 className="my-4 pt-4 text-2xl text-gray-700 font-bold">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>

          <p>
            Under the CCPA, among other rights, California consumers have the
            right to:
          </p>
          <p>
            Request that a business that collects a consumer's personal data
            disclose the categories and specific pieces of personal data that a
            business has collected about consumers.
          </p>
          <p>
            Request that a business delete any personal data about the consumer
            that a business has collected.
          </p>
          <p>
            Request that a business that sells a consumer's personal data, not
            sell the consumer's personal data.
          </p>
          <p>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>

          <h2 className="my-4 pt-4 text-2xl text-gray-700 font-bold">GDPR Data Protection Rights</h2>

          <p>
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
          </p>
          <ul className="list-disc">
          <li className="list-inside">
            <strong>The right to access –</strong> You have the right to request copies of your
            personal data. We may charge you a small fee for this service.
          </li>
          <li className="list-inside">
            <strong>The right to rectification –</strong> You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete.
          </li>
          <li className="list-inside">
            <strong>The right to erasure –</strong> You have the right to request that we erase
            your personal data, under certain conditions.
          </li>
          <li className="list-inside">
            <strong>The right to restrict processing –</strong> You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.
          </li>
          <li className="list-inside">
            <strong>The right to object to processing –</strong> You have the right to object to
            our processing of your personal data, under certain conditions.
          </li>
          <li className="list-inside">
            <strong>The right to data portability –</strong> You have the right to request that
            we transfer the data that we have collected to another organization,
            or directly to you, under certain conditions.
          </li>
          </ul>

          <h2 className="my-4 pt-4 text-2xl text-gray-700 font-bold">Children's Information</h2>

          <p>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>

          <p className="pb-32">
            StandNote does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </p>
        </div>
      </div>
    </>
  );
}

export default Privacy;
